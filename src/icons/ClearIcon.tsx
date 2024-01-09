import * as React from 'react';
import { SVGProps } from 'react';
const SvgClearIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={20}
    height={20}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.115 5.705a.997.997 0 0 0-1.41 1.41L10.59 12l-4.885 4.885a.997.997 0 0 0 1.41 1.41L12 13.41l4.885 4.885a.997.997 0 0 0 1.41-1.41L13.41 12l4.885-4.885a.997.997 0 1 0-1.41-1.41L12 10.59 7.115 5.705Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgClearIcon;
