export const getFormattedRUDate = (date) => {
  const fDate = new Date(date);
  return fDate.toLocaleDateString('ru', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).slice(0, -2);
};
