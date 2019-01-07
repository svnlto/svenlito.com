export const getRandomInt = (min: number, max: number) => {
  const num = min + 1 - max;
  return Math.floor(Math.random() * num + min);
};

export const getRandomPinkArray = (length: number) => {
  const makeColor = () => {
    const r = getRandomInt(234, 250);
    const g = getRandomInt(170, 192);
    const b = getRandomInt(203, 182);
    return `rgba(${r}, ${g}, ${b}, .9)`;
  };

  return Array.from({ length }, () => {
    return makeColor();
  });
};
