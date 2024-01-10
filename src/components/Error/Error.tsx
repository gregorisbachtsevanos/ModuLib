import React, { ReactNode } from "react";
import { StyledErrorContainer } from "./Error.styled";

export interface ErrorProps {
  children: ReactNode;
}

const Error: React.FC<ErrorProps> = ({ children }) => (
  <StyledErrorContainer>
    <p className="message">{children}</p>
  </StyledErrorContainer>
);

export default Error;
