import React, { Fragment, useState } from 'react';

import DisplayBlock from './DisplayBlock';


function BlockHome ( props ) {

    const getBlock = props.getBlock;
    const [ blockID, setblockID ] = useState("");
    const [block, setblock] = useState( null );
    const [errorMsg, seterrorMsg] = useState("");

    const get_block = block_id  => {
        if(block_id === ""){
            seterrorMsg("");
            setblock(null);
            return;
        }
        getBlock(blockID).then ( data => {
            if(data.error){
                seterrorMsg(data.msg);
            } else {
                setblock(data);
            }
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
