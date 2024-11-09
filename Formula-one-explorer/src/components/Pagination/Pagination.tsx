export const Pagination = (props: any) => {
  const { currentPage, next, totalPageCount, setCurrentPage, prev, refetch } =
    props;

  // Generate page buttons
  const pageButtons = Array.from(
    { length: totalPageCount ?? 1 },
    (_, index) => index + 1
  );
  console.log(pageButtons);
  const handlePageClick = (e: any) => {
    console.log(e);
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
          disabled={currentPage == 0 ? true : false}
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
          disabled={currentPage == 5 ? true : false}
        >
          Next Page
        </button>
      </div>
    </div>
  );
};
