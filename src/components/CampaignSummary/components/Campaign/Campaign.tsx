import React, { ReactNode } from 'react';
import { Text, Title } from '../../../../theme';
import { Campaign as CampaignType } from '../../../../types';
import { replaceUnderscoresWithSpaces } from '../../../../utils/formatData';
import Block from '../Block';
import { StyledCampaignContainer } from './Campaign.styled';

interface CampaignProps {
  children: ReactNode;
  campaign: CampaignType;
}

const Campaign: React.FC<CampaignProps> = ({ campaign, children }) => {
  return (
    <StyledCampaignContainer>
      <div className="title">
        <img src={campaign.brandLogoUri} alt="" className="icon" />
        <Title>{campaign.brandName}</Title>
      </div>
      <div className="blocks">
        <Block title="Campaign Name">
          <Text>{campaign.name}</Text>
        </Block>
        <Block title="Objective">
          <div className="group">
            <Text style={{ textTransform: 'capitalize' }}>
              {replaceUnderscoresWithSpaces(campaign.category)}
            </Text>
          </div>
        </Block>
        <Block title="Selected Charity">
          <div className="charity">
            <img src={campaign.charityLogoUri} alt="" className="icon" />
            <Text>{campaign.charityName}</Text>
          </div>
        </Block>
      </div>
      {children}
    </StyledCampaignContainer>
  );
};
export default Campaign;
