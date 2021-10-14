import { format, parse } from 'date-fns';

export const transformDate = (dates: Array<string>): string => {
  const parsedDates = dates.map((date) => parse(date, 'd/L/y', new Date()));
  const result = [];
  if (parsedDates.length > 1) {
    result.push(format(parsedDates.shift(), 'do') + ' to ');
  }
  result.push(
    format(parsedDates[0], 'do') + ' of ' + format(parsedDates[0], 'MMMM')
  );
  return result.join('');
};
