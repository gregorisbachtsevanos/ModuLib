import styled from 'styled-components';

export const StyledExpandButtonContainer = styled.button`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.palette.violet};
  cursor: pointer;

  .text {
    margin-left: 5px;
  }

  svg {
    path {
      fill: ${({ theme }) => theme.palette.violet};
    }
    rect {
      stroke: ${({ theme }) => theme.palette.violet};
    }
  }

  svg.ad {
    path {
      stroke: ${({ theme }) => theme.palette.violet};
      fill: none;
    }
    circle {
      stroke: ${({ theme }) => theme.palette.violet};
    }
  }

  svg.expanded {
    transform: rotate(90deg);
    transition: all;
  }
`;
