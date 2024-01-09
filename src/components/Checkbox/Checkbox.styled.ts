import styled from 'styled-components';

export const StyledCheckboxContainer = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  input {
    -webkit-appearance: none;
    appearance: none;
    &.rect {
      border-radius: 3px;
    }

    &.circle {
      border-radius: 100%;
      position: relative;
    }

    width: 20px;
    height: 20px;
    min-height: 20px;
    min-width: 20px;
    outline: none;
    cursor: pointer;
    background-color: ${({ theme }) => theme.palette.black[200]};

    &:checked {
      background-color: ${({ theme }) => theme.palette.violet};

      &.circle:after {
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        min-height: 10px;
        min-width: 10px;
        max-height: 10px;
        max-width: 10px;
        top: 50%;
        left: 50%;
        border-radius: 100%;
        transform: translate(-50%, -50%);
        background-color: ${({ theme }) => theme.palette.white};
      }

      & + label + .custom-check {
        display: block;
        position: absolute;
        top: -2px;
        left: 5px;
      }
      & + label + .dash {
        display: block;
        position: absolute;
        top: -5px;
        left: 5px;
      }
    }
  }

  label {
    cursor: pointer;
  }

  .custom-check {
    display: none;
    user-select: none;
    pointer-events: none;
  }

  .dash {
    display: none;
    user-select: none;
    pointer-events: none;
  }
`;
