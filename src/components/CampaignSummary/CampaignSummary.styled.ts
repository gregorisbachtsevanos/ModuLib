import styled from 'styled-components';

export const StyledCampaignSummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  .blocks {
    display: flex;
    align-items: center;
    margin-left: 20px;
    gap: 2rem;
  }

  .icon {
    width: 40px;
    height: 40px;
    border-radius: 1000000000px;
  }

  .title {
    display: flex;
    gap: 12px;
    align-items: center;
  }
`;
