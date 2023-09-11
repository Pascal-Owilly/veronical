import React, { useState } from 'react';
import './Smile.css';
import font from '../fonts/Lobster/Lobster-Regular.ttf'

function Form(props){
    const [name, setName] = useState('');
    function handleSubmit(e){
        e.preventDefault();
        props.addTask(name)
        setName('');
    }
    function handleChange(e){
        setName(e.target.value);
    }
    const lobster = {
        fontFamily:'lobster',
        fontWeight:'0',
      }

    return(
        <>
         <form onSubmit={handleSubmit}>
            <p  className="label-wrapper">
                <label htmlFor="new-todo-input" className="label__lg" tabIndex="-1">
                    Our Bucket List
                </label>
            </p>
                <input
                    type="text"
                    id="new-todo-input"
                    className="input input__lg"
                    name="text"
                    autoComplete="off"
                    value={name}
                    onChange={handleChange}
            />
            <button type="submit" className="btn btn__primary btn__lg"style={{borderRadius:' 0 0 20px 20px', fontSize:'14px'}}>
            add me
</button>
</form>
        </>
    );
}

export default Form;