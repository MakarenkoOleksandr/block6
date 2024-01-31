function modifyObject(obj, key, value) {
  obj[key] = value;
  return obj;
}

module.exports = {
  modifyObject,
};
