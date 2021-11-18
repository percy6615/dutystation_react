import React from 'react';
import { BrowserRouter,Route,Routes  } from "react-router-dom";
import Login from "./Login"
class RouterComponent extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
      return (
          <BrowserRouter>
            <Routes>
                    <Route exact path="/" element={<Login/>} />
            </Routes>
          </BrowserRouter>
      );
    }
  }
  
  export default RouterComponent;