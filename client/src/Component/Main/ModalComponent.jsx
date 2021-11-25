import React from 'react';


export default  class ModalComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = props.data;
    }
    componentDidMount() {

    } 
    render() {
        return ( <div className="modal fade" id={this.state.modalid} tabIndex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered" role="document">
                    </div>
                </div>);
    }
}