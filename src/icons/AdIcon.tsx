import * as React from 'react';
import { SVGProps } from 'react';
const SvgAdIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M15.5 12.866 11 15.464a1 1 0 0 1-1.5-.866V9.402a1 1 0 0 1 1.5-.866l4.5 2.598a1 1 0 0 1 0 1.732Z"
      stroke="#000"
      strokeWidth={2}
    />
    <circle cx={12} cy={12} r={9} stroke="#000" strokeWidth={2} />
  </svg>
);
export default SvgAdIcon;
