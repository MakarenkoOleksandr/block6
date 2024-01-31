function model(action, obj, schema) {
  let DB = [];
  if (action === "add") {
    const returnObj = {};

    for (const key in schema) {
      const element = schema[key];

      if (typeof obj[key] === element.type) returnObj[key] = obj[key];
      else if (typeof obj[key] !== element.type)
        returnObj[key] = element.default;
    }

    DB.push(returnObj);
    return DB;
  } else {
    return "Wrong action";
  }
}

module.exports = {
  model,
};
