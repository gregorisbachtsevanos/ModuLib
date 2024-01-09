import React from "react";
import { Campaign as CampaignType } from "../../types";
import { processSelectedRange } from "../../utils/formatData";

import Ad from "./components/Ad";
import AdSet from "./components/AdSet";
import Campaign from "./components/Campaign";
import ReviewButtons from "./components/ReviewButtons";

export interface CampaignSummaryProps {
  campaign: CampaignType;
  previewURL: string;
  forModeration?: boolean;
  onApprove?: any;
  onDecline?: any;
}

const CampaignSummary: React.FC<CampaignSummaryProps> = ({
  campaign,
  forModeration = false,
  previewURL,
  onApprove,
  onDecline,
}) => {
  return (
    <div>
      <Campaign campaign={campaign}>
        {campaign.sponsorshipsSets.map((adSet) => (
          <AdSet
            adSet={adSet}
            key={adSet.id}
            currencyCode={campaign.brandCurrencyCode}
            timezoneId={campaign.brandTimezoneId}
          >
            {adSet.sponsorships?.map((ad) => (
              <Ad
                ad={ad}
                key={ad.id}
                videoRange={processSelectedRange(
                  adSet.videoDurationAllowedRange
                )}
                previewURL={previewURL}
                campaign={campaign}
              >
                {forModeration && (
                  <ReviewButtons
                    onApprove={onApprove}
                    onDecline={onDecline}
                    campaignId={campaign.id}
                    adSetId={adSet.id}
                    adId={ad.id}
                  />
                )}
              </Ad>
            ))}
          </AdSet>
        ))}
      </Campaign>
    </div>
  );
};
export default CampaignSummary;
