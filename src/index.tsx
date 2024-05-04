import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter from './Counter';
import Greeting from './Greeting';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Greeting name="salma"/>
    <Counter />
  </React.StrictMode>
);

