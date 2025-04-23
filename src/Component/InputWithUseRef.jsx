import React, { useRef } from 'react';

const InputWithUseRef = () => {
    const nameRef = useRef()
    const onSubmit = e =>{
        e.preventDefault();
        console.log(nameRef.current.value)
    }
    return (
        <div>
            <h1>Using with UseRef</h1>
            <form onSubmit={onSubmit} >
                <label htmlFor="">Name</label>
                <input ref={nameRef} type="text" name="name" id="" /> <br />
                <label htmlFor="">Email</label>
                <input type="email" name="email" id="" /> <br />
                <label htmlFor="">Password</label>
                <input type="password" name="password" id="" /> <br />
                <button>Submit</button>
            </form>
        </div>
    );
};

export default InputWithUseRef;