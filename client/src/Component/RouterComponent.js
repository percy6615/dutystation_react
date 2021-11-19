import React from 'react';
import { BrowserRouter,Route,Routes  } from "react-router-dom";
import LoginComponent from "./LoginComponent"
export default  class RouterComponent extends React.Component {
   
    render() {
      return (
          <BrowserRouter>
            <Routes>
                    <Route exact path="/" element={<LoginComponent/>} />
                    <Route exact path="/main" element={<mainComponent/>} />
            </Routes>
          </BrowserRouter>
      );
    }
  }
  
