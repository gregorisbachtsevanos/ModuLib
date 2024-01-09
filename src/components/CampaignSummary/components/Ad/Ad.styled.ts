import styled from 'styled-components';
import { StyledAdSetContainer } from '../AdSet/AdSet.styled';

export const StyledAdContainer = styled(StyledAdSetContainer)`
  padding-left: 44px;
  padding-bottom: 0;

  .questions,
  .cta-link,
  .cta-action-button,
  .cta-discount-code,
  .cta-thirdparty-tracking,
  .ad-preview {
    margin-left: 20px;
  }

  .video-container-outer {
    aspect-ratio: 9/16;
    background-color: ${({ theme }) => theme.palette.black[50]};
    max-width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;

    .video-container-inner {
      max-width: 200px;
      max-height: 355px;
      video {
        object-fit: cover;
      }
    }
  }

  .image-container {
    aspect-ratio: 1/1;
    max-width: 150px;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  .ad-preview {
    .footer {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      .qr-container {
        max-width: 80px;
      }
    }
  }
`;
