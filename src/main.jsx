import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App";
import { NoteProvider } from './context/NoteProvider';
import "./index.css";

const el = document.getElementById('root');
const root = ReactDOM.createRoot(el);

root.render(<NoteProvider>
    <App/>
</NoteProvider>)