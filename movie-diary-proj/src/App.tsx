import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Record from "./pages/Record";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { checkLoginState } from "./redux/auth/authSlice";
import Diary from "./pages/Diary";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkLoginState());
  }, [dispatch]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/record" element={<Record />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Diary/:id" element={<Diary />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
