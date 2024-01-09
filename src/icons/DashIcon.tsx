import * as React from 'react';
import { SVGProps } from 'react';
const SvgDashIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={10} height={2} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 1a1 1 0 0 1 1-1h8a1 1 0 0 1 0 2H1a1 1 0 0 1-1-1Z"
      fill="#fff"
    />
  </svg>
);
export default SvgDashIcon;
