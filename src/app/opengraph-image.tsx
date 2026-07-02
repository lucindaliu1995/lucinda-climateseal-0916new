import { ImageResponse } from 'next/og';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

export const runtime = 'nodejs';
export const alt = 'Climate Seal';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

async function getLogoDataUri() {
  const logoPath = path.join(process.cwd(), 'public', 'climate-seal-logo-white.png');
  const logoBuffer = await readFile(logoPath);
  return `data:image/png;base64,${logoBuffer.toString('base64')}`;
}

export default async function OpenGraphImage() {
  const logoSrc = await getLogoDataUri();

  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: '100%',
          background: '#003f3a',
          color: 'white',
          padding: '72px 88px',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'Arial, Helvetica, sans-serif',
        }}
      >
        <img
          src={logoSrc}
          alt="Climate Seal"
          width={1000}
          height={398}
          style={{
            width: 1000,
            height: 398,
            objectFit: 'contain',
          }}
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
