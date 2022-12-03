import React from 'react';
import 'bootstrap/dist/js/bootstrap.js';
import Data from '../Data';
import NoDataImage from "../assets/nodata.webp";
import { useNavigate } from 'react-router-dom';
import UserImage from "../assets/user.png";
import {toast} from "react-toastify";

const ContactsList = ({data, setData, editContactData, setEditContactData,setEditID}) => {

    // const [data, setData] = React.useState(Data);

    let navigate = useNavigate();

    const[deleteUserId, setDeleteUserId] = React.useState();

    console.log(deleteUserId);

    const handleDeleteContact = () => {
        const newData = data.filter((value, index) => index !== deleteUserId);
        localStorage.setItem("contact-list", JSON.stringify(newData));
        setData(newData);
        toast.success("Contact Is Deleted Succesfully", {theme : "colored"})
    }

    const handleEditContact = (id, value) => {
        console.log(id);
        setEditID(id)
        navigate(`/edit-contact/${id + 1}`);
        setEditContactData(value);
    }

  return (
    <div className="my-2 p-2">
        {data?.length > 0 && data !== null ?
        <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Type</th>
      <th scope="col">Whatsapp</th>
      {/* <th scope="col">Profile</th> */}
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {data.sort((a, b) => a.name.localeCompare(b.name)).map((value, index) => {
        return  <tr>
        <th scope="row">{index + 1}</th>
          <td style={{display : "flex", justifyContent : "center", alignItems : "center", gap : "10px"}}>
          <img style={{height : "40px", width : "40px", borderRadius : "50%"}} src={value.profile === "" ? UserImage : value.profile} alt="profile" />
            <span class="fw-bolder">{value.name === "" ? "No Data" : value.name}</span>
            </td>
          <td className='text-center'>{value.phone === "" ? "No Data" : value.phone}</td>
          <td>{value.type === "" ? "No Data" : value.type}</td>
          <td>{value.whatsapp === true ? "Yes" : "No"}</td>
          {/* <td>
          </td> */}
          <td className="d-flex justify-content-center">
            <button className='btn btn-primary mx-2' onClick={() => handleEditContact(index, value)}>Edit</button>
            <button className='btn btn-danger'data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setDeleteUserId(index)}>Delete</button>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered ">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Confirm Delete</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            Do you really want to delete this record?
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal" onClick={handleDeleteContact}>Delete</button>
          </div>
        </div>
      </div>
    </div>
          </td>
        </tr>
    })}
  </tbody>
</table> : <div style={{display : "flex", justifyContent : "center", alignItems : "center", height : "80vh"}}>
    <img style={{height : "200px"}} src={NoDataImage} alt="no-data" />
    </div>}
    </div>
  )
}

export default ContactsList