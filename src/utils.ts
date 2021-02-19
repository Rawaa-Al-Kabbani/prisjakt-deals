export const formatPrice = (
  number: number,
  thousandSeparator = " "
): string => {
  return number
    .toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, thousandSeparator);
};
