import React from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'
import Form from './Form'
import Admin from './Admin'
import AdminDashContainer from './AdminDashContainer'
import AllApplication from "./AllApplication";
import FrontEndDeveloper from "./FrontEndDeveloper";
import NodeJsDeveloper from './NodeJsDeveloper';
import MeanStackDeveloper from './MeanStackDeveloper';
import FullStackDeveloper from './FullStackDeveloper';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'



const App = (props) => {

  return (
    <div>
      <nav className='navbar navbar-dark bg-dark row' >
        <div className='container-fluid'>
        <a className="navbar-brand col" href="/" ></a>
          <a className="navbar-brand col" href="/" >Application form</a>
            <a className="navbar-brand col" href="/admin">Admin Dashboard</a>
        </div>
      </nav>
        {/* <Link to="/">Job application</Link> */}
            {/* <Link to="/">Job application</Link> */}
            
            {/* <Link to="/admin"><input className="btn btn-primary" type="button" value="Admin Dashboard" /></Link> */}


          <h2 style={{ color:'white' , marginTop:'3%'}}></h2>


          <Route path="/" exact component={Form} />
          <Route path="/admin" component={Admin} />
          <Route path="/allApplication" component={AllApplication} />
          <Route path="/frontEndDeveloper" component={FrontEndDeveloper} />
          <Route path="/nodejsDeveloper" component={NodeJsDeveloper} />
          <Route path="/meanStackDeveloper" component={MeanStackDeveloper} />
          <Route path="/fullStackDeveloper" component={FullStackDeveloper} />

    </div>
  )
}

export default App