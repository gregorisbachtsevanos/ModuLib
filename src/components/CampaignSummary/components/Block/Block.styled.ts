import styled from 'styled-components';

export const StyledBlockContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  gap: 16px;
  border-left: 2px solid ${({ theme }) => theme.palette.black[200]};
  padding-left: 24px;
  min-width: 250px;
  max-width: 450px;

  .list {
    .group {
      display: flex;
      gap: 5px;
      margin-top: 10px;
      text-transform: capitalize;
      align-items: flex-start;
      flex-wrap: wrap;

      .title {
        font-weight: 600;
      }

      .value {
        flex: 1;
      }

      .option {
        width: 100%;
        display: block;
        margin-left: 15px;
      }
    }
  }
`;
