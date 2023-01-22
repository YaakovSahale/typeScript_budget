import { computePercentage, formatPercentage } from "../logic/gen-utils";

export const formatFinitePercentage = (
  expense: number,
  income: number
): string => {
  const percentage = computePercentage(expense, income);
  const percentageFormatted = Number.isFinite(percentage)
    ? `${formatPercentage(percentage)}%`
    : "--";
  return percentageFormatted;
};
