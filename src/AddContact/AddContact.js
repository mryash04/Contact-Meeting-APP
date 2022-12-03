import React from "react";
import "./AddContact.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const AddContact = ({ data, setData }) => {
  let navigate = useNavigate();

  const [contactData, setContactData] = React.useState({
    name: "",
    phone: "",
    type: "",
    whatsapp: false,
    profile: "",
  });

  console.log(data);

  const handleClick = (e) => {
    e.preventDefault();
    if (!data.includes(contactData)) {
      data.push(contactData);
      localStorage.setItem("contact-list", JSON.stringify(data));
      setData([...data, contactData]);
      toast.success("New Contact Is Added Succesfully", { theme: "colored" });
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      console.log("Already added");
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Back to list
          </a>
          <div>
            <p>You are in contact addition flow</p>
          </div>
        </div>
      </nav>
      <div className="add-contact">
        <div>
          <h3>New Contact</h3>
          <p>Please fill this form to add new contact</p>
          <hr />

          <form
            className="border p-2"
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <label style={{ display: "flex" }}>
              <b>Name</b>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Name"
              required
              onChange={(e) =>
                setContactData({ ...contactData, name: e.target.value })
              }
            />

            <label style={{ display: "flex" }}>
              <b>Phone</b>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter phone"
              required
              onChange={(e) =>
                setContactData({ ...contactData, phone: e.target.value })
              }
            />

            <label style={{ display: "flex" }}>
              <b>Type</b>
            </label>
            <select
              className="form-select"
              onChange={(e) =>
                setContactData({ ...contactData, type: e.target.value })
              }
            >
              <option value="Personal">Personal</option>
              <option value="Professional">Professional</option>
            </select>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "5px",
              }}
            >
              <input
                className="mx-2 my-2 form-check-input"
                type="checkbox"
                onChange={(e) =>
                  setContactData({ ...contactData, whatsapp: e.target.checked })
                }
              />
              <label className="form-check-label">
                <b>Whatsapp</b>
              </label>
            </div>

            <label style={{ display: "flex" }}>
              <b>Profile Link</b>
            </label>
            <input
              type="file"
              className="form-control"
              placeholder="Enter Profile link"
              onChange={(e) => {
                console.log(e.target.files[0]);
                setContactData({ ...contactData, profile: e.target.value });
              }}
            />

            <button className="btn btn-primary" onClick={handleClick}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
