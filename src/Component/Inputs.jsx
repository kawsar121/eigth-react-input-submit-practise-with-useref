import { useState } from "react";

const Inputs = () => {
    const [name,SetName] = useState();
    const [err, setErr] = useState();
    const [paasword, setPassword] = useState()
    const nameInput = e =>{
        console.log(e.target.value);
        SetName(e.target.value)
    }
    const handlePas = e =>{
        setPassword(e.target.value)
    }
    const onSubmit = e =>{
        e.preventDefault();
        if(paasword.length <6){
            setErr('password plese longer')
        }
        else{
            setErr('');
            console.log(name,paasword)
        }
        
    }
    return (
        <div>
            <h1>Input</h1>
            <form onSubmit={onSubmit} >
                <label htmlFor="">Name</label>
                <input onChange={nameInput}  type="text" name="name" id="" /> <br />
                <label htmlFor="">Email</label>
                <input type="email" name="email" id="" /> <br />
                <input onChange={handlePas} type="password" name="password" id="" />
                <button>Submit</button>
                {
                    err && <p>{err}</p>
                }
            </form>
        </div>
    );
};

export default Inputs;