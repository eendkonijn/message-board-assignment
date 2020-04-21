export const formatDate = (date) => {
  const dateToFormat = new Date(date);
  if (isNaN(dateToFormat)) return "unknown";
  return [
    dateToFormat.getDate(),
    dateToFormat.getMonth() + 1,
    dateToFormat.getFullYear(),
  ].join("-");
};
