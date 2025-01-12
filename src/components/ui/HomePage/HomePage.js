import React, { useState } from "react";

import Header from "../common/Header/Header";
import Loader from "../common/Loader";
import NoResults from "../common/NoResults/NoResults";
import PageControls from "../common/PageControls/PageControls";
import Error from "../common/Error/Error";
import useFetchData from "../hooks/useFetchData";
import usePagination from "../hooks/usePagination";
import ProjectList from "../ProjectList";

import "./homePage.css";

const HomePage = () => {
  const [postsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, error } = useFetchData();
  const { currentData, paginate } = usePagination(
    data,
    currentPage,
    postsPerPage,
    setCurrentPage
  );

  const showError = !isLoading && error;
  const showNoResults =
    !isLoading && !error && (!Array.isArray(data) || data.length === 0);
  const showData =
    !isLoading && !error && Array.isArray(data) && data.length > 0;

  return (
    <div className="home-page">
      <Header />

      {showError && <Error />}

      {isLoading && <Loader />}

      {showNoResults && <NoResults />}

      {showData && (
        <>
          <ProjectList currentData={currentData} />

          <PageControls
            length={data?.length}
            postsPerPage={postsPerPage}
            currentPage={currentPage}
            paginate={paginate}
          />
        </>
      )}
    </div>
  );
};

export default HomePage;
