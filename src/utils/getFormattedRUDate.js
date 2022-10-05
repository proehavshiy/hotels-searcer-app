export const getFormattedRUDate = (date) => {
  const fDate = typeof date === 'number' ? new Date(date) : date;

  return fDate.toLocaleDateString('ru', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).slice(0, -2);
};
