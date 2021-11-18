import React from 'react';
import { BrowserRouter,Route,Routes  } from "react-router-dom";
import LoginComponent from "./LoginComponent"
class RouterComponent extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
      return (
          <BrowserRouter>
            <Routes>
                    <Route exact path="/" element={<LoginComponent/>} />
            </Routes>
          </BrowserRouter>
      );
    }
  }
  
  export default RouterComponent;