import React from "react";
import "bootstrap/dist/js/bootstrap.js";
import Data from "../Data";
import NoDataImage from "../assets/nodata.webp";
import { useNavigate } from "react-router-dom";
import UserImage from "../assets/user.png";
import { toast } from "react-toastify";
import NoDataImageResult from "../assets/nodataimage.jpg";

const ContactsList = ({ data, setData, setEditContactData, setEditID }) => {
  let navigate = useNavigate();

  const [deleteUserId, setDeleteUserId] = React.useState();

  //Function to delete existing contact

  const handleDeleteContact = () => {
    const newData = data.filter((value, index) => index !== deleteUserId);
    localStorage.setItem("contact-list", JSON.stringify(newData));
    setData(newData);
    toast.success("Contact Is Deleted Succesfully", { theme: "colored" });
  };

  // Function to set id in edit state

  const handleEditContact = (id, value) => {
    console.log(id);
    setEditID(id);
    navigate(`/edit-contact/${id + 1}`);
    setEditContactData(value);
  };

  return (
    <div className="my-2 p-2">
      {data?.length > 0 && data !== null ? (
        <div>
          <div className="contact-list-header-details">
            <button type="button" disabled className="btn btn-secondary">
              Total Contacts ({data.length})
            </button>
          </div>
          <table class="table table-bordered my-1">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col" className="text-center">
                  Name
                </th>
                <th scope="col" className="text-center">
                  Phone
                </th>
                <th scope="col" className="text-center">
                  Type
                </th>
                <th scope="col" className="text-center">
                  Whatsapp
                </th>
                {/* <th scope="col">Profile</th> */}
                <th scope="col" className="text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {data
                .sort((a, b) => a.name.localeCompare(b.name))
                .map((value, index) => {
                  return (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>
                        <div className="text-center">
                          <img
                            style={{
                              height: "30px",
                              maxWidth: "30px",
                              borderRadius: "50%",
                            }}
                            src={
                              value.profile === "" ? UserImage : value.profile
                            }
                            alt="profile"
                          />
                          <span class="fw-bolder mx-3">
                            {value.name === "" ? "No Data" : value.name}
                          </span>
                        </div>
                      </td>
                      <td className="text-center">
                        {value.phone === "" ? "No Data" : value.phone}
                      </td>
                      <td className="text-center">
                        {value.type === "" ? "No Data" : value.type}
                      </td>
                      <td className="text-center">
                        {value.whatsapp === true ? "Yes" : "No"}
                      </td>
                      {/* <td>
          </td> */}
                      <td className="d-flex justify-content-center">
                        <button
                          className="btn btn-primary mx-2"
                          onClick={() => handleEditContact(index, value)}
                        >
                          <i className="fa fa-edit"></i>
                        </button>
                        <button
                          className="btn btn-danger"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                          onClick={() => setDeleteUserId(index)}
                        >
                          <i className="fa fa-trash-o"></i>
                        </button>
                        <div
                          class="modal fade"
                          id="exampleModal"
                          tabIndex="-1"
                          aria-labelledby="exampleModalLabel"
                          aria-hidden="true"
                        >
                          <div class="modal-dialog modal-dialog-centered ">
                            <div class="modal-content">
                              <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">
                                  Confirm Delete
                                </h5>
                                <button
                                  type="button"
                                  class="btn-close"
                                  data-bs-dismiss="modal"
                                  aria-label="Close"
                                ></button>
                              </div>
                              <div class="modal-body">
                                Do you really want to delete this record?
                              </div>
                              <div class="modal-footer">
                                <button
                                  type="button"
                                  class="btn btn-secondary"
                                  data-bs-dismiss="modal"
                                >
                                  Close
                                </button>
                                <button
                                  type="button"
                                  class="btn btn-danger"
                                  data-bs-dismiss="modal"
                                  onClick={handleDeleteContact}
                                >
                                  Delete
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>{" "}
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
          }}
        >
          <img
            style={{ height: "200px" }}
            src={NoDataImageResult}
            alt="no-data"
          />
          <h2 style={{ color: "#ff4f5a" }}>No Data Found</h2>
        </div>
      )}
    </div>
  );
};

export default ContactsList;
