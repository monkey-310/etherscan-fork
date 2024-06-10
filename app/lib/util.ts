export const getTwoAfterPointNumber: (inputNum: number) => string = (inputNum: number) => {
  let temp = Math.floor(inputNum * 100) / 100;
  return temp.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}