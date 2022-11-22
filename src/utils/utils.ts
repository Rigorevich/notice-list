export const findTag = (str: string) => {
  return str.split(/[ !.?_\n]/).filter((word) => word.includes("#"));
};
