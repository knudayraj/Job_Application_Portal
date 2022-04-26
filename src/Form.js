import React,{ useState, useEffect } from "react";
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import background from './undraw_designer_life_re_6ywf.svg'

const Form = (props) => {
    const [name, setName] = useState([])
    const [email, setEmail] = useState([])
    const [phone, setPhone] = useState('')
    const [jobTitle, setJobTitle] = useState('')
    const [experience, setExperience] = useState('')
    const [skills, setSkills] = useState('')
    const [formDetail, setFormDetail] = useState([])

    const jobs = ['Front End Developer', 'Node.js Developer', 'MERN Stack Developer', 'FULL Stack Developer']

    const handlename = (e) => {
        // console.log(e.target.value)
        setName(e.target.value)
    }

    const handleEmailChange = (e) => {
        // console.log(e.target.value) 
        setEmail(e.target.value)
    }

    const handlephoneChange = (e) => {
        // console.log(e.target.value) 
        setPhone(e.target.value)
    }

    const handleSelect = (e) => {
        // console.log(e.target.value)
        setJobTitle(e.target.value)
    }

    const handleExperienceChange = (e) => {
        // console.log(e.target.value)
        setExperience(e.target.value)
    }

    const handleTextAreChange = (e) => {
        // console.log(e.target.value)
        setSkills(e.target.value)
    }



    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {name, email, phone, jobTitle, experience, skills}
        console.log(formData)
        axios.post('https://dct-application-form.herokuapp.com/users/application-form/', formData)
            .then(response => {
                console.log(response)
            })
            alert('Application submitted Sucessfully')
            setName('')
            setEmail('')
            setPhone('')
            setJobTitle('')
            setExperience('')
            setSkills('')
    }

    

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <img src={background} />
                </div>
            <div className="col">
                <form style={{ backgroundColor : "gray" }} onSubmit={handleSubmit} className="form-control" >

            <div className="form-floating mb-3">
                <input type="text" className="form-control" id="floatingInput" placeholder="Full name" value={name} onChange={handlename} required />
                <label for="floatingInput">Full name</label>
            </div>
                
            <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Email address" value={email} onChange={handleEmailChange} required/> <br />
                    <label for="floatingInput"> Email address </label>
                </div>
                
                <div className="form-floating mb-3">
                    <input type="number" className="form-control" id="floatingInput" placeholder="Contact Number" value={phone} onChange={handlephoneChange} required/> <br />
                    <label for="floatingInput">Contact Number</label>
                </div>
                
                <div className="form-floating mb-3">
                    <select className="form-control" value={jobTitle} onChange={handleSelect} required>
                    <option> --- select --- </option>
                    { jobs.map((ele,i) => {
                        return <option value={ele} key={i}> { ele } </option>
                    })}
                </select> <br />
                    <label><b>Appling for job</b></label>
                </div>
                
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="experience(2 years, 1 months)"  value={experience} onChange={handleExperienceChange} required/> <br />
                    <label>experience(2 years, 1 months)</label>
                </div>

                <div className="form-floating mb-3">
                    <textarea className="form-control" id="floatingInput" value={skills} placeholder="Technical Skills" onChange={handleTextAreChange} required/> <br />
                    <label>Technical Skills</label>
                </div>
                <input className="btn btn-success" type="submit" value="Send Application" />
            </form>
            </div>
            </div>
        </div>
    )
}

export default Form
