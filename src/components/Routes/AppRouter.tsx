import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Home from "../../pages/Home/Home";
import Patches from "../../pages/Patches/Patches";
import Agents from "../../pages/Agents/Agents";
import Maps from "../../pages/Maps/Maps";
import Agent from "../../pages/Agent/Agent";

const AppRouter = () => {
    return (
        <Routes>
            <Route path={'/'}>
                <Route index element={<Home/>}/>
                <Route path={'patches'} element={<Patches/>}/>
                <Route path={'agents'}>
                    <Route index element={<Agents/>}/>
                    <Route path={'agents/:agentId'} element={<Agent/>}/>
                </Route>
                <Route path={'maps'} element={<Maps/>}/>
            </Route>
        </Routes>
    );
};

export default AppRouter;