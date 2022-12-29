import { TourDescription } from "component/TourDescription";
import { Fragment } from "react";
// import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useGetTourQuery } from "store/apiSlice";
// import { selectTour } from "store/tours/tourSlice";
import LoadingSpinner from "utils/Spinner";

export const TourDetail = () => {
  const { id } = useParams();
  // const slug = useSelector((state) => selectTour(state, id));
  const { data: tour, isLoading, isSuccess } = useGetTourQuery(id);
  console.log(tour);
  return (
    <Fragment>
      {isLoading && <LoadingSpinner />}
      {isSuccess && <TourDescription tour={tour?.data?.data} />}
    </Fragment>
  );
};
