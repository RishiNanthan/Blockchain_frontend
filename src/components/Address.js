import React, { Component, Fragment } from 'react';

import Navigation from './layouts/Navigation';


class Address extends Component{
    constructor(props){
        super(props);
        this.state = {
            public_key: "",
            private_key: "",
            error_msg: "",
        }

        this.getAddress = this.getAddress.bind(this);
    }

    getAddress(){
        fetch(
            "/create_address"
        )
        .then( res => {
            return res.json();
        } )
        .then( data => {
            this.setState({
                public_key: data.public_key,
                private_key: data.private_key,
                error_msg: "",
            })
        })
        .catch( error => {
            console.log(error);
            this.setState({
                public_key: "",
                private_key: "",
                error_msg: "Server Unavailable. Check your internet connection and try again.",
            })
        })
    }

    render(){
        return (
            <Fragment>
                <Navigation />
                <div className="address container">
                    <h3>Address</h3>
                    <p>
                        Address is like the account number for your account. It consists of two components
                        namely,
                    </p>
                    <ul>
                        <li>Public Key</li>
                        <li>Private Key</li>
                    </ul>
                    <p>
                        <b>Public Key</b><br/> <br/>
                        &nbsp; &nbsp; This is the sharable part of your account. It is needed for other parties
                        to send you money. <br /> <br />
                        <b>Private Key</b> <br /> <br />
                        &nbsp; &nbsp; This key must not be shared to anyone. If anyone holds your private key, they 
                        can easily handle all your currency. <i>Only create new addresses by using trusted applications. </i>
                        Don't use random websites or applications for creating your address. They could have a copy of 
                        private keys. 
                    </p>
                    <button onClick={ this.getAddress }>Create New Address</button>
                    {
                        this.state.public_key !== "" && 
                        <p> 
                            Your new <b>Public Key: &nbsp; &nbsp;</b>
                            <span style={{color: "red", fontWeight: "bold"}}> { this.state.public_key } </span><br />
                            Your new <b>Private Key: &nbsp; &nbsp;</b>
                            <span style={{color: "red", fontWeight: "bold"}}> { this.state.private_key } </span>
                        </p>
                    }
                    {
                        this.state.error_msg !== "" &&
                            <p style={{color: "red"}}>{ this.state.error_msg }</p>
                    }
                </div>
            </Fragment>
        );
    }
}

export default Address;