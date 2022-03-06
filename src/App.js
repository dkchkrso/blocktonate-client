import "./App.css";
import { Routes, Route } from "react-router-dom";
 
import Navbar from "./components/Navbar";
import FooterBar from "./components/FooterBar";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";
import ReceiverListPage from "./pages/ReceiverListPage";
import ReceiverDetailsPage from "./pages/ReceiverDetailsPage";


function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route
          path="/receivers"
          element={
            <IsPrivate>
              <ReceiverListPage />
            </IsPrivate>
          }
        />
        <Route path="/receivers/:id" element={<ReceiverDetailsPage />} />
        {/* <Route path="/receivers/edit/:id" element={<EditReceiverPage />} /> */}
        <Route
          path="/signup"
          element={
            <IsAnon>
              <SignupPage />
            </IsAnon>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              <LoginPage />
            </IsAnon>
          }
        />
      </Routes>
      <FooterBar />
    </div>
  );
}

export default App;
