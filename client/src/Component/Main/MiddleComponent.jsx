import React from 'react';
import MapComponent from './MiddleComponentSub/MapComponent';
import ChartComponent from './MiddleComponentSub/ChartComponent';
export default  class MiddleComponent extends React.Component {
    constructor(props){
        super(props)
       
    }
    componentDidMount() {

    } 
    render() {
        console.log("MiddleComponent")
        console.log(this.props)
        if(this.props.data.num===1){
            return(
               
                            <MapComponent></MapComponent>
                       
            )
        }else if(this.props.data.num===2){
            return(
            <div id="chart" className="chart " >
                              <ChartComponent></ChartComponent>
                             </div>)
        }else{
            return(<div>middle</div>)
        }
        // return (<div>
        //      {/* <div id="map" className="map" >
        //                     <MapComponent></MapComponent>
        //                 </div>
        //                 <div id="org" className="org" >

        //                 </div>
        //                 <div id="chart" className="chart " >
        //                     <ChartComponent></ChartComponent>
        //                 </div>
        //                 <div id="profile" className="profile " >
                            
        //                 </div>
        //                 <div id="album" className="album">
                            
        //                 </div> */}

        // </div>);
    }
}