import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Record from "./pages/Record";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { Provider, useDispatch } from "react-redux";
import { useEffect } from "react";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import store, { persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/record" element={<Record />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/SignUp" element={<SignUp />} />
              <Route path="/Diary/:id" element={<Diary />} />
              <Route path="/Edit/:id" element={<Edit />} />
            </Routes>
          </BrowserRouter>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
