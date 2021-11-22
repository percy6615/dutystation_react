
import React from 'react';

// import  "./loginstyle.css"
import $ from 'jquery'; 

import Cookies from 'universal-cookie';
const cookies = new Cookies();



export default class LoginComponent extends React.Component {

    componentDidMount() {
     
      console.log("LoginComponent");
      var remember = function(){
        var checkd = $("#remember").prop("checked");
        if(checkd === "checked" || checkd){
          var username = $("#username-field").val();
          var password = $("#password-field").val();
          cookies.set("remember",true,{maxAge: 1 * 60 * 24 * 365,});
          cookies.set("username",username,{maxAge: 1 * 60 * 24 * 365,});
          cookies.set("password",password,{maxAge:1  * 60 * 24 * 365,});
        }else{
          cookies.set("remember",false,{maxAge: 1 * 60 * 24 * 365,});
          cookies.set("username","",{maxAge: 1 * 60 * 24 * 365,});
          cookies.set("password","",{maxAge: 1 * 60 * 24 * 365,});
        }
      }
      var fullHeight = function() {

        $('.js-fullheight').css('height', $(window).height());
        $(window).on("resize",function(){
          $('.js-fullheight').css('height', $(window).height());
        });
    
      };
      fullHeight();
      $(".toggle-password").click(function() {

        $(this).toggleClass("fa-eye fa-eye-slash");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") === "password") {
          input.attr("type", "text");
        } else {
          input.attr("type", "password");
        }
      });

      if(cookies.get("remember")==="true"){
        // $("#remember").prop("checked",true);
     
        $("#username-field").val(cookies.get("username"));
         $("#password-field").val(cookies.get("password"));
      }else{
        $("#remember").prop("checked",false);
      }

      $("#btn_login").on("click",function(){
        remember();
      
        return true;
      });
      
      $("#remember").on("change",function(){
        remember();
        // return true;
      });
   
    }

 
    render() {

        return (
     
          
          <div className="img js-fullheight" style={{color:"yellow",backgroundImage: "url(images/bg1.jpg)",opacity:0.9}}>
            <link rel="stylesheet" href="./css/logincss/css/loginstyle.css" />
            <div className="ftco-section">
              <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-md-6 text-center mb-5">
                        <h2 className="heading-section"></h2>
                    </div>
                  </div>
                  <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-4">
                        <div className="login-wrap p-0">
                          <h3 className="mb-4 text-center" style={{fontWeight: "bold"}}>Hope This Helps !!</h3>
                          <form action="/login" className="signin-form" method="post">
                              <div className="form-group">
                                <input id="username-field" type="text" name="username" className="form-control" placeholder="Username" required/>
                              </div>
                              <div className="form-group">
                                <input id="password-field" name="password" type="password" className="form-control" placeholder="Password" required/>
                                <span toggle="#password-field" className="fa fa-fw fa-eye field-icon toggle-password"></span>
                              </div>
                              <div className="form-group">
                                <button type="submit" className="form-control btn btn-primary submit px-3" id="btn_login">登入</button>
                              </div>
                              <div className="form-group d-md-flex">
                                <div className="w-50">
                                    <label className="checkbox-wrap checkbox-primary">Remember Me
                                    <input type="checkbox" defaultChecked id="remember"/>
                                    <span className="checkmark"></span>
                                    </label>
                                </div>
                                <div className="w-50 text-md-right">
                                    <a href="#" style={{color: "#fff"}}>Forgot Password</a>
                                </div>
                              </div>
                          </form>
                          <p className="w-100 text-center">&mdash; Sign Up &mdash;</p>
                          <div className="social d-flex text-center">
                              <a href="#" className="mr-md-1 rounded"><span className="ion-logo-facebook mr-2"></span>
                              註冊</a>
                          </div>
                        </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
         
                
        );
      
      
    }
  }


