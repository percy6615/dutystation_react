import React from 'react';

import LeftMenuComponent from './LeftMenuComponent';
import TopMenuComponent from './TopMenuComponent'
import MiddleComponent from './MiddleComponent';
import FootComponent from './FootComponent';

export default  class MainComponent extends React.Component {
    constructor(props){
        super(props)
        this.state={id:"sysmap"}
        this.callBackfun = this.callBackfun.bind(this)
    }
    componentDidMount() {


    } 

   
    callBackfun(evt){
        this.setState({id:evt})
    }
    render() {
       
        return (
            
            <div className="wrapper" id="whole">
             
               <link href="css/maincss/css/app.css" rel="stylesheet"/>
               <link href="css/maincss/css/main.css" rel="stylesheet"/>
               
                <LeftMenuComponent argue={this.callBackfun} />
                <div className="main">
                    <TopMenuComponent/>
                    <MiddleComponent data={{id:this.state.id}}></MiddleComponent>
                    <FootComponent/>
                </div>
                <div className="fixedElement">
                    <div className="subfixedElement">

                    </div>
                </div>
                
            </div>
            
          );

        }
}