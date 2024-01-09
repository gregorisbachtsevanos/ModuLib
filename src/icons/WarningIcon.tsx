import * as React from 'react';
import { SVGProps } from 'react';
const SvgWarningIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx={12} cy={12} r={10} fill="#FF9800" />
    <path
      d="M13 7h-2v7h2V7Zm-1 8c-.568 0-1 .495-1 1 0 .517.419 1 .986 1 .582 0 1.014-.483 1.014-1 0-.505-.419-1-1-1Z"
      fill="#fff"
    />
  </svg>
);
export default SvgWarningIcon;
