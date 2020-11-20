import React, { Component, Fragment } from 'react';

import Navigation from './layouts/Navigation';


class Block extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <Fragment>
                <Navigation />
                <div className="container blocks">
                    <h3>Block</h3>
                </div>
            </Fragment>
        );
    }
}

export default Block;