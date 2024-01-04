import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import Profile from "./Components/Profile.jsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { loadUser } from './redux/actions/user';
import axios from "axios";
import { server } from "./redux/store.js";

function App() {

  const { isAuthenticated, user, error, loading } = useSelector(
    state => state.user
  );

  const dispatch = useDispatch();

  const fetchData = async()=>{
    // const  data = await axios.get(`${server}/me`);
    // console.log(data);
  }

  useEffect(() => {
    fetchData()
    dispatch(loadUser());
  }, [dispatch]);


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={user ? <Homepage /> : <Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
