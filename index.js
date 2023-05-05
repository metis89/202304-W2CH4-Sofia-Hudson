const createLenghtMethod = (word) => {
  let value = 0;
  for (value in word) {
    value++;
  }
  return value;
};

export default createLenghtMethod;
