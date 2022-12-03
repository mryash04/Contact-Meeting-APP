import React from "react";
import Navbar from "../../Navbar/Navbar";
import ContactsList from "../../ContactsList/ContactsList";

const Home = ({ data, setData, setEditContactData, setEditID }) => {
  return (
    <div>
      <Navbar />
      <ContactsList
        data={data}
        setData={setData}
        setEditID={setEditID}
        setEditContactData={setEditContactData}
      />
    </div>
  );
};

export default Home;
