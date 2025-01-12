import "./pageControls.css";

const PageControls = ({ length, postsPerPage, currentPage, paginate }) => {
  const totalPages = Math.ceil(length / postsPerPage);

  // Helper to generate page numbers with ellipsis
  const getPageNumbers = () => {
    const pages = [];

    // Check if mobile using window width
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      // Show only previous, current, and next page numbers on mobile
      if (currentPage > 1) pages.push(currentPage - 1);
      pages.push(currentPage);
      if (currentPage < totalPages) pages.push(currentPage + 1);
    } else {
      if (totalPages <= 7) {
        for (let i = 1; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        if (currentPage > 3) pages.push("...");
        for (
          let i = Math.max(2, currentPage - 1);
          i <= Math.min(currentPage + 1, totalPages - 1);
          i++
        ) {
          pages.push(i);
        }
        if (currentPage < totalPages - 2) pages.push("...");
        pages.push(totalPages);
      }
    }
    return pages;
  };

  if (length > postsPerPage) {
    return (
      <div className="pagination-container">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="page-button"
        >
          Previous
        </button>

        {getPageNumbers().map((page, index) => (
          <button
            key={index}
            onClick={() => (typeof page === "number" ? paginate(page) : null)}
            className={`page-button ${
              currentPage === page ? "active" : page === "..." ? "ellipsis" : ""
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="page-button"
        >
          Next
        </button>
      </div>
    );
  }
  return null;
};

export default PageControls;
