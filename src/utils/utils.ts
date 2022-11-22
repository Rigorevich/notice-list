export const findTag = (str: string) => {
  let indexOfSharp = str.indexOf("#");
  if (indexOfSharp === -1) return;
  let tag = "";
  while (str[indexOfSharp] !== " " && indexOfSharp < str.length) {
    tag += str[indexOfSharp++];
  }
  return tag;
};
