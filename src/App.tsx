import React from 'react';
import robots from './mockdata/robots.json';
import Robot from './components/robot';

import './App.css';

function App() {
  return (
    <ul>
      {robots.map((r) => (
        <Robot id={r.id} name={r.name} email={r.email} />
      ))}
    </ul>
  );
}

export default App;
