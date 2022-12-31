import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const MainLayout = ({ children }) => {
  return (
    <main className="main">
      {children}
      {/* <ToastContainer /> */}
    </main>
  );
};
