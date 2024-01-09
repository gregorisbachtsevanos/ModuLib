export const findOffset: ({ limit, pageNumber }: { limit: number; pageNumber: number }) => number =
  ({ limit, pageNumber }) => (pageNumber - 1) * limit;
