function runOnRange(obj) {
  const result = [];
  let currentNum = obj.start;

  if (
    (obj.start > obj.end && obj.step >= 0) ||
    (obj.start < obj.end && obj.step <= 0)
  )
    return result;

  do {
    result.push(currentNum);
    currentNum += obj.step;
  } while (
    (obj.start <= obj.end && currentNum <= obj.end) ||
    (obj.start > obj.end && currentNum >= obj.end)
  );

  return result;
}

module.exports = {
  runOnRange,
};
