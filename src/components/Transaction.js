import React, { Component, Fragment } from 'react';

import Navigation from './layouts/Navigation';


class Transaction extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <Fragment>
                <Navigation />
                <div className="container transaction">
                    <h3>Transaction</h3>
                </div>
            </Fragment>
        );
    }
}

export default Transaction;