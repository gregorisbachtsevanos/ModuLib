import * as React from 'react';
import { SVGProps } from 'react';
const SvgAdSetIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 8a1 1 0 0 1 1-1h10.703a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1ZM3 12a1 1 0 0 1 1-1h7.036a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Z"
      fill="#000"
    />
    <rect x={4} y={4} width={16} height={16} rx={1} stroke="#000" strokeWidth={2} />
  </svg>
);
export default SvgAdSetIcon;
