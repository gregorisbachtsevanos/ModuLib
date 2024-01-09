import React, { ReactNode, useState } from 'react';
import ReactPlayer from 'react-player';
import QRCode from 'react-qr-code';
import { Caption, Text } from '../../../../theme';
import { Ad as AdType, Campaign as CampaignType } from '../../../../types';
import { formatQuestionsForSummary, getVideoLengthInSeconds } from '../../../../utils/formatData';
import Block from '../Block';
import ExpandButton from '../ExpandButton';
import { StyledAdContainer } from './Ad.styled';

interface AdProps {
  ad: AdType;
  videoRange: string[];
  previewURL: string;
  campaign: CampaignType;
  children: ReactNode;
}

const Ad: React.FC<AdProps> = ({ ad, videoRange, previewURL, campaign, children }) => {
  const questions = formatQuestionsForSummary(ad.detail);
  const [isExpanded, setIsExpanded] = useState(true);
  return (
    <StyledAdContainer>
      <ExpandButton
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
        type="ad"
        title={ad.name}
      />
      {isExpanded && (
        <>
          <Block title="Questions" className="questions">
            <div className="list">
              {questions.map((question, index) => (
                <div className="group" key={index}>
                  <Text className="title">{`${index + 1}. ${question.type.label} - `}</Text>
                  <Text>{question.text}</Text>
                  {question.options.map((option: any, index: number) => (
                    <Caption key={index} className="option">
                      - {option.text}
                    </Caption>
                  ))}
                </div>
              ))}
            </div>
          </Block>
          <div className="blocks">
            <Block title="Video Message">
              <>
                <div className="video-container-outer">
                  <div
                    className="video-container-inner"
                    style={{ aspectRatio: ad.videoWidth / ad.videoHeight }}
                  >
                    <ReactPlayer controls={true} url={ad.videoHlsUri} width="100%" height="100%" />
                  </div>
                </div>
                <div className="list">
                  <div className="group">
                    <Text className="title">Duration: </Text>
                    <Text style={{ textTransform: 'initial' }}>
                      {getVideoLengthInSeconds(ad.videoLength)}s
                    </Text>
                  </div>
                  <div className="group">
                    <Text className="title">Selected duration range: </Text>
                    {videoRange.map((range, index) => (
                      <Text key={index} style={{ textTransform: 'initial' }}>
                        {range}
                      </Text>
                    ))}
                  </div>
                </div>
              </>
            </Block>
            <Block title="Call To Action Tile">
              <div className="image-container">
                <img src={ad.cta.imageUrl} alt="" />
              </div>
            </Block>
          </div>
          {ad.cta.webLink && (
            <Block title="Call To Action Link" className="cta-link">
              <Text>{ad.cta.webLink}</Text>
            </Block>
          )}
          {ad.cta.caption && (
            <Block title="Call To Action Button Text" className="cta-action-button">
              <Text>{ad.cta.caption}</Text>
            </Block>
          )}
          {ad.cta.discountCode && (
            <Block title="Discound code" className="cta-discount-code">
              <Text>{ad.cta.discountCode}</Text>
            </Block>
          )}
          {ad.thirdPartyTrackingScripts && ad.thirdPartyTrackingScripts.length > 0 && (
            <Block title="Third Party Tracking" className="cta-thirdparty-tracking">
              <div className="list">
                {ad.thirdPartyTrackingScripts.map((item, index) => (
                  <div className="group" key={index}>
                    <Text className="title">{item.provider}</Text>
                    <Text>{item.script}</Text>
                  </div>
                ))}
              </div>
            </Block>
          )}
          <Block title="Test you Ad!" className="ad-preview">
            <>
              <Text>
                Click the link below to preview how people will see your Ad! You can also scan the
                QR code to open the preview on your mobile device! Completions of the test Ad will
                not be recorded nor charged for.
              </Text>
              <div className="footer">
                <a
                  href={`${previewURL}/preview/${ad.id}?brandId=${campaign.brandId}&countryCode=GB`}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Text>Test on PC</Text>
                </a>
                <Text>or</Text>
                <div className="qr-container">
                  <QRCode
                    size={80}
                    value={`${previewURL}/preview/${ad.id}?brandId=${campaign.brandId}&countryCode=GB`}
                  />
                </div>
              </div>
            </>
          </Block>
          {children}
        </>
      )}
    </StyledAdContainer>
  );
};
export default Ad;
