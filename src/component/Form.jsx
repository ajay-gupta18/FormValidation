import { useState } from "react"
import "./form.css"
 
function Form() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState()
    const [city, setCity] = useState('')
    const handleSubmit=(e)=>{
        e.preventDefault();
        alert(`            1. name :${name}, 
            2. email : ${email}, 
            3. phone : ${phone},
            4. city : ${city}`)


    }

    const handleValidation=(e)=>{
        e.preventDefault()
        setPhone(e.target.value)
        if(phone.length!=="10"){
            alert("enter valid number")
        }

    }
    return (
        <>
            <div className='form-container'>
                <h1>User Form</h1>
                <form  onSubmit={handleSubmit}>
                    <label htmlFor="name">Name :</label> 
                    <input type="text" value={name} id='name' onChange={(e)=>setName(e.target.value)} required/>
                    <br />
                    <label htmlFor="email">Email : </label>
                    <input type="email" value={email} id='email' onChange={(e)=>setEmail(e.target.value)} required/>
                    <br />
                    <label htmlFor="city">City : </label>
                    <input type="text" value={city} id='city' onChange={(e)=>setCity(e.target.value)} required/>
                    <br />
                    <label htmlFor="phone">Phone : </label>
                    <input type="number" value={phone} id='phone' onChange={handleValidation} required/>
                    <br />
                    <button>Submit</button>
                </form>
            </div>
        </>
    )
}

export default Form
