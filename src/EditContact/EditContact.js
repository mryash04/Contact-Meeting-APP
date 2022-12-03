import React, { useEffect } from "react";
import {toast} from "react-toastify";
import { useNavigate } from "react-router-dom";

const EditContact = ({data, setData, editContactData, setEditContactData, editID}) => {

    let navigate = useNavigate();

    const handleEdit =(e)=>{
        data[editID]=editContactData;
        console.log(data,"dgbdshbd")
        setData(data)
        localStorage.setItem("contact-list", JSON.stringify(data));
        toast.success("Contact Details Edit Sucesfully", {theme : "colored"});
        setTimeout(() => {
            navigate("/");
        }, 2000)
    }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Back to list
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div>
            <p>You are in contact addition flow</p>
          </div>
        </div>
      </nav>
      <div className="add-contact">
      <div className="container">
        <h1>Edit Contact</h1>
        <p>Please fill this form to edit contact</p>
        <hr />

        <form className="border p-2" style={{display : "flex", flexDirection : "column", gap : "10px"}}>

        <label style={{display : "flex"}}><b>Name</b></label>
        <input type="text" className="form-control" placeholder="Enter Name" value={editContactData.name} required onChange={(e) =>{
setEditContactData({...editContactData, name : e.target.value})
console.log(e.target.value)
        } } />

        <label style={{display : "flex"}}><b>Phone</b></label>
        <input type="text" className="form-control" placeholder="Enter phone" required value={editContactData.phone} onChange={(e) => setEditContactData({...editContactData, phone : e.target.value})} />

        <label style={{display : "flex"}}><b>Type</b></label>
        <select className="form-select" onChange={(e) => setEditContactData({...editContactData, type : e.target.value})} value={editContactData.type}>
            <option value="Personal">Personal</option>
            <option value="Professional">Professional</option>
        </select>

        <div style={{display : "flex", alignItems : "center", marginTop : "5px"}}>
        <input className="mx-2 my-2 form-check-input" type="checkbox" onChange={(e) => setEditContactData({...editContactData, isWhatsapp : e.target.checked})} />
        <label style={{display : "flex"}}><b>Whatsapp</b></label>
        </div>

        <label style={{display : "flex"}}><b>Profile Link</b></label>
        <input type="text" className="form-control" placeholder="Enter Profile link" value={editContactData.profile} onChange={(e) => setEditContactData({...editContactData, profile : e.target.value})} />

        </form>
        <button className="btn btn-primary" onClick={()=>handleEdit()}>Submit</button>
      </div>
      </div>
    </div>
  );
};

export default EditContact;
