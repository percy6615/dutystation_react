import React from 'react';


export default  class DefaultComponent extends React.Component {
    componentDidMount() {

    } 
    render() {
        return (
                              <footer>
                    <div className="container-fluid">
                    <div className="row text-muted">
                        <div className="col-6 text-left">
                            <p className="mb-0">
                                <a href="/main" className="text-muted"><strong>service</strong></a> &copy;
                            </p>
                        </div>
                        <div className="col-6 text-right">
                            <ul className="list-inline" style={{    marginBottom: 0}}>
                                <li className="list-inline-item">
                                    <a className="text-muted" href="#">Support</a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="text-muted" href="#">Help Center</a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="text-muted" href="#">Privacy</a>
                                </li>
                                <li className="list-inline-item">
                                    <a className="text-muted" href="#">Terms</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                    </footer>
       );
    }
}