function biggestNumber(obj) {
  let biggestNum = 0;
  let biggestNumKey = 0;

  for (key in obj) {
    if (biggestNum < obj[key]) {
      biggestNum = obj[key];
      biggestNumKey = key;
    }
  }
  return { num: biggestNum, key: biggestNumKey };
}

module.exports = {
  biggestNumber,
};
