import React, { ReactNode } from "react";
import { StyledErrorContainer } from "./Error.styled";

export interface ErrorProps {
  children: ReactNode;
}

const Error: React.FC<ErrorProps> = ({ children }) => (
  <div>
    <p className="message">{children}</p>
  </div>
);

export default Error;
