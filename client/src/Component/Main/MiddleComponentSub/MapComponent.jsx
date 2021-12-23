import React from 'react';
import $ from 'jquery'
import map from '../../../js/mapcontrol'
export default  class MapComponent extends React.Component {
    constructor(props){
        super(props)
     
    }
    componentDidMount() {
      
        map.initial();
      
    } 


    togglecheckinput(){
        var isopen =  map.satelliteMap();
        $(".toggle-check-input").prop("checked", isopen);
        if(isopen){
            $("#lb_satellite").css("color", "white");
        }else{
            $("#lb_satellite").css("color", "black");
        }
    }

    overlayclose(){
        map.overlay.setVisible(false)
    }

    render() {
        return ( <div id="map" className="map" style={{"display": this.props.data.display, position: "relative"}}>
                <div style={{"borderRadius": "0.5em", backgroundColor: "rgba(150, 179, 193,0.5)", position: "absolute",  zIndex: 99999,bottom:"0px"}}>
                <label className="toggle-check" style={{marginLeft: "4px",marginRight: "auto",marginTop: "auto",marginBottom: "auto",position: "relative",top: "25%"}}>
                    <span id="lb_satellite">衛照圖</span>
                    <input type="checkbox" className="toggle-check-input" onClick={this.togglecheckinput}/>
                    <span className="toggle-check-text"></span>
                </label>
            </div>
            <div id="popup" className="ol-popup">
                <a id="popup-closer" className="ol-popup-closer" onClick={ this.overlayclose } style={{position: "absolute"}}></a>
                <div id="markerTitle"></div>
                <ul id="tab" className="nav nav-tabs"></ul>
                <div id="popup-content" className="tab-content">
                    <div className="tab-pane fade in active show" id="data"></div>
                    <div className="tab-pane fade" id="chart" style={{textAlign: "center"}}>
                    </div>
                    <div className="tab-pane fade" id="relative">
                        <div className="list-group" id="relative-list"></div>
                    </div>
                </div>
            </div>
            <button id="floatLayerSetting" className="btn pmd-btn-fab pmd-ripple-effect  pmd-btn-raised" type="button" style={{"position": "absolute",zIndex: 99999,bottom: "5px",right: "5px",backgroundColor: "rgba(255,255,255,0.5)",borderRadius: "1em",boxShadow: "1px 1px 1px 1px rgb(0 0 0 / 10%)"}}>
                <img style={{width:"25px",height:"25px"}}src="images/infographic.png "/><br/>
             </button>
        </div>);
    }
}