import React, { useState } from 'react'

function ValidatedForm() {
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        city: ""
    })
    const [error, setError] = useState({})

    const validate = () => {
        const newError = {};
        if (!data.name) newError.name = "name is required"
        if (!data.email) newError.email = "email is required"
        if (!data.city) newError.city = "city is required"
        if (!data.phone) {
            newError.phone = "phone is required"
        } else if (data.phone.length !== 10) {
            newError.phone = "enter a valid phone number"
        }
        return newError
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formError = validate()
        if (Object.keys(formError).length > 0) {
            setError(formError)
        } else {
            alert(`1. name :${data.name},\n 
            2. email : ${data.email},\n 
            3. phone : ${data.phone},\n
            4. city : ${data.city}`)
        }

    }
    const handleChange = (e) => {
        const { id, value } = e.target
        setData(prevData => ({ ...prevData, [id]: value }))
        if (id == "email") { setError({ ...error, [id]: " " }) }
        else if (id == "name") { setError({ ...error, [id]: " " }) }
        else if (id == "phone") { setError({ ...error, [id]: " " }) }
        else { setError({ ...error, [id]: " " }) };
    }


    return (
        <>
            <div className='form-container'>
                <h1>User Form</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name :</label>
                    <input
                        type="text"
                        value={data.name}
                        id='name'
                        onChange={handleChange} />
                    <p>{error.name && <span style={{ color: "red" }}>{error.name}</span>}</p>
                    <br />
                    <label htmlFor="email">Email : </label>
                    <input
                        type="email"
                        value={data.email}
                        id='email'
                        onChange={handleChange} />
                    <p>{error.email && <span style={{ color: "red" }}>{error.email}</span>}</p>
                    <br />
                    <label htmlFor="city">City : </label>
                    <input
                        type="text"
                        value={data.city}
                        id='city'
                        onChange={handleChange} />
                    <p>{error.city && <span style={{ color: "red" }}>{error.city}</span>}</p>
                    <br />
                    <label htmlFor="phone">Phone : </label>
                    <input
                        type="number"
                        value={data.phone}
                        id='phone'
                        onChange={handleChange} />
                    <p>{error.phone && <span style={{ color: "red" }}>{error.phone}</span>}</p>
                    <br />
                    <button>Submit</button>
                </form>
            </div>
        </>
    )

}

export default ValidatedForm
