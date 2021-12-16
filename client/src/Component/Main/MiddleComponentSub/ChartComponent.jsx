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
    </div>);
    }
}