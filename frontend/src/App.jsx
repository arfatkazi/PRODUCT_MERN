import "./index.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import CreatePage from "./pages/CreatePage.jsx";
import Navbars from "./components/Navbar/Navbars.jsx";
const App = () => {
  return (
    <div className="main">
      <Navbars />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
      </Routes>
    </div>
  );
};
export default App;
