import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const EditContact = ({
  data,
  setData,
  editContactData,
  setEditContactData,
  editID,
}) => {
  let navigate = useNavigate();

  const imageRef = React.useRef(null);

  // Function for upload the image

  function useDisplayImage() {
    const [result, setResult] = React.useState("");

    function uploader(e) {
      const imageFile = e.target.files[0];

      const reader = new FileReader();
      reader.addEventListener("load", (e) => {
        setResult(e.target.result);
        setEditContactData({ ...editContactData, profile: e.target.result });
      });

      console.log(result);

      reader.readAsDataURL(imageFile);
    }

    return { result, uploader };
  }

  const { result, uploader } = useDisplayImage();

  // Function for edit the details

  const handleEdit = (e) => {
    e.preventDefault();
    data[editID] = editContactData;
    // console.log(data, "dgbdshbd");
    setData(data);
    localStorage.setItem("contact-list", JSON.stringify(data));
    toast.success("Contact Details Edit Sucesfully", { theme: "colored" });
    setTimeout(() => {
      navigate("/");
    }, 2000);
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
            <p>You are in contact updation flow</p>
          </div>
        </div>
      </nav>
      <div className="add-contact">
        <div className="container text-center">
          <h3>Edit Contact</h3>
          <p>Please fill this form to edit contact</p>
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
              value={editContactData.name}
              onChange={(e) => {
                setEditContactData({
                  ...editContactData,
                  name: e.target.value,
                });
              }}
            />

            <label style={{ display: "flex" }}>
              <b>Phone</b>
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter phone"
              value={editContactData.phone}
              onChange={(e) =>
                setEditContactData({
                  ...editContactData,
                  phone: e.target.value,
                })
              }
            />

            <label style={{ display: "flex" }}>
              <b>Type</b>
            </label>
            <select
              className="form-select"
              onChange={(e) =>
                setEditContactData({ ...editContactData, type: e.target.value })
              }
              value={editContactData.type}
            >
              <option value="Personal">Personal</option>
              <option value="Office">Office</option>
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
                  setEditContactData({
                    ...editContactData,
                    isWhatsapp: e.target.checked,
                  })
                }
              />
              <label style={{ display: "flex" }}>
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
                uploader(e);
                setEditContactData({ ...editContactData, profile: result });
              }}
            />
            {/* {result && <img src={result} alt="" />} */}

            <button className="btn btn-primary" onClick={handleEdit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditContact;
