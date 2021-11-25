import React from 'react';

export default  class SidebarUserComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = props.data;
        this.inntest=this.inntest.bind(this)
    }
    componentDidMount() {
      
    } 

    inntest(){
    //     var min = 1;
    //     var max = 10;
    //     var r = Math.random() * (max - min) + min
    //     var arr = [];
    //     for(var i = 0 ;i < r ;i++){
    //         arr[i]=i;
    //     }
    // //    var t = this.state;
    // //    t.arr = arr;
    //    this.setState({"arr":arr});
 
    }

    render() {
     
  
        
        if(this.state.hasOwnProperty("downitem")){
            return (<li className="sidebar-item">
                 <a data-target={'#'+this.state.dataTarget} data-toggle="collapse" className="sidebar-link collapsed" id={this.state.id} onClick={this.inntest}>
                    <i className="align-middle" data-feather={this.state.dataFeather}></i><span className="align-middle">{this.state.itemName}</span>
                </a>
                <ul id={this.state.dataTarget} className="sidebar-dropdown list-unstyled collapse " data-parent={'#'+this.state.dataParent}>
                    {this.state.downitem.map((i) => (
                        <li className="sidebar-item" key={i.itemid}>
                        <a className="sidebar-link"  id={i.itemid} >{i.itemName} </a>
                    </li>
                    ))}
                 </ul>
            </li>)
        }else{
            return (<li className={this.state.active?"sidebar-item active":"sidebar-item"}>
                <a className="sidebar-link" id={this.state.id} onClick={this.props.data.action}>
                    <i className="align-middle" data-feather={this.state.dataFeather}></i><span className="align-middle">{this.state.itemName}</span>
                </a>
            </li>)
        }
       
        
    }
}