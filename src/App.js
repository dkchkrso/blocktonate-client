import "./App.css";
import { Routes, Route } from "react-router-dom";
 
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import ReceiverListPage from "./pages/ReceiverListPage";
import WalletCard from "./components/WalletCard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <WalletCard />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/receivers" element={<ReceiverListPage />} />
      </Routes>
    </div>
  );
}

export default App;
