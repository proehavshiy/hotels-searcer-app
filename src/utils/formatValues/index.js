const getFormattedRUCurrency = (price) => price.toLocaleString('ru-RU', {
  style: 'currency',
  currency: 'RUB',
  minimumFractionDigits: 0,
});

const getFormattedRUDate = (date) => {
  const fDate = typeof date === 'number' ? new Date(date) : date;

  return fDate.toLocaleDateString('ru', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).slice(0, -2);
};

export default function format(type, value) {
  switch (type) {
    case 'currency':
      return getFormattedRUCurrency(value);
    case 'date':
      return getFormattedRUDate(value);
    default:
      return null;
  }
}
