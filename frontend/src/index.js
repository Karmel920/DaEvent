import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import {MantineProvider, createEmotionCache} from "@mantine/core";

const myCache = createEmotionCache({ key: 'mantine' });


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <MantineProvider emotionCache={myCache}>
              <App />
          </MantineProvider>
      </BrowserRouter>
  </React.StrictMode>
);
