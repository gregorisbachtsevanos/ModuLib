import React, { HTMLAttributes } from 'react';
import { TitleMd } from '../../../../theme';
import { StyledBlockContainer } from './Block.styled';

interface BlockProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
}

const Block: React.FC<BlockProps> = ({ children, title, ...rest }) => {
  return (
    <StyledBlockContainer {...rest}>
      <div className="block-title">
        <TitleMd>{title}</TitleMd>
      </div>
      {children}
    </StyledBlockContainer>
  );
};
export default Block;
