export const getFormatedDate = (inputDate) => {
  let dateObj = new Date(inputDate);

  let day = dateObj.getDate();
  let month = dateObj.getMonth() + 1;
  let year = dateObj.getFullYear();

  if (day < 10) day = "0" + day;
  if (month < 10) month = "0" + month;

  let formattedDate = day + "-" + month + "-" + year;
  return formattedDate;
};
