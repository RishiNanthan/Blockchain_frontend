import React, { useState, Fragment } from 'react';


export default function Question(props) {

    const question = props.question;
    const set_data = props.set_data;

    const [hide, setHide] = useState(false);
    const [fill, setFill] = useState(false);
    const [answer, setAnswer] = useState("");

    const findHashes = () => {

    }
    
    return (
        <div className="question">
            <h3 onClick={() => { setHide(!hide) }}>Question</h3>
            { 
             !hide && 
                <Fragment>
                    <input 
                    type="text" 
                    placeholder="Question" 
                    value={ question.question } 
                    onChange={
                        event => {
                            event.persist();
                            set_data("question", {
                                key: "question",
                                value: event.target.value,
                            });
                        }
                    } /><br />
                    <input 
                    type="text" 
                    placeholder="Question Hash" 
                    value={ question.question_id } 
                    onChange={
                        event => {
                            event.persist();
                            set_data("question", {
                                key: "question_id",
                                value: event.target.value,
                            });
                        }
                    } /><br />
                    <input 
                    type="text" 
                    placeholder="Answer Hash" 
                    value={ question.answer_hash } 
                    onChange={
                        event => {
                            event.persist();
                            set_data("question", {
                                key: "answer_hash",
                                value: event.target.value,
                            });
                        }
                    } /><br />
                    <h3 onClick={() => { setFill(!fill) }} style={{color: "red"}}>Fill question hash and answer hash</h3>
                    {
                        fill && 
                        <Fragment>
                            <input 
                            type="text" 
                            placeholder="Answer" 
                            value={ answer } 
                            onChange={ event => {
                                event.persist();
                                setAnswer(event.target.value);
                            }} />
                            <button onClick={ findHashes }>Find Question Hash, Answer Hash</button>
                        </Fragment>
                    }
                </Fragment>
            }
        </div>
    );
}
