function addToList(arr) {
  const movieList = [];

  for (let i = 0; i < arr.length; i++) {
    const movie = {
      title: arr[i],
      id: i,
    };
    movieList.push(movie);
  }
  return movieList;
}

module.exports = {
  addToList,
};
