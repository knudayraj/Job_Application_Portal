import React, { useState, useEffect } from "react";
import Welcome from "./Welcome";
import { Link, Route } from 'react-router-dom'
import axios from 'axios'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import Swal from 'sweetalert2'

const Admin = (props) => {
    const [all, setAll] = useState([])
    const [datas, setDatas] = useState([])
    const [message, setMessage] = useState('')


    useEffect(() => {
        axios.get('https://dct-application-form.herokuapp.com/users/application-forms')
            .then(response => {
                // console.log(response)
                setAll(response.data)
            })
            .catch(err => {
                console.log(err.message)
            })
    })


    // console.log(all)

    const handleChange = (e) => {
        // const input = e.target.value
        // axios.get('https://dct-application-form.herokuapp.com/users/application-forms')
        //     .then(response => {
        //         // console.log(response)
        //         // setAll(response.data)
        //         const data = response.data
        //         const result = data.filter(e => 
        //             e.jobTitle == input)
        //             setDatas(result)
        //             setAll(result)
        //     })
        console.log(e.target.value)
            let result = all.filter(view => {
                if(view.jobTitle === e.target.value){
                    return view
                }
            })
            console.log(result)
            setDatas(result)
    }

    const handleView = (_id) => {
        // console.log(_id)
        let result = all.filter(view => {
            if(view._id == _id){
                Swal.fire(`${view.name}'s Profile
                           Contact number - ${view.phone}
                           Email - ${view.email} 
                           Skills - ${view.skills}
                           Experience - ${view.experience}`
                )
            }
        })
        return result
        console.log(result)
    }

    const handleRecject = (_id) => {
        console.log(_id)
        const result = {"status" : "rejected"}
        axios.put(`https://dct-application-form.herokuapp.com/users/application-form/update/${_id}`, result)
            .then(response => {
                console.log(response.data)
                const info = response.data
            })
            const update = all.map(e => {
                if(e._id == _id){
                    return {...e, status : "rejected"}
                } else {
                    return {...e}
                }
            })
            setAll(update)
    }

    const handleShortlist = (_id) => {
        console.log(_id)
        const result = {"status" : "shortlisted"}
        axios.put(`https://dct-application-form.herokuapp.com/users/application-form/update/${_id}`, result)
            .then(response => {
                console.log(response.data)
                const info = response.data
            })
            const update = all.map(e => {
                if(e._id == _id){
                    return {...e, status : "shortlisted"}
                } else {
                    return {...e}
                }
            })
            setAll(update)
    }


    return (
        <div>
            <input className="btn btn-warning" type="button" value="Front-End Developer" onClick={handleChange} />
            <input className="btn btn-warning" type="button" value="Node.js Developer" onClick={handleChange} />
            <input className="btn btn-warning" type="button" value="MEAN Stack Developer" onClick={handleChange} />
            <input className="btn btn-warning" type="button" value="FULL Stack Developer" onClick={handleChange} />

            {datas.length>0 && <div>
            <table className="table table-dark table-hover mt-3">
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
                    { datas.map(e => {
                        return (
                            <tr key={e._id}>
                                <td> { e.name } </td>
                                <td> { e.skills } </td>
                                <td> { e.experience} </td>
                                <td> { e.createdAt } </td>
                                <td> <input className="btn btn-info" type="button" value="view Details" onClick={() => {handleView(e._id)}} /> </td>
                                <td>    { e.status == "applied" && 
                                                <>
                                                <input className="btn btn-success" type="button" value="shortlist" onClick={() => {handleShortlist(e._id)}} />
                                                <input className="btn btn-danger" type="button" value="reject" onClick={() => {handleRecject(e._id)}} />       
                                                </>
                                        }
                                        {e.status === 'shortlisted' && <input className="btn btn-danger" type="button" value="reject" onClick={() => {handleRecject(e._id)}} /> }
                                        {e.status === 'rejected' && <input className="btn btn-success" type="button" value="shortlist" onClick={() => {handleShortlist(e._id)}} />}
                                    </td>
                            </tr>
                        )
                    }) }
                </tbody>
            </table>
            </div>}
        </div>
    )
}

export default Admin