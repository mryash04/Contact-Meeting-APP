import React from "react";
import "./AddContact.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import UserImage from "../assets/user.png";

const AddContact = ({ data }) => {
  let navigate = useNavigate();
  const imageRef = React.useRef(null);

  // Function for upload image

  function useDisplayImage() {
    const [result, setResult] = React.useState("");

    function uploader(e) {
      const imageFile = e.target.files[0];

      const reader = new FileReader();
      reader.addEventListener("load", (e) => {
        setResult(e.target.result);
        setContactData({ ...contactData, profile: e.target.result });
      });

      reader.readAsDataURL(imageFile);
    }

    return { result, uploader };
  }

  const { result, uploader } = useDisplayImage();

  const [contactData, setContactData] = React.useState({
    name: "",
    phone: "",
    type: "",
    whatsapp: false,
    profile: "",
  });

  // Function to add a new contact

  const handleClick = (e) => {
    e.preventDefault();
    if (contactData.name.trim() === "") {
      toast.error("Please Enter Name", {
        theme: "colored",
        autoClose: 1000,
        position: "top-center",
      });
    } else if (!data.includes(contactData)) {
      data.push(contactData);
      localStorage.setItem("contact-list", JSON.stringify(data));
      // setData([...data, contactData]);
      toast.success("New Contact Is Added Succesfully", { theme: "colored" });
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } else {
      toast.error("Already Exists", {
        theme: "colored",
        autoClose: 1000,
        position: "top-center",
      });
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <button
              type="button"
              class="btn btn-primary"
              onClick={() => navigate("/")}
            >
              <i class="fa fa-arrow-left"></i>
            </button>
            <a className="navbar-brand" href="#">
              Back to list
            </a>
          </div>
          <div>
            <p>You are in contact addition flow</p>
          </div>
        </div>
      </nav>
      <div className="add-contact">
        <div className="text-center">
          <h3>New Contact</h3>
          <p>Please fill this form to add new contact</p>
          <hr />

          <form
            className="border rounded p-2"
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <div>
              <label style={{ display: "flex" }}>
                <b>Name</b>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Name"
                defaultValue=""
                required
                onChange={(e) =>
                  setContactData({ ...contactData, name: e.target.value })
                }
                value={contactData.name}
              />
            </div>

            <div>
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
            </div>

            <div>
              <label style={{ display: "flex" }}>
                <b>Type</b>
              </label>
              <select
                className="form-select"
                onChange={(e) =>
                  setContactData({ ...contactData, type: e.target.value })
                }
                value={contactData.type}
              >
                <option value="Personal">Personal</option>
                <option value="Office">Office</option>
              </select>
            </div>

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

            <div>
              <label style={{ display: "flex" }}>
                <b>Profile Link</b>
              </label>
              <input
                type="file"
                className="form-control"
                placeholder="Enter Profile link"
                onChange={(e) => {
                  console.log(e.target.files[0]);
                  uploader(e);
                  // setContactData({ ...contactData, profile: result });
                }}
              />
            </div>
            {/* {result && <img src={result} alt="" />} */}

            <button
              type="button"
              className="btn btn-primary"
              onClick={handleClick}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddContact;
