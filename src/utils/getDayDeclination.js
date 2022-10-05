export function getDayDeclination(formatter) {
  if (formatter === 0 || formatter >= 5) {
    return ' дней';
  }
  if (formatter > 1) {
    return ' дня';
  }
  return ' день';
}
