import React, { ReactNode } from "react";
import { StyledErrorContainer } from "./Error.styled";
import StoryComponent from "../../stories/StoryComponent";

export interface ErrorProps {
  children: ReactNode;
}

const Label: React.FC<ErrorProps> = ({ children }) => {
  return (
    <StoryComponent>
      <StyledErrorContainer>
        <p className="message">{children}</p>
      </StyledErrorContainer>
    </StoryComponent>
  );
};
export default Label;
