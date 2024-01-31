function last(obj) {
  const keys = Object.keys(obj);
  const lastKey = keys[keys.length - 1];
  const result = { [lastKey]: obj[lastKey] };

  return result;
}

module.exports = {
  last,
};
