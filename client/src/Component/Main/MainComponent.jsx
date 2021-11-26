import React from 'react';

import ModalComponent from './ModalComponent';
import LeftMenuComponent from './LeftMenuComponent';
import TopMenuComponent from './TopMenuComponent'
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
                    <TopMenuComponent/>
                    <main class="content mainformate">
                        
                    </main>
                    <footer>
                    <div class="container-fluid">
                    <div class="row text-muted">
                        <div class="col-6 text-left">
                            <p class="mb-0">
                                <a href="/main" class="text-muted"><strong>service</strong></a> &copy;
                            </p>
                        </div>
                        <div class="col-6 text-right">
                            <ul class="list-inline">
                                <li class="list-inline-item">
                                    <a class="text-muted" href="#">Support</a>
                                </li>
                                <li class="list-inline-item">
                                    <a class="text-muted" href="#">Help Center</a>
                                </li>
                                <li class="list-inline-item">
                                    <a class="text-muted" href="#">Privacy</a>
                                </li>
                                <li class="list-inline-item">
                                    <a class="text-muted" href="#">Terms</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
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