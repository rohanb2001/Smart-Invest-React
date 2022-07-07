import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Common/Navbar";
import HomePage from "./Pages/HomePage";
import ProfilePage from "./Pages/ProfilePage";
import SignUp from "./Pages/SignUp";
import useAuth from "./hooks/useAuth";

function App() {
  const { isLoggedIn } = useAuth();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/signup"
          element={isLoggedIn ? <HomePage /> : <SignUp />}
        />
      </Routes>
    </>
  );
}

export default App;
