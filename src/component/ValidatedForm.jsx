import React, { useState, useEffect } from 'react';
import './utils/ValidatedForm.css';

function ValidatedForm({ setParentData, setShowTable, parentData, editIndex, setEditIndex }) {
    const [data, setData] = useState({
        fname: "",
        lname:"",
        email: "",
        phone: "",
        city: "",
        gender:"",
    });

    const [error, setError] = useState({});

    useEffect(() => {
        if (editIndex !== null) {
            setData(parentData[editIndex]);
        }
    }, [editIndex, parentData]);

    const validate = () => {
        const dataKey = ["fname","lname", "email", "city", "phone","gender"];
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
        console.log(data)
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
        setData(prevData => ({ ...prevData, [gender]: value }));
        setError(prevError => ({ ...prevError, [name]: "" }));
    };

    return (
        <>
            <div className='form-container'>
                <form onSubmit={handleSubmit}>
                    <div className='group-container'>
                        <div className='input-field'>
                            <label htmlFor="fname">First Name:</label>
                            <input
                                type="text"
                                value={data.fname}
                                name='fname'
                                id='fname'
                                onChange={handleChange}
                            />
                            {error.fname && <p className="error-message">{error.fname}</p>}
                        </div>
                        <div className='input-field'>
                            <label htmlFor="lname">Last Name:</label>
                            <input
                                type="text"
                                value={data.lname}
                                name='lname'
                                id='lname'
                                onChange={handleChange}
                            />
                            {error.lname && <p className="error-message">{error.lname}</p>}
                        </div>

                    </div>
                    <div className='group-container'>
                        <div className='input-field'>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                style={{textTransform:'lowercase'}}
                                value={data.email}
                                name='email'
                                id='email'
                                onChange={handleChange}
                            />
                            {error.email && <p className="error-message">{error.email}</p>}
                        </div>
                        <div className='input-field'>

                            <label htmlFor="city">City:</label>
                            <input
                                type="text"
                                value={data.city}
                                name='city'
                                id='city'
                                onChange={handleChange}
                            />
                            {error.city && <p className="error-message">{error.city}</p>}
                        </div>
                    </div>

                    <div className='group-container'>
                        <div className='input-field'>
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
                            {error.phone && <p className="error-message">{error.phone}</p>
                            }
                        </div>
                        <div className='input-field'>
                            <label htmlFor="gender">Gender:</label>
                           <select name="gender" id="gender" value={data.gender} onChange={handleChange}>
                            <option value="">select</option>
                            <option value='male'>Male</option>
                            <option value='female'>Female</option>
                           </select>
                            {error.gender && <p className="error-message">{error.gender}</p>
                            }
                        </div>
                        <button type="submit">{editIndex !== null ? "Update" : "Add"}</button>

                    </div>

                    
                </form>
            </div>
          

        </>
    );
}

export default ValidatedForm;
