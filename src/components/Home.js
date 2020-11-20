import React, { Component, Fragment } from 'react';

import Navigation from './layouts/Navigation';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }


    render(){
        return (
            <Fragment>
                <Navigation />
                <h1>Hello World</h1>
            </Fragment>
        )
    }
}


export default Home;