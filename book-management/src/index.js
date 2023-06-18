import React from 'react';
import  ReactDOM  from "react-dom/client";
import App from "./App";
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Provider } from './component/context/booksContext';

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(
    <Provider>
    <App />
    </Provider>
    )