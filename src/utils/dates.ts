import { format } from 'date-fns';
import { utcToZonedTime } from 'date-fns-tz';

export const displayDate = (
  date: Date,
  timezoneUtcString: string,
  countryCode: string,
  includeTime: boolean
) => {
  const dateOnTimezone = formatToTimezone(date, timezoneUtcString);
  const dateFormatOnCountry = formatDateToCountry(dateOnTimezone, countryCode, includeTime);
  return dateFormatOnCountry;
};

export const formatToTimezone = (date: Date, timezoneUtcString: string) =>
  utcToZonedTime(date, timezoneUtcString);

export const formatDateToCountry = (date: Date, countryCode: string, includeTime?: boolean) => {
  let dateFormat = 'dd/MM/yyy';

  if (includeTime)
    dateFormat =
      countryCode === 'US' || countryCode === 'CA' ? 'MM/dd/yyy hh:mm aa' : 'dd/MM/yyy hh:mm aa';
  else dateFormat = countryCode === 'US' || countryCode === 'CA' ? 'MM/dd/yyy' : 'dd/MM/yyy';

  return format(date, dateFormat);
};
