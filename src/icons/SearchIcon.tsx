import * as React from 'react';
import { SVGProps } from 'react';
const SvgSearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14 9.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-.665 5.249a6.5 6.5 0 1 1 1.414-1.414l5.958 5.958a1 1 0 0 1-1.414 1.414l-5.958-5.958Z"
      fill="currentColor"
    />
  </svg>
);
export default SvgSearchIcon;
