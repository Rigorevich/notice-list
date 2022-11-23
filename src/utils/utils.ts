export const findTag = (str: string) => {
  return str.match(/#[wа-яА-Я\d]+/g);
};
// /#[^.,?! \(\)]+/g
export const splitText = (str: string) => {
  return str.split(/#[wа-яА-Я\d]+/);
};
