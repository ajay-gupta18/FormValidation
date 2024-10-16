import React, { useState } from 'react'

function ValidatedForm() {
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        city: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        if (data.phone.length !== 10) {
            alert("enter valid phone number")
            return
        } else {
            alert(`            1. name :${data.name}, 
            2. email : ${data.email}, 
            3. phone : ${data.phone},
            4. city : ${data.city}`)
        }

    }
    
    return (
        <>
            <div className='form-container'>
                <h1>User Form</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name :</label>
                    <input type="text" value={data.name} id='name' onChange={(e) => setData({ ...data, name: e.target.value })} required />
                    <br />
                    <label htmlFor="email">Email : </label>
                    <input type="email" value={data.email} id='email' onChange={(e) => setData({ ...data, email: e.target.value })} required />
                    <br />
                    <label htmlFor="city">City : </label>
                    <input type="text" value={data.city} id='city' onChange={(e) => setData({ ...data, city: e.target.value })} required />
                    <br />
                    <label htmlFor="phone">Phone : </label>
                    <input type="number" value={data.phone} id='phone' onChange={(e) => setData({ ...data, phone: e.target.value })} required />
                    <br />
                    <button>Submit</button>
                </form>
            </div>
        </>
    )

}

export default ValidatedForm
