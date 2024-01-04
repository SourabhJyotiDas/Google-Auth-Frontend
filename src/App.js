import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Profile from "./Components/Profile.jsx";

function App() {

  const { isAuthenticated } = useSelector(
    (state) => state.user
  );

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={isAuthenticated ? <Homepage /> : <Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
