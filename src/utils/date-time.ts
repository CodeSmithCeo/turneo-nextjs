import dayjs from 'dayjs'

// this needs to be extended with various types named under each language for both date datetime, time etc..
const datetimeStringToDate = (datetime: string) => {
  return dayjs(datetime).format('MM/DD/YYYY'); 
};

// again this is EN only there are options for this in react-intl and on translation platforms
const formatDuration = (duration: Duration): string => {
  const { days, hours, minutes } = duration;

  const parts = [];
  if (days > 0) parts.push(`${days} day${days > 1 ? "s" : ""}`);
  if (hours > 0) parts.push(`${hours} hour${hours > 1 ? "s" : ""}`);
  if (minutes > 0) parts.push(`${minutes} minute${minutes > 1 ? "s" : ""}`);

  return parts.length > 0 ? parts.join(", ") : "N/A";
};

export {datetimeStringToDate, formatDuration}
