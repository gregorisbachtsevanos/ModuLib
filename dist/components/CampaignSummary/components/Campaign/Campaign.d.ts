import React, { ReactNode } from 'react';
import { Campaign as CampaignType } from '../../../../types';
interface CampaignProps {
    children: ReactNode;
    campaign: CampaignType;
}
declare const Campaign: React.FC<CampaignProps>;
export default Campaign;
