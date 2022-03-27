import JobsList from "../components/Jobs/JobsList";
import { getStoriesIdsThunk, getStoriesThunk } from "../redux/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { JOBS_PAGE_PER_VIEW, TYPE_JOBS } from "../utils/constants";
const JobsContainer = () => {
  const { data, error, pages, loading } = useSelector((state) => state.jobs);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getStoriesIdsThunk(TYPE_JOBS, JOBS_PAGE_PER_VIEW));
  }, [dispatch]);

  const getData = useCallback(
    (currentPage) => {
      dispatch(
        getStoriesThunk(
          TYPE_JOBS,
          (currentPage - 1) * JOBS_PAGE_PER_VIEW,
          (currentPage - 1) * JOBS_PAGE_PER_VIEW + JOBS_PAGE_PER_VIEW
        )
      );
    },
    [dispatch]
  );
  return (
    <JobsList
      error={error}
      loading={loading}
      pages={pages}
      list={data}
      getData={getData}
    />
  );
};

export default JobsContainer;
