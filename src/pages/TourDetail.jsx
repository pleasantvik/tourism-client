import { TourDescription } from "component/TourDescription";
import { Fragment } from "react";
// import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useGetTourQuery } from "store/apiSlice";
// import { selectTour } from "store/tours/tourSlice";
import LoadingSpinner from "utils/Spinner";
import { showToast } from "utils/tools";
import { PageNotFound } from "./PageNotFound";

export const TourDetail = () => {
  const { id } = useParams();
  // const slug = useSelector((state) => selectTour(state, id));
  const {
    data: tour,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTourQuery(id);
  if (isError) {
    const msg =
      error?.data?.error?.message ||
      error?.data?.message ||
      "Something went wrong! Try again";
    showToast("ERROR", msg);
    console.log(error);
    return <PageNotFound msg={msg} />;
  }
  return (
    <Fragment>
      {isLoading && <LoadingSpinner />}
      {isSuccess && <TourDescription tour={tour?.data?.data} />}
    </Fragment>
  );
};
