import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
export default  class BootstrapModalComponent extends React.Component {
    constructor(props){
        super(props)
        this.handleClose = this.handleClose.bind(this)
    }
    componentDidMount() {

    } 

     handleClose(){
        this.props.data.display=false
     }
    
    render() {

        console.log(this.props.data.display);

        return (<Modal show={this.props.data.display} onHide={this.handleClose} backdrop="true" size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
              <Modal.Title  id="contained-modal-title-vcenter">Modal heading</Modal.Title>
            </Modal.Header >
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose} >
                Close
              </Button>
              <Button variant="primary">
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>);
    }
}