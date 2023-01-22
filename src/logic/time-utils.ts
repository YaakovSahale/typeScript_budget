const month = [
  `January`,
  `February`,
  `March`,
  `April`,
  `May`,
  `June`,
  `July`,
  `August`,
  `September`,
  `October`,
  `November`,
  `December`,
];

export const getYear = (date: Date): number => {
  return date.getFullYear();
};

export const getMonth = (date: Date): string => {
  return month[date.getMonth()]
};
