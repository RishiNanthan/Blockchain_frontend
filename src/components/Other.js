import React, { Component, Fragment } from 'react';

import Navigation from './layouts/Navigation';


class Other extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <Fragment>
                <Navigation />
                <div className="container others">
                    <h3>Other</h3>
                </div>
            </Fragment>
        );
    }
}

export default Other;