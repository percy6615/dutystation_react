import React from 'react';

import ModalComponent from './ModalComponent';
import LeftMenuComponent from './LeftMenuComponent';
import $ from 'jquery';

export default  class MainComponent extends React.Component {
    componentDidMount() {


    } 
    render() {

        return (
            
            <div className="wrapper" id="whole">
             
               <link href="css/maincss/css/app.css" rel="stylesheet"/>
               <link href="css/maincss/css/main.css" rel="stylesheet"/>
               
                <LeftMenuComponent />
                <div className="main">
                    <main>
                        
                    </main>
                    <footer>

                    </footer>
                </div>
                <div className="fixedElement">
                    <div className="subfixedElement">

                    </div>
                </div>
                <ModalComponent data={{modalid:"exampleModalScrollable"}}/>
  
            </div>
            
          );

        }
}