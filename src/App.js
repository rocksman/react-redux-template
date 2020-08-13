import React from 'react';
import { Provider } from "react-redux";
import store from "./stores";
import { BrowserRouter, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Route exact strict path="/" component={()=><h1>Home</h1>} />
        <Route exact strict path="/:id" component={()=><h1>Room</h1>} />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
