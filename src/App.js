import './Login.css'
import React, { useState, useEffect } from 'react';
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import LoginForm from './Login'; // import the Login component
import Navbar from "./Navbar";
import JavisAPIDoc from "./JavisAPIDoc"
// const requestInterceptor = (req) => (
//   {
//     ...req, 
//     headers: {
//       Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJtZW51cyI6WzMsNSw2LDksMTAsMTEsMTIsMTMsMTQsMTUsMTYsMTgsMTksMjAsMjIsMjMsMjQsMjUsMjYsMjcsMjksMzAsMzEsMzQsMzUsMzYsMzcsMzgsNDAsNDEsNDMsNTgsNjAsNjEsNjIsNjMsNjQsNjYsNjcsNjgsNzAsNzMsNzUsNzcsODAsODksOTMsOTUsOTYsOTcsMTAyLDEwMywxMDUsMTA2LDEwOSwxMTIsMTE0LDExNSwxMTYsMTE3LDExOCwxMTksMTIwLDEyMywxMjYsMTI3LDEyOCwxMjksMTMwLDEzMSwxMzIsMTM0LDEzNV0sInVzZXJOYW1lIjoiQ2hpcmFnIiwiZXhwIjoxNjgwMTIxNzY4LCJ1c2VySWQiOjEwMDA0NCwic3Rha2Vob2xkZXIiOjEsIm9yZ0lkIjoxMDU0fQ._Htn9WO9wnUZhcDs1H9ffzvNMjB0r_piSDc_Eo2AxS4'
//     }
//   }
// );
function App() {
  const [apiData, setApiData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [curIndex,setCurIndex]=useState(-1);
  useEffect(() => {
    const fetchData = async () => {
      const file_paths = ['Delivery', 'Iris', 'Jamp','L1','L2','MT','Order','Pharma'];
      const common = './json/';
      const y = [];
      const fetchPromises = file_paths.map(file => import(`./json/${file}.json`).then(data => y.push(data)));
      await Promise.all(fetchPromises); // Wait for all promises to resolve
      setApiData(y);
    };

    fetchData();
  }, []);
  if (!isLoggedIn) {
    return <LoginForm onLoginSuccess={() => setIsLoggedIn(true)} />; // use the Login component
  }
  const handleButtonClick = (data) => {
    setApiData(data);
  };
  if(curIndex==-1)
  {
    return (
        <div className="App">
        <Navbar cur_state={(x)=>setCurIndex(x)}/>
          <JavisAPIDoc/>
        </div>
    )
  }
  return (
    <>
    <div className="App">
    <Navbar cur_state={(x)=>setCurIndex(x)}/>
    <SwaggerUI spec={apiData[curIndex]} />
  </div>
  </>
    
  );
}

export default App;
//
