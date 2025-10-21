import type { ReactNode, SVGProps } from "react";

import type { IconName } from "../../types/content";

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
}

const viewBox = "0 0 24 24";

const iconPaths: Record<IconName, ReactNode> = {
  user: (
    <>
      <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5Z" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </>
  ),
  calendar: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </>
  ),
  location: (
    <>
      <path d="M12 22s7-6.14 7-12a7 7 0 1 0-14 0c0 5.86 7 12 7 12Z" />
      <circle cx="12" cy="10" r="3" />
    </>
  ),
  phone: (
    <>
      <path d="M6.5 3h3l1 4-2 1a12.044 12.044 0 0 0 5.5 5.5l1-2 4 1v3a2 2 0 0 1-2.2 2 17.97 17.97 0 0 1-12.8-12.8A2 2 0 0 1 6.5 3Z" />
    </>
  ),
  email: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  education: (
    <>
      <path d="M3 9 12 4l9 5-9 5-9-5Z" />
      <path d="M7 12v4c0 1.657 2.686 3 5 3s5-1.343 5-3v-4" />
      <path d="m17 9 3 2v4" />
    </>
  ),
  language: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M21 12H3" />
      <path d="M12 3a14.5 14.5 0 0 1 4 9 14.5 14.5 0 0 1-4 9" />
      <path d="M12 3a14.5 14.5 0 0 0-4 9 14.5 14.5 0 0 0 4 9" />
    </>
  ),
  frontend: (
    <>
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="m9 9-3 3 3 3" />
      <path d="m15 9 3 3-3 3" />
    </>
  ),
  backend: (
    <>
      <path d="M4 4h16v4H4z" />
      <path d="M4 12h16v8H4z" />
      <path d="M9 8v4" />
      <path d="M15 8v4" />
    </>
  ),
  devops: (
    <>
      <path d="M4 12a4 4 0 0 1 7-2.828l2 2 2-2a4 4 0 1 1 0 5.656l-2 2-2-2A4 4 0 0 1 4 12Z" />
      <circle cx="12" cy="12" r="1.5" />
    </>
  ),
  external: (
    <>
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </>
  ),
  github: (
    <>
      <path d="M12 2C6.477 2 2 6.54 2 12.083c0 4.47 2.865 8.257 6.839 9.604.5.094.683-.219.683-.486 0-.24-.009-.876-.013-1.72-2.782.61-3.369-1.353-3.369-1.353-.454-1.162-1.11-1.472-1.11-1.472-.907-.627.069-.615.069-.615 1.003.072 1.53 1.049 1.53 1.049.892 1.545 2.341 1.097 2.91.839.091-.663.35-1.097.636-1.35-2.22-.258-4.555-1.132-4.555-5.041 0-1.113.39-2.024 1.03-2.738-.103-.258-.447-1.296.098-2.703 0 0 .84-.27 2.75 1.045a9.38 9.38 0 0 1 2.5-.34c.848.004 1.704.115 2.5.34 1.91-1.315 2.748-1.045 2.748-1.045.547 1.407.203 2.445.1 2.703.64.714 1.028 1.625 1.028 2.738 0 3.921-2.34 4.78-4.57 5.034.36.318.679.942.679 1.902 0 1.374-.013 2.482-.013 2.819 0 .27.18.584.688.485C19.138 20.336 22 16.552 22 12.083 22 6.54 17.523 2 12 2Z" />
    </>
  ),
  blog: (
    <>
      <path d="M5 4h14v16H5z" />
      <path d="M9 8h6" />
      <path d="M9 12h6" />
      <path d="M9 16h4" />
    </>
  ),
  "chevron-down": (
    <>
      <path d="M6 9l6 6 6-6" />
    </>
  ),
  filter: (
    <>
      <path d="M4 5h16l-6.5 7.5V20l-3-1v-6.5Z" />
    </>
  ),
  stack: (
    <>
      <path d="m4 7 8 4 8-4-8-4-8 4Z" />
      <path d="m4 12 8 4 8-4" />
      <path d="m4 17 8 4 8-4" />
    </>
  ),
};

export function Icon({ name, size = 20, ...props }: IconProps) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox={viewBox}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {iconPaths[name]}
    </svg>
  );
}
