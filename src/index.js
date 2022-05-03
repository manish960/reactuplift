import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import App3 from './App3';
// import App2 from './App2';
// import App1 from './App1';
// import CarList from './CarList';
import App from './App';
// import Todo from './Todo';
// import Clocks from './Clocks';
// import Counters from './Counters';
// import Gkeep from './Gkeep';
// import Covid19 from './Covid19';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
   <App/>

  </BrowserRouter>


  </React.StrictMode>
);


