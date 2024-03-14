import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Summary from './Components/Summary';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Summary/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
