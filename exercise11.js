function model(action, obj, schema) {
  let DB = [];
  if (action === "add") {
    const isMatchKeys = Object.keys(obj).filter(
      (key) => schema[key] && typeof obj[key] === schema[key]
    );

    const returnObj = isMatchKeys.reduce((acc, key) => {
      acc[key] = obj[key];
      return acc;
    }, {});

    DB.push(returnObj);

    return DB;
  } else {
    return "Wrong action";
  }
}

module.exports = {
  model,
};
