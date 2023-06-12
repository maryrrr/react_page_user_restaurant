import { useNavigate } from "react-router-dom"
import React, { useState } from "react"
import  './userform.styles.scss'

export const UserForm = () => {
    let navigate = useNavigate()
    const [data, setData] = useState({
        name: "",
        email: "",
    })
    const [btnDisabled,setBtnDisabled] = useState(true)
    const [message,setMessage] = useState("")
    
    const initialState = {
        name: "",
        email: "",
    }
    const clearState = () => {
        setData({ ...initialState });
        }
    const handleInputChange = (event) => {
        if(data.name.length + 1 < 3){

            setMessage('Name must be at least 3 characters')
            setBtnDisabled(true)
            } else {
                setMessage(null)
                setBtnDisabled(false)
            }

            setData({ ...data, [event.target.name]: event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`sending data… ${data.name} ${data.email}`);
        //guardar los datos en localstorage
        localStorage.setItem("userData", JSON.stringify(data));
        setTimeout(() => {
            navigate("/HeaderNav");
          }, 300);
          console.log(`sending data… ${data.name} ${data.email}`);
    
        clearState()
        
    }
    return (
        <>
    <div className="contact">User</div>
    <form className="form" onSubmit={handleSubmit}  >
        <input 
        className="form__input"
        type="text" 
        placeholder="name" 
        value={data.name} 
        onChange={handleInputChange} 
        name="name" />
        <input
        className="form__input" 
        type="email" 
        placeholder="email" 
        value={data.email} 
        onChange={handleInputChange} 
        name="email" />
        <button className="form__button" type="submit" disabled={btnDisabled}>Enviar</button>
        <p>{message}</p>
        </form>
        </>
    )
    }

