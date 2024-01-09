import styled from 'styled-components';

export const StyledReviewButtonsContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 1rem;
  align-items: center;
  padding-left: 24px;

  .decline {
    border: 1px solid ${({ theme }) => theme.palette.error};
    color: ${({ theme }) => theme.palette.error};
  }
`;
