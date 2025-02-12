import React, { useState } from 'react';
import './App.css';
import MyRouter from './routes/MyRouter'
import { router } from './routes/router'




function App() {

  return (
    <div className="App">
      
        <MyRouter router={router} />
      
    </div>
  );
}

export default App;
