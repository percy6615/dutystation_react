import React from 'react';
import {UserCheck } from 'react-feather';
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
                <UserCheck className="text-success" size="16" ></UserCheck>
            </div>
            <div className="col-10">
                <div className="text-muted small mt-1" style={{marginLeft:"5px"}}> {this.state.username}</div>
            </div>
        </div>
    </a>);
    }
}