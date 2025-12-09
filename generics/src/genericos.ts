export const printObject = (arg: any) => {
  console.log(arg);
}

export function genericFn<T>(arg: T): T {
  return arg;
}
