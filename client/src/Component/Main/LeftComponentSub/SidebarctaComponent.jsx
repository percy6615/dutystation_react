import React from 'react';


export default  class SidebarctaComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = props.data;
        
    }
    componentDidMount() {

    } 
    render() {
        return (<a  className="list-group-item">
            
        <div className="row g-0 align-items-center">
            <div className="col-2">
                <i className="text-success" data-feather="user-check"></i>
            </div>
            <div className="col-10">
                <div className="text-muted small mt-1">{this.state.username}</div>

            </div>
        </div>
    </a>);
    }
}