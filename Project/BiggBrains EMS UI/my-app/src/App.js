import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./views/Login";
import Regestration from "./views/Regestration";
import Dashbord from "./views/Dashbord";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Regestration />}>
            <Route path="Regestration_page" />
          </Route>
          <Route path="Login_page" element={<Login />} />
          <Route path="dashbord" element={<Dashbord />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
