export const getFormattedRUCurrency = (price) => price.toLocaleString('ru-RU', {
  style: 'currency',
  currency: 'RUB',
  minimumFractionDigits: 0,
});
