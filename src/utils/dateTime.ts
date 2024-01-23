import dayjs from 'dayjs';

export const convertDateTime = (dateTime: Date, pattern = 'HH:mm') =>
  dayjs(dateTime).format(pattern);
