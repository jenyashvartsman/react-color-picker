export const randomColor = (): string => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor}`;
};

export const randomColors = (count: number): string[] => {
  return Array.from({ length: count }, () => randomColor());
};
