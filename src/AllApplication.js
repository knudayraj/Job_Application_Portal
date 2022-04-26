import React, { useState, useEffect } from "react"
import { Link, Route } from 'react-router-dom'
import axios from 'axios'

const AllApplication = (props) => {
    const [all, setAll] = useState([])
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        axios.get('https://dct-application-form.herokuapp.com/users/application-forms')
            .then(response => {
                console.log(response)
                setAll(response.data)
            })
            .catch(err => {
                console.log(err.message)
            })
    })

    const handleView = (_id) => {
        // console.log(_id)
        let result = all.filter(view => {
            if(view._id == _id){
                alert(`${view.phone} ${view.email} ${view.skills} ${view.experience}`) 
            }
        })
        return result
        console.log(result)
    }

    const handleChange = (_id) => {
        console.log(_id)
        const result = all.filter(view => {
            if(view._id == _id && view.status == "shortlisted") {
                console.log({...view} )
            } else {
                console.log({...view, status : "rejected"})
            }
        })
        return result
    }


    return (
        <div>
            <Link to="/allApplication"><input type="button" value="All" /></Link>
            <Link to="/frontEndDeveloper"><input type="button" value="Front-EndDeveloper" /></Link>
            <Link to="/nodejsDeveloper"><input type="button" value="Node.js Developer" /></Link>
            <Link to="/meanStackDeveloper"><input type="button" value="MEAN Stack Developer" /></Link>
            <Link to="/fullStackDeveloper"><input type="button" value="Full Stack Developer" /></Link>
            <h1>Welcome to all Jobs</h1>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Technical Skills</td>
                        <td>Experience</td>
                        <td>Applied Date</td>
                        <td>View Details</td>
                        <td>Update Application status</td>
                    </tr>
                </thead>
                <tbody>
                    { all.map(e => {
                        return (
                            <tr key={e._id}> 
                                <td> { e.name } </td>
                                <td> { e.skills } </td>
                                <td> { e.experience} </td>
                                <td> { e.createdAt } </td>
                                <td> <input type="button" value="view Details" onClick={() => {handleView(e._id)}} /> </td>
                                <td> { e.status == 'rejected' ? 
                                    <input type="button" value="reject" onClick={() => {handleChange(e._id)}} />
                                     : 
                                    <>
                                    <input type="button" value="shortlist" onClick={() => {handleChange(e._id)}} /> 
                                    <input type="button" value="reject" onClick={() => {handleChange(e._id)}} /> 
                                    </>
                                    } 
                                    </td>
                            </tr>
                        )
                    }) }
                </tbody>
            </table>
        </div>
    )
}

export  default AllApplication