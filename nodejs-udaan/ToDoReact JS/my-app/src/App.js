import React from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import ChatView from "./views/ChatView";
import NavView from "./views/NavView";
import TaskView from './views/TaskView';

function App() {
  return (
    <div className="App container">
      <NavView />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="sfb" element={<TaskView />} />
            <Route path="chat" element={<ChatView />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;