function sumAll(obj) {
  let sum = 0;
  if (obj === undefined || Object.keys(obj).length === 0) {
    return sum;
  }

  for (key in obj) {
    sum += obj[key];
  }
  return sum;
}

module.exports = {
  sumAll,
};
