const usePagination = (data, currentPage, dataPerPage, setCurrentPage) => {
  const indexOfLastPost = currentPage * dataPerPage;
  const indexOfFirstPost = indexOfLastPost - dataPerPage;
  const currentData = data.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return { currentData, paginate };
};

export default usePagination;
