import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar/Navbar";
import ContactsList from "./ContactsList/ContactsList";
import Home from "./Pages/Home/Home";
import AddContact from "./AddContact/AddContact";
import EditContact from "./EditContact/EditContact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Data from "./Data";
import { ToastContainer, toast } from "react-toastify";

function App() {
  const [data, setData] = React.useState([]);

  const [editContactData, setEditContactData] = React.useState();
  const [editID, setEditID] = React.useState();

  //Get the data from localstorage at initial load

  React.useEffect(() => {
    const myData = localStorage.getItem("contact-list");
    const newData = JSON.parse(myData);
    if (newData !== null) {
      setData(newData);
    } else {
      setData([]);
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                data={data}
                setEditID={setEditID}
                setData={setData}
                editContactData={editContactData}
                setEditContactData={setEditContactData}
              />
            }
          />
          <Route
            path="/add-contact"
            element={<AddContact data={data} />}
          />
          <Route
            path="/edit-contact/:id"
            element={
              <EditContact
                editID={editID}
                editContactData={editContactData}
                setEditContactData={setEditContactData}
                data={data}
                setData={setData}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
