import * as React from 'react';
import { SVGProps } from 'react';
const SvgUploadIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15 3H9a6 6 0 0 0-6 6v6a6 6 0 0 0 6 6h6a6 6 0 0 0 6-6V9a6 6 0 0 0-6-6ZM9 1a8 8 0 0 0-8 8v6a8 8 0 0 0 8 8h6a8 8 0 0 0 8-8V9a8 8 0 0 0-8-8H9Z"
      fill="#000"
    />
    <path d="M12 7v10M7 12h10" stroke="#000" strokeWidth={2} strokeLinecap="round" />
  </svg>
);
export default SvgUploadIcon;
