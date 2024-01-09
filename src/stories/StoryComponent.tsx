import styled, { ThemeProvider } from 'styled-components';
import React, { ReactNode } from 'react';
import { GlobalStyles } from '../config/global.styles';
import { defaultTheme } from '../theme';
import '../config/fonts/styles.css';

export const StyledStoryComponent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 100px;
  min-height: 100vh;
  .row {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 1rem;
  }
  .header {
    text-decoration: underline;
  }
`;

interface StoryComponentProps {
  children: ReactNode | ReactNode[];
}

const StoryComponent: React.FC<StoryComponentProps> = ({ children }) => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <StyledStoryComponent>{children}</StyledStoryComponent>
    </ThemeProvider>
  );
};

export default StoryComponent;
