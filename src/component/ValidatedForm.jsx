import React, { useState, useEffect } from 'react';
import './utils/ValidatedForm.css';

function ValidatedForm({ setParentData, setShowTable, parentData, editIndex, setEditIndex }) {
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        city: ""
    });

    const [error, setError] = useState({});

    useEffect(() => {
        if (editIndex !== null) {
            setData(parentData[editIndex]);
        }
    }, [editIndex, parentData]);

    const validate = () => {
        const dataKey = ["name", "email", "city", "phone"];
        const newError = {};
        dataKey.forEach(item => {
            if (!data[item]) {
                newError[item] = `${item} is required`;
            }
        });
        return newError;
    };

    const resetForm = () => {
        setData({
            name: "",
            email: "",
            phone: "",
            city: ""
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formError = validate();
        if (Object.keys(formError).length > 0) {
            setError(formError);
        } else {
            if (editIndex !== null) {
                setParentData(prevData => {
                    const newData = [...prevData];
                    newData[editIndex] = data;
                    return newData;
                });
                setEditIndex(null);
                resetForm()

            } else {
                setParentData(prevData => ([...prevData, data]));
                setShowTable(true);
                resetForm()
            }
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({ ...prevData, [name]: value.trim() }));
        setError(prevError => ({ ...prevError, [name]: "" }));
    };

    return (
        <>
            <div className='form-container'>
                <h1>User Form</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        value={data.name}
                        name='name'
                        id='name'
                        onChange={handleChange}
                    />
                    {error.name && <p className="error-message">{error.name}</p>}

                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        value={data.email}
                        name='email'
                        id='email'
                        onChange={handleChange}
                    />
                    {error.email && <p className="error-message">{error.email}</p>}

                    <label htmlFor="city">City:</label>
                    <input
                        type="text"
                        value={data.city}
                        name='city'
                        id='city'
                        onChange={handleChange}
                    />
                    {error.city && <p className="error-message">{error.city}</p>}

                    <label htmlFor="phone">Phone:</label>
                    <input
                        type="tel"
                        minLength={10}
                        maxLength={10}
                        value={data.phone}
                        name='phone'
                        id='phone'
                        onChange={handleChange}
                    />
                    {error.phone && <p className="error-message">{error.phone}</p>}

                    <button type="submit">{editIndex !== null ? "Update" : "Submit"}</button>
                </form>
            </div>

        </>
    );
}

export default ValidatedForm;
