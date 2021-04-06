import React, { Fragment, useState } from 'react';

import DisplayBlock from './DisplayBlock';

const sample_block = {
    previous_block: "fzidfugugufy",
    version: "1.2.0",
    difficulty: "000000fcd2367",
    nonce: "000000a456644",
    block_id: "gfbikfhgihjhjnhnh",
    timestamp: "27/11/2020 12:00:00 AM",
    transactions: [

    ],
}


function BlockHome ( props ) {

    const [ blockID, setblockID ] = useState("");
    const [block, setblock] = useState( null );
    const [errorMsg, seterrorMsg] = useState("");

    const get_block = block_id  => {
        if(block_id === ""){
            seterrorMsg("");
            setblock(null);
            return;
        }
        fetch(`get_block?block_id=${ block_id }`)
        .then( res => {
            return res.json();
        })
        .then ( data => {
            setblock(data);
        })
        .catch( error => {
            seterrorMsg("Server Unavailable");
            setblock(null);
            console.log(error);
        })
    }


    const show_block = block_id => {
        setblockID( block_id );
        get_block( block_id );
    }

    return (
        <Fragment>
            <br />
            <input type="text" placeholder="Block ID" value={ blockID } onChange={
                event => {
                    event.persist();
                    setblockID( event.target.value );
                    get_block( event.target.value );
                }
            } />
            <br /> <br />
            &nbsp; &nbsp; <small style={{color: "red"}}>{ errorMsg }</small>
            <div>
                {
                    block !== null &&
                    <DisplayBlock data={ block } show_block={ show_block } />
                }
            </div>
        </Fragment>
    );
}


export default BlockHome;
