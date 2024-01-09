import React, { ReactNode } from 'react';
import { AdSet as AdSetType } from '../../../../types';
interface AdSetProps {
    adSet: AdSetType;
    currencyCode: string;
    timezoneId: string;
    children: ReactNode;
}
declare const AdSet: React.FC<AdSetProps>;
export default AdSet;
