import styled from "styled-components";

export const StyledErrorContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  .message {
    width: 100%;
    font-size: 0.75em;
    color: ${({ theme }) => theme.palette.error};
    text-align: right;
  }
`;
