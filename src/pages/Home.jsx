import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useGetToursQuery } from "store/apiSlice";
import { addTours } from "store/tours/tourSlice";
import LoadingSpinner from "utils/Spinner";
import { TourCard } from "./TourCard";

export const Home = () => {
  const { data: tours, isLoading } = useGetToursQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    if (tours) {
      dispatch(addTours(tours));
    }
  }, [dispatch, tours]);
  const renderTour = tours?.data?.data?.map((tour) => (
    <TourCard tour={tour} key={tour._id} />
  ));
  return (
    <div className="card-container">
      {isLoading && <LoadingSpinner />}
      {renderTour}
    </div>
  );
};
