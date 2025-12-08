(() => {
  interface AddTwoNum {
    (a: number, b: number): number;
  }

  let addNumbersFn: AddTwoNum;

  addNumbersFn = (a: number, b: number) => {
    return a + b;
  }

  console.log(addNumbersFn(23, 56));
})()
