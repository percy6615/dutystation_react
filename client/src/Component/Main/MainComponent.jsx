import React from 'react';
import {Nav} from 'react-bootstrap';

export default  class MainComponent extends React.Component {
    componentDidMount() {

    } 
    render() {

        return (
            
            <div className="wrapper" id="whole">
             
               <link href="css/maincss/css/app.css" rel="stylesheet"/>
                <link href="css/maincss/css/main.css" rel="stylesheet"></link>
                
                <Nav id="sidebar" className="sidebar nav">
                    <div className="sidebar-content js-simplebar">
                        <a className="sidebar-brand" href="\main" style={{"color": "gold"}}>
                            防救災輔助系統<span className="align-middle"></span>
                        </a>
                   
                    <div className="sidebar-user">
                        <div className="d-flex justify-content-center">
                            <div className="flex-shrink-0">
                                <img src="images/avatars/avatar.jpg" className="avatar img-fluid rounded me-1" alt=""/>
                            </div>
                             <div className="flex-grow-1 ps-2">
                                <a className="sidebar-user-title " href="#" data-bs-toggle="dropdown" aria-expanded="false"> 
								黃信愷
							    </a>
                                <div className="sidebar-user-subtitle">死變態</div>
                            </div>
                        </div>
                    </div>
                    <ul className="sidebar-nav">

                        <li className="sidebar-header">
                            Common
                        </li>
                        <li className="sidebar-item active">
                            <a className="sidebar-link" id="sysmap">
                                <i className="align-middle" data-feather="map"></i> <span className="align-middle">地圖</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                        <a className="sidebar-link"  id="syschart">
                            <i className="align-middle" data-feather="pie-chart"></i> <span className="align-middle">圖表</span>
                        </a>
                        </li>
                        <li className="sidebar-item">
                        <a className="sidebar-link"  id="sysalbum">
                            <i className="align-middle" data-feather="image"></i> <span className="align-middle">照片集</span>
                        </a>
                        </li>
                        <li className="sidebar-header">
                            Administrator
                        </li>
                        <li className="sidebar-item">
                            <a href="#ui" data-target="#ui" data-toggle="collapse" className="sidebar-link collapsed" id="setting">
                                <i className="align-middle" data-feather="settings"></i> <span className="align-middle">設定</span>
                            </a>
                            <ul id="ui" className="sidebar-dropdown list-unstyled collapse " data-parent="#sidebar">
                                <li className="sidebar-item"><a className="sidebar-link"  id="orgmanager">組織管理</a>
                                </li>
                                <li className="sidebar-item"><a className="sidebar-link"  id="permanager">員工管理</a>
                                </li>
                                <li className="sidebar-item"><a className="sidebar-link"   id="jobmanager">職位管理</a>
                                </li>
                            </ul>
                        </li>

                        <li className="sidebar-item">
                            <a className="sidebar-link"  >
                                <i className="align-middle" data-feather="book"></i> <span className="align-middle">災情管制列表</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link"  id="sysproject">
                                <i className="align-middle" data-feather="share"></i> <span className="align-middle">發佈專案</span>
                            </a>
                        </li>
                    </ul>

                    <div className="sidebar-cta">
                        <div className="dropdown-menu-header" id="online-header" style={{"borderRadius": "0.35em", "borderStyle": "unset"}}>
                            系統在線人數:20
                        </div>
                        <div className="sidebar-cta-content scrollbar-style" id="online-content" style={{"overflow":"auto","margin": "auto","padding": "0em","height": "0px"}}>
                        <div className="list-group">
                            <a href="#" className="list-group-item">
                                <div className="row g-0 align-items-center">
                                    <div className="col-2">
                                        <i className="text-success" data-feather="user-check"></i>
                                    </div>
                                    <div className="col-10">
                                        <div className="text-muted small mt-1">team1-percy</div>

                                    </div>
                                </div>
                            </a>
                            <a href="#" className="list-group-item">
                                <div className="row g-0 align-items-center">
                                    <div className="col-2">
                                        <i className="text-success" data-feather="user-check"></i>
                                    </div>
                                    <div className="col-10">
                                        <div className="text-muted small mt-1">team2-percy</div>

                                    </div>
                                </div>
                            </a>
                            <a href="#" className="list-group-item">
                                <div className="row g-0 align-items-center">
                                    <div className="col-2">
                                        <i className="text-success" data-feather="user-check"></i>
                                    </div>
                                    <div className="col-10">
                                        <div className="text-muted small mt-1">team3-percy</div>

                                    </div>
                                </div>
                            </a>
                            <a href="#" className="list-group-item">
                                <div className="row g-0 align-items-center">
                                    <div className="col-2">
                                        <i className="text-success" data-feather="user-check"></i>
                                    </div>
                                    <div className="col-10">
                                        <div className="text-muted small mt-1">team4-percy</div>

                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    </div>
                    </div>
                </Nav>
                <div className="main">

                </div>
                <div className="fixedElement">
                    <div className="subfixedElement">

                    </div>
                </div>
        
                <div className="modal fade" id="exampleModalScrollable" tabIndex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered" role="document">
                    </div>
                </div>

                
                <div className="modal fade" id="exampleModalScrollable1" tabIndex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle1" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered" role="document">

                    </div>
                </div>
               
            </div>
            
          );

        }
}