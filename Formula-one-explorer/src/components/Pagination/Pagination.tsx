export const Pagination = (props: any) => {
  const { currentPage, next, totalPageCount, setCurrentPage, prev, refetch } =
    props;

  // Generate page buttons
  const pageButtons = Array.from(
    { length: totalPageCount ?? 1 },
    (_, index) => index + 1
  );

  const handlePageClick = (e: any) => {
    setCurrentPage(+e.target.ariaLabel); // Update current page
    refetch(); // Optionally, trigger a fetch request based on the selected page
  };
  return (
    <div>
      <div>
        <button
          onClick={() => {
            prev();
          }}
          disabled={currentPage == 1 ? true : false}
        >
          Prev Page
        </button>

        {pageButtons.map((page) => (
          <button
            key={page}
            aria-label={`${page}`}
            onClick={(e) => handlePageClick(e)}
            disabled={currentPage === page} // Disable the current page button
            style={{
              fontWeight: currentPage === page ? "bold" : "normal",
              margin: "0 5px",
            }}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => next()}
          disabled={currentPage == totalPageCount ? true : false}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};
