import "./index.css";
import { ToastContainer } from "react-toastify";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import Navbars from "./components/Navbar/Navbars.jsx";
// import UpdateModal from "./components/UpdateModal.jsx";
const App = () => {
  return (
    <div className="main">
      <ToastContainer position="top-right" autoClose={3000} />
      <Navbars />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
      {/* <UpdateModal /> */}
    </div>
  );
};
export default App;
