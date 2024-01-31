function sort(obj) {
  const keys = Object.keys(obj).sort((a, b) => obj[a] - obj[b]);
  const returnObj = keys.reduce((acc, key) => {
    acc[key] = obj[key];
    return acc;
  }, {});

  return returnObj;
}

module.exports = {
  sort,
};
