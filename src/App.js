import "./App.css";
import { Routes, Route } from "react-router-dom";
 
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ReceiverListPage from "./pages/ReceiverListPage";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/receivers" element={<ReceiverListPage />} />
      </Routes>
    </div>
  );
}

export default App;
