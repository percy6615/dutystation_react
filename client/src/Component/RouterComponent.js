import React from 'react';
import { BrowserRouter,Route,Routes  } from "react-router-dom";
import LoginComponent from "./LoginComponent"
import MainComponent from './MainComponent';
export default  class RouterComponent extends React.Component {
  // navigate react
    render() {
      return (
          <BrowserRouter>
            <Routes>
                    <Route exact path="/" element={<LoginComponent/>} />
                    <Route exact path="/login" element={<LoginComponent/>} />
                    <Route exact path="/main" element={<MainComponent/>} />
            </Routes>
          </BrowserRouter>
      );
    }
  }
  
