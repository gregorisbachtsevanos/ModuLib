import React, { ReactNode } from "react";
import { StyledErrorContainer } from "./Error.styled";

export interface ErrorProps {
  children: ReactNode;
}

const Label: React.FC<ErrorProps> = ({ children }) => {
  return (
    <div>
      <p className="message">{children}</p>
    </div>
  );
};
export default Label;
