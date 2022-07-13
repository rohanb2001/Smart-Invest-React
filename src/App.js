import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Common/Navbar";
import HomePage from "./Pages/HomePage";
import ProfilePage from "./Pages/ProfilePage";
import SignUp from "./Pages/SignUp";
import useAuth from "./hooks/useAuth";
import useLoginValidation from "./hooks/useLoginValidation";

function App() {
  const { isLoggedin } = useAuth();
  const { currentUser } = useLoginValidation();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/signup"
          element={
            currentUser ? (
              <Navigate to="/profile" />
            ) : isLoggedin ? (
              <Navigate to="/" />
            ) : (
              <SignUp />
            )
          }
        />
        <Route
          path="/profile"
          element={isLoggedin ? <ProfilePage /> : <Navigate to="/" />}
        />
      </Routes>
    </>
  );
}

export default App;
