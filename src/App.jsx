import { Footer } from "component/Footer";
import { Header } from "component/Header";
import { MainLayout } from "component/hoc/MainLayout";
import { Home } from "pages/Home";
import { Login } from "pages/auth/Login";
import { TourDetail } from "pages/TourDetail";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Header />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tour/:id" element={<TourDetail />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </MainLayout>
      <Footer />
    </div>
  );
};

export default App;
