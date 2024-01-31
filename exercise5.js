function swap(obj) {
  const newObj = {};

  for (let key in obj) {
    newObj[obj[key]] = key;
  }

  return newObj;
}

module.exports = {
  swap,
};
