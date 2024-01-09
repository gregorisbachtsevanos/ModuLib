import styled, { css, DefaultTheme } from 'styled-components';

export const defaultTheme: DefaultTheme = {
  palette: {
    white: '#ffffff',
    black: {
      50: '#F3F2F6',
      100: '#EEEDF1',
      200: '#E5E5EA',
      300: '#B7B6BD',
      400: '#9B9AA0',
      500: '#6F737A',
      600: '#585664',
      700: '#464451',
      800: '#282733',
      900: '#050214',
    },
    lightYellow: '#FAD935',
    yellow: '#FCEB3C',
    darkYellow: '#F7A924',
    violet: '#6672FA',
    darkViolet: '#3B41DD',
    lightViolet: '#CCCEFD',
    extraLightViolet: '#EBECFF',
    navy: '#292152',
    success: '#00B005',
    fadedSuccess: '#58D46B',
    error: '#FF0B18',
    fadedError: '#ffedef',
    warning: '#FF8E00',
    fadedWarning: '#fff2de',
  },
  sizes: {
    smallMobile: 'max-width:420px',
    mobile: 'min-width:421px',
    tablet: 'min-width:501px',
    laptop: 'min-width: 900px',
    desktop: 'min-width:1300px',
  },
  maxWidth: '500px',
  pagePadding: '16px',
};

export const Title2Xl = styled.h1`
  font-weight: 700;
  font-size: 44px;
  line-height: 48px;
  margin: 0;
`;

export const TitleXl = styled.h2`
  font-weight: 700;
  font-size: 30px;
  line-height: 32px;
  margin: 0;
`;

export const TitleLg = styled.h3`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  margin: 0;
`;

export const TitleMd = styled.h4`
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  margin: 0;
`;

export const Title = styled.h4`
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  margin: 0;
`;

export const TitleSecondary = styled.h5`
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  margin: 0;
`;

interface TextProps {
  gray?: boolean;
}

export const Text = styled.span<TextProps>`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
`;

export const BodyTitle = styled.h4`
  font-weight: 700;
  font-size: 14px;
  line-height: 14px;
  letter-spacing: -0.5px;
  margin: 0;
`;

export const Caption = styled.span`
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
`;

export const CaptionTitle = styled.span`
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
`;

export const LinkStyle = styled.span`
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  text-decoration: underline;
`;

export const Emojis = styled.div`
  font-size: 43px;
  font-weight: 400;
  line-height: 43px;
  letter-spacing: 0.5px;
  text-align: left;
`;

export const mobileButtonStyles = css`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  line-height: 18px;
  font-size: 18px;
  padding: 19px 24px;
  text-align: center;
  font-family: inherit;
  border-radius: 28px;
  min-height: 56px;
  width: auto;
  max-height: 56px;
  max-width: ${({ theme }) => `calc(${theme.maxWidth} - 2 * ${theme.pagePadding})`};

  &.fixed {
    position: fixed;
    width: ${({ theme }) => `calc(100% - 2 * ${theme.pagePadding})`};
    bottom: 16px;
    left: 50%;
    transform: translateX(-50%);
  }

  &.small {
    height: 36px;
    max-height: 36px;
    min-height: 36px;
    font-size: 14px;
    line-height: 14px;
    letter-spacing: -0.5px;
  }

  &.primary {
    background-color: ${({ theme }) => theme.palette.violet};
    color: ${({ theme }) => theme.palette.white};

    &:disabled {
      background-color: ${({ theme }) => theme.palette.black[200]};
      color: ${({ theme }) => theme.palette.black[500]};
      cursor: not-allowed;
    }
  }

  &.dark {
    background-color: ${({ theme }) => theme.palette.darkViolet};
    color: ${({ theme }) => theme.palette.white};
    &:disabled {
      background-color: ${({ theme }) => theme.palette.black[200]};
      color: ${({ theme }) => theme.palette.black[500]};
      cursor: not-allowed;
    }
  }

  &.secondary {
    background-color: transparent;
    color: ${({ theme }) => theme.palette.violet};
    &:disabled {
      color: ${({ theme }) => theme.palette.black[500]};
      cursor: not-allowed;
    }
  }

  &.ghost {
    background-color: ${({ theme }) => theme.palette.white};
    color: ${({ theme }) => theme.palette.violet};
    box-shadow: 0 0 0 1.5px ${({ theme }) => theme.palette.violet};

    &:disabled {
      box-shadow: 0 0 0 1.5px ${({ theme }) => theme.palette.black[200]};
      color: ${({ theme }) => theme.palette.black[500]};
      cursor: not-allowed;
    }
  }

  &.fullwidth {
    width: 100%;
  }
`;

export const webButtonStyles = css`
  outline: none;
  height: 40px;
  cursor: pointer;
  border: 0;
  padding: 13px 16px;
  font: inherit;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: -0.5px;
  border-radius: 8px;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  &.small {
    padding: 9px 16px;
    height: 32px;
  }
  &.primary {
    color: ${({ theme }) => theme.palette.white};
    background-color: ${({ theme }) => theme.palette.violet};
  }
  &.ghost {
    &:hover {
      box-shadow: none;
    }
  }
  &.secondary {
    color: ${({ theme }) => theme.palette.darkViolet};
    background: ${({ theme }) => theme.palette.lightViolet};
  }
  &.tertiary {
    background: ${({ theme }) => theme.palette.black[50]};
    color: ${({ theme }) => theme.palette.darkViolet};
  }
  &.fullWidth {
    width: 100%;
  }
  &:hover:not(:disabled) {
    box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  }
  &:disabled {
    cursor: not-allowed;
    background-color: ${({ theme }) => theme.palette.black[50]};
    color: ${({ theme }) => theme.palette.black[300]};
  }
`;
