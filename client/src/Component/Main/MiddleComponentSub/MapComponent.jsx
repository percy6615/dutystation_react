import React from 'react';
import TileLayer from 'ol/layer/Tile';
import Map from 'ol/Map';
import Overlay from 'ol/Overlay';
import View from 'ol/View';
import OSM from 'ol/source/OSM';
import { defaults as defaultControls} from 'ol/control';
import {fromLonLat} from 'ol/proj';
import {
    defaults as defaultInteractions,
  } from 'ol/interaction';

export default  class MapComponent extends React.Component {
    constructor(props){
        super(props)
       this.overlayclose = this.overlayclose.bind(this)
    }
    componentDidMount() {
        this.overlay = this.createOverlayer()
        this.map = this.createmap(this.overlay);

    } 

    createOverlayer() {
        var container = document.getElementById('popup');
        var overlay =new  Overlay({
            element: container,
            autoPan: true,
            autoPanAnimation: {
                duration: 250
            }
        });

        return overlay;
    }

    createmap(overlay) {
        var interactions = defaultInteractions({ pinchRotate: false });

        var map =new  Map({
            target: 'map',
            renderer: 'webgl',
            interactions: interactions,
            controls: defaultControls({
                attribution: false,
                zoom: false,
            }),
            overlays: [overlay],
            // hitTolerance:3,
            loadTilesWhileAnimating: true,
            loadTilesWhileInteracting: true,
            layers: [
                new  TileLayer({
                    source: new OSM()
                })
            ],
            view:new  View({
                center: fromLonLat([121, 23.4696923]),
                zoom: 8
            })
        });
        this.mapListener(map, overlay)

        return map;
    }

    overlayclose(){
        this.overlay.setVisible(false);
    }

    mapListener(map, overlay) {
        map.on('singleclick', function(e) {
            // alert(e.coordinate);
            var coordinate = e.coordinate;
            overlay.setPosition(coordinate);

            // alert(ol.proj.transform(e.coordinate, 'EPSG:3857', 'EPSG:4326'));
            // 通過getEventCoordinate方法獲取地理位置，再轉換為wgs84座標，並彈出對話方塊顯示
            // alert(map.getEventCoordinate(e.originalEvent));
            // alert(ol.proj.transform(map.getEventCoordinate(e.originalEvent), 'EPSG:3857', 'EPSG:4326'));
            // var lonlat = map.getCoordinateFromPixel(e.pixel);
            // alert(lonlat);
            // alert(ol.proj.transform(lonlat,"EPSG:3857", "EPSG:4326")); //由3857座標系轉為4326
        });
        // 右鍵
        // map.getViewport().addEventListener("contextmenu",function(e){
        //   e.preventDefault()
        //   // console.log("contextmenu")
        //   // console.log( map.getEventCoordinate(e))
        //   overlay.setPosition(map.getEventCoordinate(e));
        // })


    }

    render() {
        return (<div>
                <div style={{"borderRadius": "0.5em", backgroundColor: "rgba(150, 179, 193,0.5)", position: "absolute",  zIndex: 99999,bottom:"0px"}}>
                <label className="toggle-check" style={{marginLeft: "4px",marginRight: "auto",marginTop: "auto",marginBottom: "auto",position: "relative",top: "25%"}}>
                    <span id="lb_satellite">衛照圖</span>
                    <input type="checkbox" className="toggle-check-input" />
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
        </div>);
    }
}