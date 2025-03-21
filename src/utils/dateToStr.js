import initialState from "../redux/initialState";

const dateToStr = (date) => {
  const parsedDate = new Date(date);
  const month = (parsedDate.getMonth() + 1).toString().padStart(2, "0");
  const day = parsedDate.getDate().toString().padStart(2, "0");
  const year = parsedDate.getFullYear();

  return `${month}/${day}/${year}`;
};

export default dateToStr;
