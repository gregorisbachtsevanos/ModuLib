import React, { ReactNode } from 'react';
import { Ad as AdType, Campaign as CampaignType } from '../../../../types';
interface AdProps {
    ad: AdType;
    videoRange: string[];
    previewURL: string;
    campaign: CampaignType;
    children: ReactNode;
}
declare const Ad: React.FC<AdProps>;
export default Ad;
