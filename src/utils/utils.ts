export const findTag = (str: string) => {
  return str.match(/#[wа-яА-Яa-zA-Z\d]+/g);
};
// /#[^.,?! \(\)]+/g
export const splitText = (str: string) => {
  return str.split(/#[wа-яА-Яa-zA-Z\d]+/);
};
