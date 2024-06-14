export const getTwoAfterPointNumber: (inputNum: number,) => string = (inputNum: number) => {
  let temp = Math.floor(inputNum * 100) / 100;
  return temp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export const formatDate = (timestamp: number) => {
  const date = new Date(timestamp);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  const formattedDate = `${day}-${month}-${year}`;

  return formattedDate;
}