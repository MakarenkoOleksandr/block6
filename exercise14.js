function splice(obj, start, remCount) {
  if (remCount === undefined) remCount = 1;

  const keys = Object.keys(obj);
  const removedKeys = keys.slice(start, start + remCount);
  const returnObj = removedKeys.reduce((acc, key) => {
    acc[key] = obj[key];
    return acc;
  }, {});

  return returnObj;
}

module.exports = {
  splice,
};
