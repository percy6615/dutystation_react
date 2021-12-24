import React from 'react';
import MapComponent from './MiddleComponentSub/MapComponent';
import ChartComponent from './MiddleComponentSub/ChartComponent';
import ModalComponent from './ModalComponent'
import BootstrapModalComponent from './BootstrapModalComponent'
export default  class MiddleComponent extends React.Component {
    
    constructor(props){
        super(props)
       this.state = {}
      
    }
    
    componentDidMount() {
        
    } 
    render() {

        // if(this.props.data.id==="sysmap"){
        //     return(
               
        //        <MapComponent></MapComponent>
                       
        //     )
        // }else if(this.props.data.id==="syschart"){
        //     return(
        //     <div id="chart" className="chart " >
        //                       <ChartComponent></ChartComponent>
        //                      </div>)
        // }else{
        //     return(<ModalComponent data={{modalid:"exampleModalScrollable",showModal: this.state.showModal,closeModal:this.closeModal}}/>)
        // }
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
        
        var displaymap = "none";
        var displaychart = "none";
        var displaymodal = false;
        if(this.props.data.id==="sysmap"){
            displaymap = "block"
        }else if(this.props.data.id==="syschart"){
            displaychart = "block"
        }else if(this.props.data.id==="sysproject"){
            displaymodal = true
        }
        
        
        return (<main className="content mainformate">
                <MapComponent data={{display:displaymap}}/>
                <ChartComponent data={{display:displaychart}}/>
                <BootstrapModalComponent data={{display:displaymodal}} />
        </main>)
    }
}