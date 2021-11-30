import React from 'react';
import ReactModal from 'react-modal' ;

export default  class ModalComponent extends React.Component {
    constructor(props){
        super(props)
        this.state = props.data;
        this.confirmHandle = this.confirmHandle.bind(this);
    }
 
    componentDidMount() {

    } 

    confirmHandle(){
        this.props.data.closeModal();
    }
   
    render() {
    
        const  customStyles={
           
            content: {
              position: 'absolute',
              top: '20%',
              left: '20%',
              right: '20%',
              bottom: '20%',
              border: '1px solid #ccc',
              background: '#fff',
              overflow: 'auto',
              WebkitOverflowScrolling: 'touch',
              borderRadius: '4px',
              outline: 'none',
              padding: '20px'
            }
          };
        return ( 
           
           <ReactModal
					isOpen={this.props.data.showModal}
					closeModal={this.props.data.closeModal}
                    style={customStyles}
					appElement={document.getElementById('root') }
                    onRequestClose={this.props.data.closeModal}
                    closeTimeoutMS={100} 
                    // overlayClassName="promise-modal-overlay"
				>
					<img
						width="100%"
						style={{ borderRadius: 3 }}
						src="https://source.unsplash.com/random"
						alt="unsplash"
					/>

					<button
						
						onClick={this.props.data.closeModal}
					>
						關閉
					</button>
                    <button
						
						onClick={this.confirmHandle}
					>
						關閉
					</button>
				</ReactModal>
          );
    }
}