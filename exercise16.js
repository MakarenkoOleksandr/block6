function sort(obj, property, method) {
  let keys = Object.keys(obj);

  const comparators = {
    keys: {
      ascending: (a, b) => a.localeCompare(b),
      descending: (a, b) => b.localeCompare(a),
    },
    values: {
      ascending: (a, b) => obj[a] - obj[b],
      descending: (a, b) => obj[b] - obj[a],
    },
  };

  const sortedKeys = keys.sort(comparators[property][method]);

  return sortedKeys.reduce((acc, key) => {
    acc[key] = obj[key];
    return acc;
  }, {});
}

module.exports = {
  sort,
};
