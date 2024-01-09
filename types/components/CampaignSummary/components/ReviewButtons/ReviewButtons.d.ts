import React from "react";
interface ReviewButtonsProps {
    onApprove: any;
    onDecline: any;
    campaignId: string;
    adSetId: string;
    adId: string;
}
declare const ReviewButtons: React.FC<ReviewButtonsProps>;
export default ReviewButtons;
