import { useNavigate } from "react-router-dom"
import React, { useState } from "react"
import './FormReserve.styles.scss'

export const FormReserve = () => {
    let navigate = useNavigate()
    const [data, setData] = useState({
        name: "",
        date: "",
    })
    const [btnDisabled,setBtnDisabled] = useState(true)
    const [message,setMessage] = useState("")
    
    const initialState = {
        name: "",
        date: "",
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
        console.log(`sending data… ${data.name} ${data.date}`);
        //guardar los datos en localstorage
        localStorage.setItem("userData", JSON.stringify(data));
        setTimeout(() => {
            navigate("/Home");
          }, 3000);
          console.log(`sending data… ${data.name} ${data.date}`);
    
        clearState()
        
    }
    return (
        
        <div className="contact">
            <h3>Reserve</h3>
        
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
        type="date" 
        placeholder="date" 
        value={data.date} 
        onChange={handleInputChange} 
        name="date" />
        <button className="form__button" type="submit" disabled={btnDisabled}>Enviar</button>
        <p>{message}</p>
        </form>
        </div>

    )
}
