import React, { Component, Fragment } from 'react';

import Navigation from './layouts/Navigation';
import BlockHome from './layouts/block/BlockHome';
import { getBlock } from '../functionality/APICalls';


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
                    <BlockHome getBlock={ getBlock } />
                </div>
            </Fragment>
        );
    }
}

export default Block;