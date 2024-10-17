import React from 'react'

function DisplyData({ tableData }) {
    // let { name, email, phone, city } = tableData
    console.log(tableData)
    return (
        <div>
            <table>
                <tr>
                    <th>Name </th>
                    <th>Email </th>
                    <th>City </th>
                    <th>Phone </th>
                </tr>
                {tableData.map((item, index)=>{
                    return (
                    <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.city}</td>
                    <td>{item.phone}</td>
                </tr>)})}

            </table>
        </div>
    )
}

export default DisplyData
