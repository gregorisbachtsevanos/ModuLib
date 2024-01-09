import { ReactNode } from 'react';

export type Campaign = {
  id: string;
  isActive: boolean;
  isReadOnly: boolean;
  name: string;
  brandName: string;
  brandId: string;
  brandLogoUri: string;
  brandCurrencyCode: string;
  spendingLimit: number;
  category: string;
  deliveryStatus: string;
  moderationStatus: string;
  charityId: string;
  charityName: string;
  charityLogoUri: string;
  isArchive: boolean;
  sponsorshipsSets: AdSet[];
  brandTimezoneId: string;
};

export type AdSet = {
  id: string;
  isActive: boolean;
  isReadOnly: boolean;
  name: string;
  includeAnyTags?: string[];
  includeAndTags?: string[];
  excludeTags?: string[];
  individualIds?: string[];
  includeLocations?: { display: string; value: string }[];
  excludeLocations?: { display: string; value: string }[];
  totalBudget: number;
  dailyBudget: number;
  isUniteIncentive: boolean;
  ageRanges: { ageFrom: number; ageTo?: number }[];
  genders: string[];
  interests?: string[];
  eightPixelAudiences: string[];
  deviceType: string;
  cashReward: number;
  donationReward: number;
  pricePerMessage: number;
  weAre8Fee: number;
  scheduleFrom: string;
  scheduleTo: string;
  timezoneInfo: any;
  charityId: string;
  charityName: string;
  charityLogoUri: string;
  deliveryStatus?: string;
  moderationStatus: string;
  isEightPixelEnabled: boolean;
  pixelConversionEvent: string;
  sponsorships?: Ad[];
  samiPricingId: string;
  videoDurationAllowedRange: {
    videoMinTimeInSeconds: number;
    videoMaxTimeInSeconds: number;
  }[];
  passions?: string[];
};

export type Ad = {
  id: string;
  isActive: boolean;
  isReadOnly: boolean;
  name: string;
  coverTileUri?: string;
  videoHlsUri: string;
  videoDashUri?: string;
  type: string;
  videoKey: string;
  detail: any;
  cta: {
    imageUrl: string;
    imageWidth: string;
    imageHeight: string;
    imageAspectRatio: string;
    webLink: string;
    shortInstruction: string;
    discountCode: string;
    clickTrackingUrl: string;
    adScript?: string;
    caption: string;
  };
  vodStatus: string;
  deliveryStatus?: string;
  moderationStatus: string;
  videoLength: string;
  videoHeight: number;
  videoWidth: number;
  thirdPartyTrackingScripts?: { provider: string; script: string }[];
};

export type Filter = {
  node: ReactNode;
  title: string;
  pillText: string;
  hidePill?: boolean;
  onClear?: any;
};
