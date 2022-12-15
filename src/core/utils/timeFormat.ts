export const timeFormat = (x: number) => {
  const hours = Math.trunc(x / 60);
  const minutes = x % 60;

  if (minutes === 0) {
    return `${hours} ч`;
  } else if (hours === 0) {
    return `${minutes} мин`;
  } else {
    return `${hours} ч ${minutes} мин`;
  }
};
