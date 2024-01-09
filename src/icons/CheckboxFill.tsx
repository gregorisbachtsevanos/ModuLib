import * as React from 'react';
import { SVGProps } from 'react';
const SvgCheckboxFill = (props: SVGProps<SVGSVGElement>) => (
  <svg width={11} height={9} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m9.089 1.472-4.944 6.29L1 5.29"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SvgCheckboxFill;
