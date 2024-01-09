import React, { ReactNode, useState } from 'react';
import { Text } from '../../../../theme';
import { AdSet as AdSetType } from '../../../../types';
import {
  calculateCampaignDuration,
  calculateDailyBudget,
} from '../../../../utils/campaign-summary';
import { numberToCurrency } from '../../../../utils/currency';
import { displayDate } from '../../../../utils/dates';
import {
  formatAgesForSummary,
  formatArrayOfStringToStringWithCommas,
  formatGendersForSummary,
  formatLocationsForSummary,
} from '../../../../utils/formatData';
import Block from '../Block';
import ExpandButton from '../ExpandButton';
import { StyledAdSetContainer } from './AdSet.styled';

interface AdSetProps {
  adSet: AdSetType;
  currencyCode: string;
  timezoneId: string;
  children: ReactNode;
}

const AdSet: React.FC<AdSetProps> = ({ children, adSet, currencyCode, timezoneId }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <StyledAdSetContainer>
      <ExpandButton
        isExpanded={isExpanded}
        setIsExpanded={setIsExpanded}
        type="ad-set"
        title={adSet.name}
      />
      {isExpanded && (
        <>
          <div className="blocks">
            <Block title="Targeting">
              <div className="list">
                <div className="group">
                  <Text className="title">Ages: </Text>
                  <Text>{formatAgesForSummary(adSet.ageRanges)}</Text>
                </div>
                {adSet.includeLocations && (
                  <div className="group">
                    <Text className="title">Locations: </Text>
                    <Text>{formatLocationsForSummary(adSet.includeLocations)}</Text>
                  </div>
                )}
                {adSet.interests && Boolean(adSet.interests.length) && (
                  <div className="group">
                    <Text className="title">Interests: </Text>
                    <Text>{formatArrayOfStringToStringWithCommas(adSet.interests)}</Text>
                  </div>
                )}
                {adSet.passions && Boolean(adSet.passions.length) && (
                  <div className="group">
                    <Text className="title">Passions: </Text>
                    <Text>{formatArrayOfStringToStringWithCommas(adSet.passions)}</Text>
                  </div>
                )}
                {adSet.includeAnyTags && Boolean(adSet.includeAnyTags.length) && (
                  <div className="group">
                    <Text className="title">Include Tags: </Text>
                    <Text>{formatArrayOfStringToStringWithCommas(adSet.includeAnyTags)}</Text>
                  </div>
                )}
                {adSet.excludeTags && Boolean(adSet.excludeTags.length) && (
                  <div className="group">
                    <Text className="title">Exclude Tags: </Text>
                    <Text>{formatArrayOfStringToStringWithCommas(adSet.excludeTags)}</Text>
                  </div>
                )}
                <div className="group">
                  <Text className="title">Genders: </Text>
                  <Text>{formatGendersForSummary(adSet.genders)}</Text>
                </div>
                <div className="group">
                  <Text className="title">OS: </Text>
                  <Text>{adSet.deviceType === 'any' ? 'All' : adSet.deviceType}</Text>
                </div>
              </div>
            </Block>
            <Block title="Schedule">
              <div className="list">
                <div className="group">
                  <Text className="title">Start Date: </Text>
                  <Text>{displayDate(new Date(adSet.scheduleFrom), timezoneId, 'GB', true)}</Text>
                </div>
                <div className="group">
                  <Text className="title">End Date: </Text>
                  <Text>{displayDate(new Date(adSet.scheduleTo), timezoneId, 'GB', true)}</Text>
                </div>
              </div>
            </Block>
            <Block title="Budget">
              <div className="list">
                <div className="group">
                  <Text className="title">Total: </Text>
                  <Text>{numberToCurrency(adSet.totalBudget, currencyCode)}</Text>
                </div>
                <div className="group">
                  <Text className="title">Daily: </Text>
                  <Text>
                    {numberToCurrency(
                      adSet.dailyBudget ||
                        calculateDailyBudget(
                          calculateCampaignDuration(adSet.scheduleFrom, adSet.scheduleTo),
                          adSet.totalBudget
                        ),
                      currencyCode
                    )}
                  </Text>
                </div>
              </div>
            </Block>
          </div>
          {children}
        </>
      )}
    </StyledAdSetContainer>
  );
};
export default AdSet;
