import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import Layout from "./components/Layout/Layout";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <BrowserRouter>
        <Layout>
            <App />
        </Layout>
    </BrowserRouter>
);

