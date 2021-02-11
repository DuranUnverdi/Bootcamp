import React, { useState } from "react";
import Input from "./Input";
import image from "./../image.png";

function UserCard() {
  const [userName, setUsername] = useState("");
  return (
    <>
      {" "}
      <div className="container">
        <div className="center_alignment">
          <Input onChange={(value) => setUsername(value)} />
          <div className="card">
            <img className="card-img-top" src={image} alt="avatar" />
            <div className="card-body">
              <h3>{userName}</h3>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default UserCard;
