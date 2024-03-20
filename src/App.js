// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Banner from './component/Banner';
import egimg from './img4.jpg'

function App() {
  return (
    <>
   <div>
    <Banner  
    backgroundImage={egimg}
    />
    </div>
    </>
  );
}

export default App;
