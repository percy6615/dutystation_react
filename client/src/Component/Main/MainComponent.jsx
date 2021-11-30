import React from 'react';

import LeftMenuComponent from './LeftMenuComponent';
import TopMenuComponent from './TopMenuComponent'
import MapComponent from './MiddleComponentSub/MapComponent'

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
                    <main className="content mainformate">
                    <div id="map" className="map" style={{"display": "block", position: "relative"}}>
                            <MapComponent></MapComponent>
                        </div>
                        <div id="org" className="org" style={{"display": "none"}}>
                        
                        </div>
                        <div id="chart" className="chart " style={{"display": "none"}}>
                            
                        </div>
                        <div id="profile" className="profile " style={{"display": "none"}}>
                            
                        </div>
                        <div id="album" className="album" style={{"display": "none"}}>
                            
                        </div>
                    </main>
                    <footer>
                    <div className="container-fluid">
                    <div className="row text-muted">
                        <div className="col-6 text-left">
                            <p className="mb-0">
                                <a href="/main" className="text-muted"><strong>service</strong></a> &copy;
                            </p>
                        </div>
                        <div className="col-6 text-right">
                            <ul className="list-inline">
                                <li className="list-inline-item">
                                    <a className="text-muted" href="#">Support</a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="text-muted" href="#">Help Center</a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="text-muted" href="#">Privacy</a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="text-muted" href="#">Terms</a>
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
               
  
            </div>
            
          );

        }
}