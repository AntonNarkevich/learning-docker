export const square = (x: any) => {
  if  (!x) {
    throw new Error();
  }

  return x ** 2;
};
