function searchName(search, dataArray) {
  const searchTerm = search.toLowerCase();

  const matches = dataArray.filter((item) =>
    item.name.toLowerCase().includes(searchTerm)
  );

  return matches;
}

module.exports = searchName;
