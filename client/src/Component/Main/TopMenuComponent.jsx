import React from 'react';
import { Nav } from 'react-bootstrap';

export default  class TopMenuComponent extends React.Component {
    componentDidMount() {

    } 
    render() {
        return (<Nav className="navbar navbar-expand navbar-light navbar-bg">
                <a className="sidebar-toggle d-flex  js-sidebar-toggle">
                    <i className="hamburger align-self-center"></i>
                </a>
                <div class="navbar-collapse collapse">
                    <button style={{margin: "5px"}} class=" btn  btn-outline-secondary  d-none d-sm-inline-block" id="immediate" type="button">立 即 處 理 <i class="badge rounded-pill bg-danger" id="badge-immediate">0</i></button>
                    <button class=" btn  btn-outline-secondary  d-none d-sm-inline-block" id="continuous" type="button">持 續 管 制 <i class="badge rounded-pill bg-danger" id="badge-continuous">0</i></button>
                    <button style={{margin: "5px"}} class=" btn  btn-outline-secondary  d-none d-sm-inline-block" id="deregulation" type="button">解 除 管 制 <i class="badge rounded-pill bg-danger" id="badge-deregulation">0</i></button>
                    <div style={{"margin-left": "10px"}} class="position-relative">
                        <a class="input-group-lg input-group-text d-inline-block d-sm-none" id="disastermerge" style={{"margin-right": "10px","background-color": "white",    border: "1px solid #dc3545"}} data-toggle="dropdown"><i style={{color:"red"}} class="far fa-file-alt"></i></a>
                        <ul class="dropdown-menu dropdown-menu-left" aria-labelledby="disastermerge">
                            <li><a class="dropdown-item" href="#">立即處理 <i class="badge rounded-pill bg-danger" id="badge-immediate">0</i></a></li>
                            <div class="dropdown-divider"></div>
                            <li><a class="dropdown-item" href="#">持續管制 <i class="badge rounded-pill bg-danger" id="badge-continuous">0</i></a></li>
                            <div class="dropdown-divider"></div>
                            <li><a class="dropdown-item" href="#">解除管制 <i class="badge rounded-pill bg-danger"  id="badge-deregulation">0</i></a></li>
                        </ul>
                    </div>

                    <ul class="navbar-nav navbar-align">
                        <li class="nav-item dropdown">
                            <div class="position-relative">
                                <a class="m-1 btn btn-outline-info dropdown-toggle d-none d-sm-inline-block" id="funct" data-toggle="dropdown" aria-expanded="false">功能</a>
                                <a class=" input-group-text d-inline-block d-sm-none" id="funct" style={{"margin-right": "10px;"}} data-toggle="dropdown"><i class="fas fa-toolbox"></i></a>
                                <ul class="dropdown-menu dropdown-menu-left" aria-labelledby="funct">
                                    <li><a class="dropdown-item" href="#" id="disasterreport">災情通報</a></li>
                                   
                                        <div class="dropdown-divider"></div>
                                        <li><a class="dropdown-item" href="#">Line發佈訊息</a></li>
                                  
                                </ul>
                            </div>
                        </li>
                        <li class="nav-item  ">
                            <div class="position-relative">
                                <a class="m-1 btn btn-outline-dark  d-none d-sm-inline-block" id="filterdata">時間區域</a>
                                <a class="input-group-text  d-inline-block d-sm-none" id="filterdataicon"><i class="fas fa-filter"></i></a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-icon js-fullscreen d-none d-lg-block" href="#" id="fullscreen">
                                <div class="position-relative">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-maximize align-middle">
                                        <path
                                            d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3">
                                        </path>
                                    </svg>
                                </div>
                                <div id="bigsmall" style={{"display": "none"}}></div>
                            </a>
                        </li>

                        <li class="nav-item dropdown">
                            <a class="nav-icon dropdown-toggle" href="#" data-toggle="dropdown">
                                <i class="align-middle" data-feather="settings"></i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right">
                                <a class="dropdown-item"  id="sysprofile"><i class="align-middle mr-1" data-feather="user"></i> Profile</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#" id="syshelp"><i class="align-middle mr-1" data-feather="help-circle"></i>Help Center</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="/login">Log out</a>
                            </div>
                        </li>

                    </ul>
                </div>
        </Nav>);
    }
}