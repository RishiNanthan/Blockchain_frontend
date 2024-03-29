import React, { useState } from 'react';


function Input(props){
    const data = props.data;
    const index = props.index;

    const [ show, set_show ] = useState(false);

    return (
        <div>
            <br />
            <h3 style={{padding: "0px", margin: "0px"}} onClick={ event => set_show(!show) }>{ `Input ${index}` }</h3>
            {
                show &&
                <div  style={{paddingLeft: "30px"}}>
                    <p>Previous Transaction: { data.previous_transaction }</p>
                    <p>Index: { data.index } </p>
                    <p>Value: { data.value } </p>
                    <p>Script: { data.script } </p>
                    <br />
                </div>
            }
        </div>
    );
}


function Output(props){
    const index = props.index;
    const data = props.data;

    const [ show, set_show ] = useState(false);

    return (
        <div>
            <br />
            <h3 style={{padding: "0px", margin: "0px"}} onClick={ event => set_show(!show) }>{ `Output ${index}` }</h3>
            {
                show && 
                <div  style={{paddingLeft: "30px"}}>
                    <p>Value: { data.value } </p>
                    <p>Script: { data.script }</p>
                </div>
            }
            <br />
        </div>
    );
}


function Transaction(props){
    const data = props.data;
    const [ show, set_show ] = useState({inputs: false, outputs: false, all: false});

    return (
        <div>
            <br />
            <h3 style={{padding: "0px", margin: "0px"}} onClick={ event => set_show({...show, all: !show.all }) }>{ data.transaction_id }</h3>  
            { show.all &&           
                <div style={{paddingLeft: "30px"}}>
                    <p>Description : { data.description }</p>
                    <p>Timestamp: { data.timestamp } </p>
                    <p>Public Key: { data.public_key } </p>
                    <p>Signature: { data.signature } </p>
                    <p>Timestamp: { data.timestamp} </p>
                    <h3 style={{padding: "0px", margin: "0px"}} onClick={ event => set_show({...show, inputs: !show.inputs }) }>Inputs</h3>
                    <div style={{paddingLeft: "30px"}}>
                        {
                            show.inputs && 
                            data.inputs.map( (val, i) => {
                                return <Input data={val} index={i} key={val + i} />
                            })
                        }
                    </div>
                    <br />
                    <h3 style={{padding: "0px", margin: "0px"}} onClick={ event => set_show({ ...show, outputs: !show.outputs }) }>Outputs</h3>
                    <div style={{paddingLeft: "30px"}}>
                        {
                            show.outputs && 
                            data.outputs.map( (val, i) => {
                                return <Output data={val} index={i} key={val + i} />
                            })
                        }
                    </div>
                    <br />
                </div>
            }
            <hr />
        </div>
    );
}


export default Transaction;
