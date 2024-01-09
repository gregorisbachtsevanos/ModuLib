export const isListEmpty = (list: undefined | null | any[]) =>
  !Array.isArray(list) || list.length === 0;

export const isFirefox = (): boolean => navigator.userAgent.includes('Firefox');
