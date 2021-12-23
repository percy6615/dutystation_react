import React from 'react';


export default  class ChartComponent extends React.Component {
    constructor(props){
        super(props)
      
    }
    componentDidMount() {

    } 
    render() {
        return (
            <div id="chart" className="chart " style={{"display": this.props.data.display,}} >
                <div className="alert alert-warning" role="alert" style={{
                "position": "relative",
                padding: ".75rem 1.25rem",
                marginBottom: "1rem",
                border: "1px solid transparent",
                borderRadius: "0.5rem",
                "fontSize": "14pt"}}>
                <div style={{"display":"none"}}><span id="date_interval">2021-10-22 至 2021-10-28</span></div>
                <strong>
                        
                        <span id="demo">璨樹颱風</span> 災情綜整表 (持續追蹤:&nbsp;<span id="nonderegu_num">0</span>&nbsp;件、解除管制:&nbsp;<span id="deregu_num">0</span>&nbsp;件；共受理:&nbsp;<span id="count_num">0</span>&nbsp;)
                        
                    </strong>
            </div>

            <div className="card">
    <div className="card-header">
        <div className="row">
            <div className="col-12 col-md-auto mr-auto">災情分佈圖表</div>
            <div className="col-12 col-md-auto ml-auto"><small>最後更新時間:&nbsp;<span className="update_time"></span></small></div>
        </div>
    </div>
    <div id="echart_demo"></div>
</div>
<div className="card">
    <div className="card-header">
        <div className="row">
            <div className="col-12 col-md-auto mr-auto">災情數量統計</div>
            <div className="col-12 col-md-auto ml-auto"><small>最後更新時間:&nbsp;<span className="update_time"></span></small></div>
        </div>
    </div>
    <div id="meter-container">

        <div className="col-sm-3 col-md-3 col-6 col-lg-2 meter-col">
            <div style={{backgroundImage: "url(images/icons/道路、隧道災情.png)"}} data-html="true" data-placement="right" data-toggle="tooltip" data-original-title="2021-11-09: 0 件</br>2021-11-10: 0 件</br>2021-11-11: 0 件</br>2021-11-12: 0 件</br>2021-11-13: 0 件</br>2021-11-14: 0 件</br>2021-11-15: 0 件"></div><span>路樹災情</span><span><a data-meter="路樹災情">0</a>件</span>
        </div>
        <div className="col-sm-3 col-md-3 col-6 col-lg-2 meter-col">
            <div style={{backgroundImage: "url(images/icons/道路、隧道災情.png)"}} title="廣告招牌災情"></div> <span>廣告招牌災情</span> <span><a data-meter="廣告招牌災情">0</a>件</span>
        </div>
        <div className="col-sm-3 col-md-3 col-6 col-lg-2 meter-col">
            <div style={{backgroundImage: "url(images/icons/道路、隧道災情.png)"}} title="道路、隧道災情"></div> <span>道路、隧道災情</span> <span><a data-meter="道路、隧道災情">0</a>件</span>
        </div>
        <div className="col-sm-3 col-md-3 col-6 col-lg-2 meter-col">
            <div style={{backgroundImage: "url(images/icons/道路、隧道災情.png)"}} title="橋梁災情"></div> <span>橋梁災情</span> <span><a data-meter="橋梁災情">0</a>件</span>
        </div>
        <div className="col-sm-3 col-md-3 col-6 col-lg-2 meter-col">
            <div style={{backgroundImage: "url(images/icons/道路、隧道災情.png)"}} title="鐵路、高鐵及捷運災情"></div> <span>鐵路、高鐵及捷運災情</span> <span><a data-meter="鐵路、高鐵及捷運災情">0</a>件</span>
        </div>
        <div className="col-sm-3 col-md-3 col-6 col-lg-2 meter-col">
            <div style={{backgroundImage: "url(images/icons/道路、隧道災情.png)"}} title="積淹水災情"></div> <span>積淹水災情</span> <span><a data-meter="積淹水災情">0</a>件</span>
        </div>
        <div className="col-sm-3 col-md-3 col-6 col-lg-2 meter-col">
            <div style={{backgroundImage: "url(images/icons/道路、隧道災情.png)"}} title="土石災情"></div> <span>土石災情</span> <span><a data-meter="土石災情">0</a>件</span>
        </div>
        <div className="col-sm-3 col-md-3 col-6 col-lg-2 meter-col">
            <div style={{backgroundImage: "url(images/icons/道路、隧道災情.png)"}} title="建物損毀"></div> <span>建物損毀</span> <span><a data-meter="建物損毀">0</a>件</span>
        </div>
        <div className="col-sm-3 col-md-3 col-6 col-lg-2 meter-col">
            <div style={{backgroundImage: "url(images/icons/道路、隧道災情.png)"}} title="水利設施災害"></div> <span>水利設施災害</span> <span><a data-meter="水利設施災害">0</a>件</span>
        </div>
        <div className="col-sm-3 col-md-3 col-6 col-lg-2 meter-col">
            <div style={{backgroundImage: "url(images/icons/道路、隧道災情.png)"}} title="民生、基礎設施災害"></div> <span>民生、基礎設施災害</span> <span><a data-meter="民生、基礎設施災害">0</a>件</span>
        </div>
        <div className="col-sm-3 col-md-3 col-6 col-lg-2 meter-col">
            <div style={{backgroundImage: "url(images/icons/道路、隧道災情.png)"}} title="車輛因災損毀"></div> <span>車輛因災損毀</span> <span><a data-meter="車輛因災損毀">0</a>件</span>
        </div>
        <div className="col-sm-3 col-md-3 col-6 col-lg-2 meter-col">
            <div style={{backgroundImage: "url(images/icons/道路、隧道災情.png)"}} title="環境汙染"></div> <span>環境汙染</span> <span><a data-meter="環境汙染">0</a>件</span>
        </div>
        <div className="col-sm-3 col-md-3 col-6 col-lg-2 meter-col">
            <div style={{backgroundImage: "url(images/icons/道路、隧道災情.png)"}} title="火災"></div> <span>火災</span> <span><a data-meter="火災">0</a>件</span>
        </div>
        <div className="col-sm-3 col-md-3 col-6 col-lg-2 meter-col">
            <div style={{backgroundImage: "url(images/icons/道路、隧道災情.png)"}} title="其他"></div> <span>其他</span> <span><a data-meter="其他">0</a>件</span>
        </div>
    </div>
</div>
    </div>
    
    
    );
    }
}