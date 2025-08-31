type TAppLogoProps = {
  size?: number;
  className?: string;
};

export function AppLogo({ size = 60, className = '' }: TAppLogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="2 2 60 60"
      className={className}
      fill="none"
    >
      <circle cx="32" cy="32" r="30" fill="#27AE60" />
      <circle cx="32" cy="32" r="22" fill="white" stroke="#27AE60" strokeWidth="1" />
      <path
        d="M32 18L38.5 22.5L36.5 30.5L27.5 30.5L25.5 22.5Z"
        fill="#27AE60"
        stroke="#27AE60"
        strokeWidth="0.5"
      />
      <path d="M32 18L32 10" stroke="#27AE60" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M25.5 22.5L19 15" stroke="#27AE60" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M38.5 22.5L45 15" stroke="#27AE60" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M27.5 30.5L20 36" stroke="#27AE60" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M36.5 30.5L44 36" stroke="#27AE60" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M32 10L38 12L40 18L32 18" fill="none" stroke="#27AE60" strokeWidth="1" />
      <path d="M19 15L25.5 22.5L27.5 30.5L20 36L14 28L16 20Z" fill="none" stroke="#27AE60" strokeWidth="1" />
      <path d="M45 15L38.5 22.5L36.5 30.5L44 36L50 28L48 20Z" fill="none" stroke="#27AE60" strokeWidth="1" />
      <path d="M20 36L32 46L44 36" fill="none" stroke="#27AE60" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="32" cy="54" r="1.5" fill="#27AE60" />
      <circle cx="28" cy="56" r="1" fill="#27AE60" opacity="0.7" />
      <circle cx="36" cy="56" r="1" fill="#27AE60" opacity="0.7" />
    </svg>
  );
}
