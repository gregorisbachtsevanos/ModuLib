import React from "react";
import { Campaign as CampaignType } from "../../types";
export interface CampaignSummaryProps {
    campaign: CampaignType;
    previewURL: string;
    forModeration?: boolean;
    onApprove?: any;
    onDecline?: any;
}
declare const CampaignSummary: React.FC<CampaignSummaryProps>;
export default CampaignSummary;
