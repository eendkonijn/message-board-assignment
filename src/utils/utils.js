export const formatDate = (date) => {
  const dateToFormat = new Date(date);
  let formattedDate;

  if (Object.prototype.toString.call(dateToFormat) === "[object Date]") {
    if (isNaN(dateToFormat.getTime())) {
      let formattedDate = "unknown";
      return formattedDate;
    } else {
      formattedDate =
        dateToFormat.getDate() +
        "-" +
        (dateToFormat.getMonth() + 1) +
        "-" +
        dateToFormat.getFullYear();
    }
  }
  return formattedDate;
};
