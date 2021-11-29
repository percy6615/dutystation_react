import React from 'react';
import { Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileAlt,faFilter,faToolbox } from '@fortawesome/free-solid-svg-icons'

export default  class TopMenuComponent extends React.Component {
    componentDidMount() {

    } 
    render() {
    
        return (<Nav className="navbar navbar-expand navbar-light navbar-bg">
                <a className="sidebar-toggle d-flex  js-sidebar-toggle">
                    <i className="hamburger align-self-center"></i>
                </a>
                <div className="navbar-collapse collapse">
                    <button style={{margin: "5px"}} className=" btn  btn-outline-secondary  d-none d-sm-inline-block" id="immediate" type="button">立 即 處 理 <i className="badge rounded-pill bg-danger" id="badge-immediate">0</i></button>
                    <button className=" btn  btn-outline-secondary  d-none d-sm-inline-block" id="continuous" type="button">持 續 管 制 <i className="badge rounded-pill bg-danger" id="badge-continuous">0</i></button>
                    <button style={{margin: "5px"}} className=" btn  btn-outline-secondary  d-none d-sm-inline-block" id="deregulation" type="button">解 除 管 制 <i className="badge rounded-pill bg-danger" id="badge-deregulation">0</i></button>
                    <div style={{"marginLeft": "10px"}} className="position-relative">
                        <a className="input-group-lg input-group-text d-inline-block d-sm-none" id="disastermerge" style={{"marginRight": "10px","backgroundColor": "white",  border: "1px solid #dc3545"}} data-toggle="dropdown"><FontAwesomeIcon icon={faFileAlt} color="red" /></a>
                        <ul className="dropdown-menu dropdown-menu-left" aria-labelledby="disastermerge">
                            <li><a className="dropdown-item" >立即處理 <i className="badge rounded-pill bg-danger" id="badge-immediate">0</i></a></li>
                            <div className="dropdown-divider"></div>
                            <li><a className="dropdown-item" >持續管制 <i className="badge rounded-pill bg-danger" id="badge-continuous">0</i></a></li>
                            <div className="dropdown-divider"></div>
                            <li><a className="dropdown-item" >解除管制 <i className="badge rounded-pill bg-danger"  id="badge-deregulation">0</i></a></li>
                        </ul>
                    </div>

                    <ul className="navbar-nav navbar-align">
                        <li className="nav-item dropdown">
                            <div className="position-relative">
                                <a className="m-1 btn btn-outline-info dropdown-toggle d-none d-sm-inline-block" id="funct" data-toggle="dropdown" aria-expanded="false">功能</a>
                                <a className=" input-group-text d-inline-block d-sm-none" id="funct" style={{"marginRight": "10px"}} data-toggle="dropdown"><FontAwesomeIcon icon={faToolbox}  /></a>
                                <ul className="dropdown-menu dropdown-menu-left" aria-labelledby="funct">
                                    <li><a className="dropdown-item"  id="disasterreport">災情通報</a></li>
                                   
                                        <div className="dropdown-divider"></div>
                                        <li><a className="dropdown-item" >Line發佈訊息</a></li>
                                  
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item  ">
                            <div className="position-relative">
                                <a className="m-1 btn btn-outline-dark  d-none d-sm-inline-block" id="filterdata">時間區域</a>
                                <a className="input-group-text  d-inline-block d-sm-none" id="filterdataicon"><FontAwesomeIcon icon={faFilter}  /></a>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-icon js-fullscreen d-none d-lg-block"  id="fullscreen">
                                <div className="position-relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-maximize align-middle">
                                        <path
                                            d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3">
                                        </path>
                                    </svg>
                                </div>
                                <div id="bigsmall" style={{"display": "none"}}></div>
                            </a>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-icon dropdown-toggle"  data-toggle="dropdown">
                                <i className="align-middle" data-feather="settings"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                                <a className="dropdown-item"  id="sysprofile"><i className="align-middle mr-1" data-feather="user"></i> Profile</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item"  id="syshelp"><i className="align-middle mr-1" data-feather="help-circle"></i>Help Center</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="/login">Log out</a>
                            </div>
                        </li>

                    </ul>
                </div>
        </Nav>);
    }
}