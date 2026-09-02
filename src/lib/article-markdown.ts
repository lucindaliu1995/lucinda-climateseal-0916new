export function slugify(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function createUniqueSlug(value: string, seen: Map<string, number>): string {
  const baseSlug = slugify(value) || 'section';
  const count = seen.get(baseSlug) || 0;

  seen.set(baseSlug, count + 1);

  return count === 0 ? baseSlug : `${baseSlug}-${count + 1}`;
}

type RenderMarkdownOptions = {
  editorialFormatting?: boolean;
  indentFirstParagraph?: boolean;
  compactLists?: boolean;
};

export function renderMarkdown(raw: string, options: RenderMarkdownOptions = {}): string {
  const { editorialFormatting = false, indentFirstParagraph = false, compactLists = false } = options;
  const linkClass = 'text-emerald-600 underline hover:text-emerald-700 transition-colors';
  let text = raw
    .replace(/\\n/g, '\n')
    .replace(/\\t/g, '\t')
    .replace(/\\"/g, '"')
    .replace(/\\\\/g, '\\');

  text = text.replace(/\r\n?/g, '\n');

  text = text.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, (_match, alt, url) => (
    `<figure class="my-10 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-3">
      <img src="${url}" alt="${alt}" class="w-full rounded-xl" loading="lazy" />
    </figure>`
  ));

  text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_match, label, url) => {
    if (typeof url === 'string' && (url.startsWith('#') || url.startsWith('/'))) {
      return `<a href="${url}" class="${linkClass}">${label}</a>`;
    }

    return `<a href="${url}" target="_blank" rel="noopener noreferrer" class="${linkClass}">${label}</a>`;
  });

  text = text.replace(/`([^`]+)`/g, '<code class="px-1 py-0.5 rounded bg-slate-100 text-slate-800">$1</code>');
  text = text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  text = text.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  text = text.replace(/^---$/gm, '<hr class="my-12 border-slate-200" />');

  const lines = text.split('\n');
  const html: string[] = [];
  const seenHeadingIds = new Map<string, number>();
  let inUL = false;
  let inOL = false;
  let inBlockquote = false;
  let paragraphCount = 0;

  const closeLists = () => {
    if (inUL) {
      html.push('</ul>');
      inUL = false;
    }
    if (inOL) {
      html.push('</ol>');
      inOL = false;
    }
  };

  const closeBlockquote = () => {
    if (inBlockquote) {
      html.push('</blockquote>');
      inBlockquote = false;
    }
  };

  const splitTableRow = (line: string): string[] => line.trim().replace(/^\|/, '').replace(/\|$/, '').split('|').map((cell) => cell.trim());
  const isTableSeparator = (line: string): boolean => {
    const cells = splitTableRow(line);
    return cells.length > 0 && cells.every((cell) => /^:?-{3,}:?$/.test(cell));
  };

  for (let lineIndex = 0; lineIndex < lines.length; lineIndex += 1) {
    const line = lines[lineIndex];
    if (line.includes('|') && lineIndex + 1 < lines.length && isTableSeparator(lines[lineIndex + 1])) {
      closeLists();
      closeBlockquote();
      const headers = splitTableRow(line);
      const rows: string[][] = [];
      lineIndex += 2;

      while (lineIndex < lines.length && lines[lineIndex].includes('|') && lines[lineIndex].trim()) {
        rows.push(splitTableRow(lines[lineIndex]));
        lineIndex += 1;
      }

      html.push('<div class="article-table-wrap"><table class="article-table"><thead><tr>');
      headers.forEach((cell) => html.push(`<th scope="col">${cell}</th>`));
      html.push('</tr></thead><tbody>');
      rows.forEach((row) => {
        html.push('<tr>');
        headers.forEach((_header, cellIndex) => html.push(`<td>${row[cellIndex] || ''}</td>`));
        html.push('</tr>');
      });
      html.push('</tbody></table></div>');
      lineIndex -= 1;
      continue;
    }

    const headingMatch = line.match(/^(#{1,6})\s+(.+)$/);
    if (headingMatch) {
      closeLists();
      closeBlockquote();
      const level = Math.min(6, headingMatch[1].length);
      const content = headingMatch[2].trim();
      const id = createUniqueSlug(content, seenHeadingIds);
      const headingClass = level === 2
        ? 'mt-14 border-t border-slate-200 pt-10 font-lora text-[1.9rem] font-semibold leading-tight text-[#123f3d] sm:text-[2.15rem]'
        : level === 3
          ? 'mt-9 text-[1.3rem] font-semibold leading-snug text-slate-900 sm:text-[1.4rem]'
          : level === 4
            ? 'mt-7 text-[1.1rem] font-semibold leading-snug text-slate-900'
            : 'mt-7 text-base font-semibold leading-snug text-slate-900';
      html.push(`<h${level} id="${id}" class="${headingClass} mb-4 scroll-mt-28">${content}</h${level}>`);
      continue;
    }

    if (/^>\s?/.test(line)) {
      closeLists();
      if (!inBlockquote) {
        html.push('<blockquote class="my-8 border-l-4 border-[#7ca99a] bg-[#f1f7f3] py-4 pl-5 pr-5 text-[1.05rem] font-medium leading-8 text-[#284f4b]">');
        inBlockquote = true;
      }
      html.push(`<p>${line.replace(/^>\s?/, '')}</p>`);
      continue;
    }

    closeBlockquote();

    if (/^\s*-\s+/.test(line)) {
      if (!inUL) {
        closeLists();
        html.push(editorialFormatting
          ? `<ul class="article-list article-list-unordered${compactLists ? ' article-list-compact' : ''}">`
          : '<ul class="my-6 list-disc space-y-3 pl-6 marker:text-[#4f8277]">');
        inUL = true;
      }
      const listItemClass = editorialFormatting
        ? 'article-list-item'
        : 'pl-1 text-[1.05rem] leading-8 text-slate-700';
      html.push(`<li class="${listItemClass}">${line.replace(/^\s*-\s+/, '')}</li>`);
      continue;
    }

    if (/^\s*\d+[.)]\s+/.test(line)) {
      if (!inOL) {
        closeLists();
        html.push(editorialFormatting
          ? '<ol class="article-list article-list-ordered">'
          : '<ol class="my-6 list-decimal space-y-3 pl-6 marker:font-semibold marker:text-[#215b57]">');
        inOL = true;
      }
      const listItemClass = editorialFormatting
        ? 'article-list-item'
        : 'pl-1 text-[1.05rem] leading-8 text-slate-700';
      html.push(`<li class="${listItemClass}">${line.replace(/^\s*\d+[.)]\s+/, '')}</li>`);
      continue;
    }

    if (/^<hr\b/.test(line)) {
      closeLists();
      html.push(line);
      continue;
    }

    if (/^\s*$/.test(line)) {
      if (compactLists && inUL && lineIndex + 1 < lines.length && /^\s*-\s+/.test(lines[lineIndex + 1])) {
        continue;
      }
      closeLists();
      html.push('');
      continue;
    }

    closeLists();
    const paragraphClass = editorialFormatting
      ? indentFirstParagraph && paragraphCount === 0
        ? 'article-first-paragraph mb-6 text-[1.08rem] leading-[1.85] text-slate-700'
        : 'mb-6 text-[1.08rem] leading-[1.85] text-slate-700'
      : 'mb-5 text-[1.05rem] leading-8 text-slate-700';
    html.push(`<p class="${paragraphClass}">${line}</p>`);
    paragraphCount += 1;
  }

  closeLists();
  closeBlockquote();

  return html.join('\n');
}

export function extractToc(raw: string): { level: number; text: string; id: string }[] {
  const text = raw.replace(/\\n/g, '\n').replace(/\r\n?/g, '\n');
  const seenHeadingIds = new Map<string, number>();

  return text
    .split('\n')
    .map((line) => line.match(/^(##)\s+(.+)$/))
    .filter((match): match is RegExpMatchArray => Boolean(match))
    .map((match) => ({
      level: match[1].length,
      text: match[2].trim(),
      id: createUniqueSlug(match[2].trim(), seenHeadingIds),
    }));
}
