import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from "../../pages/Home/Home";
import Patches from "../../pages/Patches/Patches";
import Agents from "../../pages/Agents/Agents";
import Maps from "../../pages/Maps/Maps";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={'/'}>
                <Route index element={<Home/>}/>
                <Route path={'patches'} element={<Patches/>}/>
                <Route path={'agents'} element={<Agents/>}/>
                <Route path={'maps'} element={<Maps/>}/>
            </Route>
        </Routes>
    );
};

export default AppRouter;