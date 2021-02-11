import React from "react";

function Input(props) {
  return (
    <>
      <div className="container">
        <input
          type="text"
          onChange={(e) => props.onChange(e.target.value)}
          placeholder="Kullanıcı Adı "
          className="iinput"
        />
      </div>
    </>
  );
}
export default Input;
