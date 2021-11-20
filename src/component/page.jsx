import React, { useState } from "react";
import Pagination from "react-js-pagination";

const Page = ({ onChange }) => {
  const [page, setPage] = useState(1);

  const handlePage = (page) => {
    setPage(page);
    onChange(page);
  };

  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={20}
      totalItemsCount={600}
      pageRangeDisplayed={5}
      prevPageText={"<"}
      nextPageText={">"}
      onChange={handlePage}
    />
  );
};

export default Page;
