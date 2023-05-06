export const lengthMethod = (elements) => {
  let length = 0;

  for (let element = 0; element < elements.length; element++) {
    length += 1;
  }

  return length;
};

export const pushMethod = (array, pushedElement) => {
  array = [...array, pushedElement];

  return array.length;
};
