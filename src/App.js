import "./App.css";
import { Routes, Route } from "react-router-dom";
 
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import FooterBar from "./components/FooterBar";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import IsPrivate from "./components/IsPrivate";
import IsAnon from "./components/IsAnon";
import ReceiverListPage from "./pages/ReceiverListPage";
import ReceiverDetailsPage from "./pages/ReceiverDetailsPage";
import EditReceiverPage from "./pages/EditReceiverPage";
import StartPaymentPage from "./pages/StartPaymentPage";
import ProfilePage from "./pages/ProfilePage";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Navbar2 />

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

        <Route
          path="/receivers/edit/:id"
          element={
            <IsPrivate>
              <EditReceiverPage />
            </IsPrivate>
          }
        />

        <Route path="/donate/:id" element={<StartPaymentPage />} />

        <Route
          path="/profile"
          element={
            <IsPrivate>
              <ProfilePage />
            </IsPrivate>
          }
        />

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
