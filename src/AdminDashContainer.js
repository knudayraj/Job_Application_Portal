import React, { useState, useEffect } from "react";
import Welcome from "./Welcome";
import { Link, Route } from 'react-router-dom'
import AllApplication from "./AllApplication";
import FrontEndDeveloper from "./FrontEndDeveloper";
import axios from 'axios'

const AdminDashContainer = (props) => {
    const [all, setAll] = useState([])


    return (
        <div>
            {/* <input type="button" value="All" onClick={handleChangeAll} /> */}
            <Link to="/allApplication"><input type="button" value="All" /></Link>
            <Link to="/frontEndDeveloper"><input type="button" value="Front-EndDeveloper" /></Link>
            <Link to="/nodejsDeveloper"><input type="button" value="Node.js Developer" /></Link>
            <Link to="/meanStackDeveloper"><input type="button" value="MEAN Stack Developer" /></Link>
            <Link to="/fullStackDeveloper"><input type="button" value="Full Stack Developer" /></Link>

            {/* <input type="button" value="all" onClick={handleChangeAll} /> */}
        </div>
    )
}

export default AdminDashContainer