export const findTag = (str: string) => {
  return str.match(/#\w+/g);
};

export const splitText = (str: string) => {
  return str.split(/#\w+/);
};
