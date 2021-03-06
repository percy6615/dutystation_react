import React from 'react';
import {Nav} from 'react-bootstrap';

import SidebarItemComponent from "./LeftComponentSub/SidebarItemComponent";
import $ from 'jquery';
import  SidebarctaComponent from "./LeftComponentSub/SidebarctaComponent"
import Cookies from 'universal-cookie';
const cookies = new Cookies();
export default  class LeftMenuComponent extends React.Component {
    constructor(props){
        super(props)
    
        this.state = {arr:cookies.get("arr")==undefined?[]:cookies.get("arr")};
        
        this.test=this.test.bind(this)
        this.allocate=this.allocate.bind(this)
        this.dispatchproject=this.dispatchproject.bind(this)
        
    }
    componentDidMount() {
        $(".sidebar-content  .sidebar-nav  .sidebar-item .sidebar-link").on("click", function() {
            var idname = $(this).attr("id");
            $(" .sidebar-content .sidebar-nav  .sidebar-item.active").removeClass('active')
            if (idname === "orgmanager" || idname === "permanager" || idname === "jobmanager") {
                $(" .sidebar-content .sidebar-nav  .sidebar-item .sidebar-item.active").removeClass('active')
                $(this).parent().parent().parent().addClass('active');
            }
            $(this).parent().addClass('active');
        });

        $("#online-header").on("click", function(e) {
            var clientHeight = $("#online-content").height()
            if (clientHeight > 0) {
                $("#online-content").animate({
                    height: "0px",
                }, 250);
            } else {
                $("#online-content").animate({
                    height: "125px",
                }, 500);
            }
        });
    
        //   // the OPEN button
        //   showModal = () => {
        //     this.setState({ show: true });
        //   };
        
        //     // Method to hide modal, activated by handleClose prop on the <Modal>
        //   hideModal = () => {
        //     this.setState({ 
        //             show: false
        //         });
        //   };
        
    
    
    } 
    test(){
        var min = 1;
        var max = 10;
        var r = Math.random() * (max - min) + min
        var arr = [];
        for(var i = 0 ;i < r ;i++){
            arr[i]=i;
        }
    //    var t = this.state;
    //    t.arr = arr;
       this.setState({"arr":arr});
       cookies.set("arr",arr);
    }

    allocate(type){
        this.props.argue(type)
    }

    dispatchproject(){

    }


    
    render() {
      
        var userData={"imgpath":"images/avatars/avatar.jpg","pname":"?????????","sname":"?????????"};
        var mapItem = {"active":true,id:"sysmap",dataFeather:"map",itemName:"??????"};
        var chartItem={"active":false,id:"syschart",dataFeather:"pie-chart",itemName:"??????"};
        var imageItem={"active":false,id:"sysalbum",dataFeather:"image",itemName:"?????????"};
        var setItem={"active":false,"dataTarget":"setui","dataParent":"sidebar",id:"syssetting",dataFeather:"image",action:this.test,itemName:"??????",downitem:[{itemid:"orgmanager",itemName:"????????????"},{itemid:"permanager",itemName:"????????????"},{itemid:"jobmanager",itemName:"????????????"}]};
        var listItem={"active":false,id:"syslist",dataFeather:"book",itemName:"??????????????????",action:this.test};
        var projectItem={"active":false,id:"sysproject",dataFeather:"share",itemName:"????????????"};

        return (<Nav id="sidebar" className="sidebar ">
        <div className="sidebar-content js-simplebar">
                <a className="sidebar-brand" href="\main" style={{"color": "gold"}}>
                    ?????????????????????<span className="align-middle"></span>
                </a>
                <div className="sidebar-user">
                    <div className="d-flex justify-content-center">
                        <div className="flex-shrink-0">
                            <img src={userData.imgpath} className="avatar img-fluid rounded me-1" alt=""/>
                        </div>
                        <div className="flex-grow-1 ps-2">
                            <a className="sidebar-user-title "  data-bs-toggle="dropdown" aria-expanded="false"> 
                            {userData.pname} 
                            </a>
                            <div className="sidebar-user-subtitle"> {userData.sname} </div>
                        </div>
                    </div>
                </div>
            <ul className="sidebar-nav">
                <li className="sidebar-header">
                    Common
                </li>
                <SidebarItemComponent data={mapItem} argue={this.allocate}/>
                <SidebarItemComponent data={chartItem} argue={this.allocate}/>
                <SidebarItemComponent data={imageItem} argue={this.allocate}/>
                <li className="sidebar-header">
                    Administrator
                </li>
                <SidebarItemComponent data={setItem} argue={this.allocate}/>
                <SidebarItemComponent data={listItem} argue={this.allocate}/>
                <SidebarItemComponent data={projectItem} argue={this.allocate}/>
            </ul>

            <div className="sidebar-cta">
                    <div className="dropdown-menu-header" id="online-header" style={{"borderRadius": "0.35em", "borderStyle": "unset"}}>
                        ??????????????????:20
                    </div>
                    <div className="sidebar-cta-content scrollbar-style" id="online-content" style={{"overflow":"auto","margin": "auto","padding": "0em","height": "0px","backgroundColor":"white"}}>
                        <div className="list-group">
                        <SidebarctaComponent  data={{username:1}}/>
                            {this.state.arr.map((i) => (
                               <SidebarctaComponent key={i} data={{username:i}}/>
                            ))}
                             
                        </div>
                </div>
            </div>
        </div>
    </Nav>);
    }
}
// function createprojectmodal() {

//     if ($("#exampleModalScrollable > div").find(".modal-content").length > 0) {
//         $("#exampleModalScrollable > div").empty();
//     }
//     var header = $("<div>", {
//             class: "modal-header"
//         }).append($("<h3>", {
//             class: "modal-title",
//             id: "exampleModalScrollableTitle",
//             text: "????????????"
//         }))
//         .append($("<button>", {
//             class: "close",
//             "data-bs-dismiss": "modal",
//             "aria-label": "Close",
//             html: ' <span aria-hidden="true">&times;</span>'
//         }));

//     var body = $("<div>", {
//         class: "modal-body"
//     });

//     var foot = $("<div>", {
//         class: "modal-footer"
//     }).append($("<button>", {
//         class: "btn btn-secondary",
//         "data-bs-dismiss": "modal",
//         id: "modalreportcancel",
//         text: "??????",
//     })).append($("<button>", {
//         class: "btn btn-primary",
//         id: "modalreportconfirm",
//         text: "??????",
//     }));

//     var content = $("<div>", {
//         class: "modal-content"
//     }).append(header).append(body).append(foot);

//     $("#exampleModalScrollable > div").append(content);

//     $("#modalreportcancel").on("click", function(e) {
//         //TODO
//     });

//     $("#modalreportconfirm").on("click", function(e) {
//         //TODO
//     });
// }

function clickMenu(type) {
    if ($(type).is(":hidden")) {
        $("main > div").css("display", "none");
        $(type).fadeIn();
        $(type).fadeIn("slow");
        $(type).fadeIn("10000");
        $(type).css("display", "block");
    }

}