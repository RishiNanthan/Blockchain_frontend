import React, { Component, Fragment } from 'react';

import Navigation from './layouts/Navigation';
import blockchain_img1 from './images/blockchain.jpg';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <Fragment>
                <div className="home">
                    <Navigation />
                    <div className="container">
                        <h3>Blockchain</h3>
                        <img className="home-img" src={ blockchain_img1 } alt="Blockchain" />
                        <p>
                            &nbsp; &nbsp; The world is moving from physical unreliable currency to secure distributed 
                            cryptocurrency, why not you ? Make the transformation now into the secure world of 
                            cryptocurrency by creating an address, with just a click away. For creating an address, 
                            we don't need any of your details, still works like magic holding your money to 
                            yourself with an unlimited amount of security than that of any of your previous 
                            secure banks..  
                        </p>
                    </div>
                </div>
            </Fragment>
        )
    }
}


export default Home;