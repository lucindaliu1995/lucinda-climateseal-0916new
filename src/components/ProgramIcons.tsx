import type { ReactNode, SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;

function BaseIcon({ children, className = '', ...props }: IconProps & { children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function FileDraftIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M8 3h6l5 5v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6" />
      <path d="M9 17h4" />
    </BaseIcon>
  );
}

export function CorporateIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4 21V7a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v14" />
      <path d="M13 21V3a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v18" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
      <path d="M8 18h.01" />
      <path d="M16 7h.01" />
      <path d="M16 11h.01" />
      <path d="M16 15h.01" />
    </BaseIcon>
  );
}

export function SupplierPackIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M3 8l9-5 9 5-9 5-9-5Z" />
      <path d="M3 8v8l9 5 9-5V8" />
      <path d="M12 13v8" />
    </BaseIcon>
  );
}

export function CertificateIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4Z" />
      <path d="m9.5 12 1.8 1.8L14.8 10" />
    </BaseIcon>
  );
}

export function VerificationIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4 4h11l5 5v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4Z" />
      <path d="M15 4v5h5" />
      <path d="m8.5 15 2 2 5-5" />
    </BaseIcon>
  );
}

export function UploadIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 16V4" />
      <path d="m7 9 5-5 5 5" />
      <path d="M4 18v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1" />
    </BaseIcon>
  );
}

export function StructureIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <rect x="3" y="4" width="7" height="6" rx="1.5" />
      <rect x="14" y="4" width="7" height="6" rx="1.5" />
      <rect x="8.5" y="14" width="7" height="6" rx="1.5" />
      <path d="M6.5 10v2h8v2" />
      <path d="M17.5 10v2h-3" />
    </BaseIcon>
  );
}

export function FactorIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <circle cx="8" cy="8" r="3" />
      <circle cx="16" cy="16" r="3" />
      <path d="m10.5 10.5 3 3" />
      <path d="M14 8h6" />
      <path d="M4 16H10" />
    </BaseIcon>
  );
}

export function PackageIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M3 8l9-5 9 5-9 5-9-5Z" />
      <path d="M3 8v8l9 5 9-5V8" />
      <path d="M12 13v8" />
      <path d="m8 6 8 4" />
    </BaseIcon>
  );
}

export function ReviewIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4 4h11l5 5v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4Z" />
      <path d="M15 4v5h5" />
      <path d="M8 14h4" />
      <path d="M8 18h8" />
      <circle cx="16.5" cy="13.5" r="2.5" />
    </BaseIcon>
  );
}

export function PricingIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M4 7h16" />
      <path d="M7 3v8" />
      <path d="M17 3v8" />
      <rect x="3" y="11" width="18" height="10" rx="2" />
      <path d="M8 16h8" />
    </BaseIcon>
  );
}

export function ReferralIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M10 13a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
      <path d="M18 20a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
      <path d="m13.5 9.5 1.5 1.5" />
      <path d="m12 15 2-2" />
    </BaseIcon>
  );
}

export function TrustIcon(props: IconProps) {
  return (
    <BaseIcon {...props}>
      <path d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4Z" />
      <path d="M8 12h8" />
      <path d="M8.5 16h7" />
    </BaseIcon>
  );
}
