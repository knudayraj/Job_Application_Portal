import React from "react";
import { Link, Route } from 'react-router-dom'

const FrontEndDeveloper = (props) => {

    return (
        <div>
            <Link to="/allApplication"><input type="button" value="All" /></Link>
            <Link to="/frontEndDeveloper"><input type="button" value="Front-EndDeveloper" /></Link>
            <Link to="/nodejsDeveloper"><input type="button" value="Node.js Developer" /></Link>
            <Link to="/meanStackDeveloper"><input type="button" value="MEAN Stack Developer" /></Link>
            <Link to="/fullStackDeveloper"><input type="button" value="Full Stack Developer" /></Link>
            <h1>FrontEndDeveloper</h1>
        </div>
    )
}

export default FrontEndDeveloper