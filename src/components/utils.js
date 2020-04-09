export const formatDate = (date) => {
  const dateToFormat = new Date(date);
  let formattedDate =
    dateToFormat.getDate() +
    "-" +
    (dateToFormat.getMonth() + 1) +
    "-" +
    dateToFormat.getFullYear();

  if (formattedDate === "NaN-NaN-NaN") {
    formattedDate = "unknown";
  }

  return formattedDate;
};
