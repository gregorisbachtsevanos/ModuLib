export const isSingleValueOption = (option: any) => {
  return option ? 'value' in option : false;
};
