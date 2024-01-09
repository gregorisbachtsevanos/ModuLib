export const findPage: ({ limit, offset }: { limit: number; offset: number }) => number = ({
  limit,
  offset,
}) => offset / limit + 1;
