const defaultBcp47Tag = 'en-GB';

export const numberToCurrency = (
  amount: number,
  currencyCode: string,
  noDecimals?: boolean,
  shortenThousands?: boolean
) => {
  let options = {};

  options =
    amount % 1 === 0 || noDecimals
      ? {
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }
      : {};

  if (shortenThousands && amount >= 10000) return numberToThousandCurrency(amount, currencyCode);

  return new Intl.NumberFormat(defaultBcp47Tag, {
    style: 'currency',
    currency: currencyCode,
    ...options,
  }).format(amount);
};

export const numberToThousandCurrency = (amount: number, currencyCode: string) => {
  return new Intl.NumberFormat(defaultBcp47Tag, {
    notation: 'compact',
    compactDisplay: 'short',
    style: 'currency',
    currency: currencyCode,
  }).format(amount);
};
