import React from 'react';
import { AdIcon, AdSetIcon, ExpandIcon } from '../../../../icons';
import { Title } from '../../../../theme';
import { StyledExpandButtonContainer } from './ExpandButton.styled';

interface ExpandButtonProps {
  type: string;
  title: string;
  isExpanded: boolean;
  setIsExpanded: any;
}

const ExpandButton: React.FC<ExpandButtonProps> = ({ isExpanded, setIsExpanded, type, title }) => {
  return (
    <StyledExpandButtonContainer onClick={() => setIsExpanded((prevValue: any) => !prevValue)}>
      <ExpandIcon className={isExpanded ? 'expanded' : ''} />
      {type === 'ad-set' ? <AdSetIcon className={type} /> : <AdIcon className={type} />}
      <Title className="text">{title}</Title>
    </StyledExpandButtonContainer>
  );
};
export default ExpandButton;
