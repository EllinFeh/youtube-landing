import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from 'react';
import Video from "../pages/Video";
import Home from "../pages/Home";

 const YourRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/watch" element={<Video/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default YourRoutes;
