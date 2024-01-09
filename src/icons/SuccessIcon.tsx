import * as React from 'react';
import { SVGProps } from 'react';
const SvgSuccessIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle cx={12} cy={12} r={10} fill="#00B005" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.61 8.207a1 1 0 0 1 .183 1.403l-5 6.5a1 1 0 0 1-1.433.158l-3-2.5a1 1 0 0 1 1.28-1.536l2.201 1.834 4.366-5.676a1 1 0 0 1 1.403-.183Z"
      fill="#fff"
    />
  </svg>
);
export default SvgSuccessIcon;
