import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import RatingSystem from './Rating';
import Footer from './Footer';
import Nav from './Nav';

function App() {
  const [status, setStatus] = useState('Not Learning 🚨');
  const [checked, setChecked] = useState(false);

  return (
    <div className="App">
      <Nav />

      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
        />
        <h1>Thou shall learn React!</h1>
        <p>Receiving batine from the code while learning.</p>

        <div>
          <h2>The Student is: {status}</h2> {}
          <button
            className="App-button"
            onClick={() => setStatus('Learning 🏆')}
          >
            Start Learning
          </button>
        </div>
      </header>

      <main className="App-main">
        <div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            About the Student
          </a>
        </div>

        <RatingSystem />
      </main>

      <Footer />
    </div>
  );
}

export default App;
