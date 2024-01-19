function paginatedResults(model, page, limit) {
  if (!page || !limit) throw new Error("Pagination query error");

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const results = {
    pagination: {
      total_records: model.length,
      current_page: page,
      total_pages: Math.ceil(model.length / limit)
    }
  };

  if (endIndex < model.length) results.pagination.next_page = page + 1;

  if (startIndex > 0) results.pagination.previous_page = page - 1;

  results.results = model.slice(startIndex, endIndex);

  if (results.results.length == 0) throw new Error("No results");

  return results;
}

module.exports = { paginatedResults };
