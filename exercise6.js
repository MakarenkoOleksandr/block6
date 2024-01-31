function getIndex(arr, key, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][key] === value) return i;
  }

  return -1;
}

module.exports = {
  getIndex,
};
