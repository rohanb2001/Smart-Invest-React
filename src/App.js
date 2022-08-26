import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Common/Navbar";
import HomePage from "./Pages/HomePage";
import ProfilePage from "./Pages/ProfilePage";
import SignUp from "./Pages/SignUp";
import useAuth from "./hooks/useAuth";
// import useLoginValidation from "./hooks/useLoginValidation";
import { LoginContext } from "./hooks/useLoginContext";
import Policies from "./Components/Policies";
import DashBoard from "./Components/DashBoard";
import HelpMessage from "./Components/HelpMessage";
import Settings from "./Components/Settings";

function App() {
  const { isLoggedin } = useAuth();
  const { userLoggedin } = useContext(LoginContext);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={userLoggedin ? <Navigate to="/profile" /> : <HomePage />}
        />
        <Route
          path="/signup"
          element={
            userLoggedin ? (
              <Navigate to="/profile" />
            ) : isLoggedin ? (
              <Navigate to="/" />
            ) : (
              <SignUp />
            )
          }
        />
        <Route
          path="/profile/*"
          element={isLoggedin ? <ProfilePage /> : <Navigate to="/" />}
        >
          <Route path="policies" element={<Policies />} />
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="help" element={<HelpMessage />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
