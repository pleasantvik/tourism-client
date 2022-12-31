import { Footer } from "component/Footer";
import { Header } from "component/Header";
import { MainLayout } from "component/hoc/MainLayout";
import { Home } from "pages/Home";
import { Login } from "pages/auth/Login";
import { TourDetail } from "pages/TourDetail";
import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { useGetAuthQuery } from "store/apiSlice";
import { setCredential } from "store/authSlice";
import { useDispatch } from "react-redux";
import LoadingSpinner from "utils/Spinner";
import { Signup } from "pages/auth/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const token = localStorage.getItem("token");
  // const [login, setLogin] = useState(false);
  // const [signup, setSignup] = useState(false);
  // const [show, setShow] = useState(false);
  const { data: isAuth, isSuccess, isLoading } = useGetAuthQuery();
  // console.log(isAuth?.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setCredential({
        user: { user: isAuth?.data },
        accesstoken: isAuth?.token,
      })
    );
  }, [dispatch, isAuth]);

  return (
    <div className="App">
      <Header onToken={token} />

      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tour/:id" element={<TourDetail />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </MainLayout>

      <ToastContainer />
      <Footer />
    </div>
  );
};

export default App;
