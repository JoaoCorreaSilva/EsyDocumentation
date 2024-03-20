import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Home from "./pages/Home";
import Docs from "./pages/Docs";

function App() {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/docs" element={<Docs />} />
                    {/* <Route path="/login" element={<Login />} />
                    <Route path="/inicial" element={<Inicial />} /> */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
