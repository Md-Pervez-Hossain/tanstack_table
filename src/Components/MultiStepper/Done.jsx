import React from "react";

const Done = ({ name, email, address }) => {
  return (
    <div>
      <h2>Congratulations! Process Complete</h2>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Address: {address}</p>
    </div>
  );
};

export default Done;
