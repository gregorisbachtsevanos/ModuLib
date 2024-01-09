import React, { ReactNode } from "react";
import { StyledErrorContainer } from "./Error.styled";

export interface ErrorProps {
  children: ReactNode;
}

const Label: React.FC<ErrorProps> = ({ children }) => {
  return (
    <StyledErrorContainer>
      <p className="message">{children}</p>
    </StyledErrorContainer>
  );
};
export default Label;
