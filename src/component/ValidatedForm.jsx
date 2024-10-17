import React, { useState } from 'react'
import DisplyData from './DisplyData';

function ValidatedForm() {
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        city: ""
    })
    const [tableData, setTableData] = useState([])
    const [error, setError] = useState({})

    const validate = () => {
        const dataKey = ["name", "email", "city", "phone"];
        const newError = {};
        dataKey.forEach(item => {
            if (!data[item]) {
                newError[item] = `${item} is required`
            }
        })
        return newError
    }
    // if (!data.name) newError.name = "name is required"
    // if (!data.email) newError.email = "email is required"
    // if (!data.city) newError.city = "city is required"
    // if (!data.phone) {
    //     newError.phone = "phone is required"
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formError = validate()
        if (Object.keys(formError).length > 0) {
            setError(formError)
        } else {
            console.log(data)
            // let a = alert(`1. name :${data.name},\n 
            //     2. email : ${data.email},\n 
            //     3. phone : ${data.phone},\n
            //     4. city : ${data.city}`)
            setTableData(prevData => ([...prevData, data]))
        }
        setData({
            name: "",
            email: "",
            phone: "",
            city: ""
        })

    }
    const handleChange = (e) => {
        const { name, value } = e.target
        setData(prevData => ({ ...prevData, [name]: value.trim() }))
        setError(prevError => ({ ...prevError, [name]: "" }))
    }


    return (
        <>
            <div className="body-container">
                <div className='form-container'>
                    <h1>User Form</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">Name :</label>
                        <input
                            type="text"
                            value={data.name}
                            name='name'
                            id='name'
                            onChange={handleChange} />
                        <p style={{ color: "red" }}>{error.name && error.name}</p>
                        <br />
                        <label htmlFor="email">Email : </label>
                        <input
                            type="email"
                            value={data.email}
                            name='email'
                            id='email'
                            onChange={handleChange} />
                        <p style={{ color: "red" }}>{error.email && error.email}</p>
                        <br />
                        <label htmlFor="city">City : </label>
                        <input
                            type="text"
                            value={data.city}
                            name='city'
                            id='city'
                            onChange={handleChange} />
                        <p style={{ color: "red" }}>{error.city && error.city}</p>
                        <br />
                        <label htmlFor="phone">Phone : </label>
                        <input
                            type="tel"
                            minLength={10}
                            maxLength={10}
                            value={data.phone}
                            name='phone'
                            id='phone'
                            onChange={handleChange} />
                        <p style={{ color: "red" }}>{error.phone && error.phone}</p>
                        <br />
                        <button>Submit</button>
                    </form>
                </div>
                <div>
                    <DisplyData tableData={tableData} />
                </div>
            </div>
        </>
    )

}

export default ValidatedForm
