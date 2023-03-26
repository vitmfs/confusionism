import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestComponent from './components/test-component/test-component';
import EncryptedTextArea from './components/encrypted-text-area/encrypted-text-area';
import EncryptedTextAreas from './components/encrypted-text-areas/encrypted-text-areas';

function App() {
  return (
    <>
      <EncryptedTextAreas />
      {/* <TestComponent /> */}
    
    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
