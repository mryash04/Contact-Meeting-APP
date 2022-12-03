import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Contact List</a>
    {/* <div>
        <input type="text" className='form-control' placeholder="Enter name" />
    </div> */}
    <div>
        <Link to="/add-contact">
        <button className="btn btn-primary">Add New Contact</button>
        </Link>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar