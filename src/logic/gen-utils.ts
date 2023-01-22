export const computePercentage = (
  numerator: number,
  denominator: number
): number => {
  return (numerator / denominator) * 100;
};

export const formatPercentage = (num: number): number => {
  return Math.round(num);
};

export const formatNumber = (num: number): string => {
  let sign = "+";
  if (num < 0) sign = "-";
  num = Math.abs(num);
  const numberElm = num.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return `${sign} ${numberElm}`;
};
