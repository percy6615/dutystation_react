import React from 'react';
import { BrowserRouter,Route,Routes  } from "react-router-dom";
import LoginComponent from "./Login/LoginComponent"
import MainComponent from './Main/MainComponent';
import DefaultComponent from './Main/DefaultComponent';
export default  class RouterComponent extends React.Component {
  // navigate react
    render() {
      return (
          <BrowserRouter>
            <Routes>
                    <Route exact path="/" element={<DefaultComponent/>} />
                    <Route exact path="/login" element={<LoginComponent/>} />
                    <Route exact path="/main" element={<MainComponent/>} />
            </Routes>
          </BrowserRouter>
      );
    }
  }
  
