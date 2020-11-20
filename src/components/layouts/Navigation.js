import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


function Navigation(props){
    return (
        <Fragment>
            <nav>
                <Link to="/">BlockChain</Link>
                <Link to="/address">Address</Link>
                <Link to="/transaction">Transactions</Link>
                <Link to="/block">Blocks</Link>
                <Link to="/other">Others</Link>
            </nav>
            <div style={{height: "10vh"}}>

            </div>
        </Fragment>
    );
}

export default Navigation;
