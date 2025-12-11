export const printObject = (arg: any) => {
  console.log(arg);
}

export function genericFn<T>(arg: T): T {
  return arg;
}

export const genericFnArrow = <T>(arg: T): T => arg;
