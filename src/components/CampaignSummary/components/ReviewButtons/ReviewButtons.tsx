import React from "react";
import Button from "../../../Button/Web";
import { StyledReviewButtonsContainer } from "./ReviewButtons.styled";

interface ReviewButtonsProps {
  onApprove: any;
  onDecline: any;
  campaignId: string;
  adSetId: string;
  adId: string;
}

const ReviewButtons: React.FC<ReviewButtonsProps> = ({
  onApprove,
  onDecline,
  campaignId,
  adSetId,
  adId,
}) => {
  return (
    <StyledReviewButtonsContainer>
      <Button
        styleType="primary"
        onClick={() =>
          onApprove({
            campaignId,
            adSetId,
            adId,
          })
        }
      >
        Approve
      </Button>
      <Button
        styleType="ghost"
        onClick={() =>
          onDecline({
            campaignId,
            adSetId,
            adId,
          })
        }
        className="decline"
      >
        Decline
      </Button>
    </StyledReviewButtonsContainer>
  );
};
export default ReviewButtons;
