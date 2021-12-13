import React from 'react';

export default  class SidebarUserComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = props.data;
        this.argueClick=this.argueClick.bind(this)
        this.subArgueClick=this.subArgueClick.bind(this)
    }
    componentDidMount() {
      
    } 



    argueClick(){
        this.props.argue(this.props.data.id);
    }
    subArgueClick(e){
        this.props.argue(e.target.id);
     
    }
    render() {
     
  
        
        if(this.state.hasOwnProperty("downitem")){
            return (<li className="sidebar-item">
                 <a data-target={'#'+this.state.dataTarget} data-toggle="collapse" className="sidebar-link collapsed" id={this.state.id} >
                    <i className="align-middle" data-feather={this.state.dataFeather}></i><span className="align-middle">{this.state.itemName}</span>
                </a>
                <ul id={this.state.dataTarget} className="sidebar-dropdown list-unstyled collapse " data-parent={'#'+this.state.dataParent}>
                    {this.state.downitem.map((i) => (
                        <li className="sidebar-item" key={i.itemid}>
                        <a className="sidebar-link"  id={i.itemid} onClick={this.subArgueClick} >{i.itemName} </a>
                    </li>
                    ))}
                 </ul>
            </li>)
        }else{
            return (<li className={this.state.active?"sidebar-item active":"sidebar-item"}>
                <a className="sidebar-link" id={this.state.id} onClick={this.argueClick}>
                    <i className="align-middle" data-feather={this.state.dataFeather}></i><span className="align-middle">{this.state.itemName}</span>
                </a>
            </li>)
        }
       
        
    }
}