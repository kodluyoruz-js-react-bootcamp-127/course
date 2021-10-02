import React from "react";

import "./Input.css";

// <Input type="xxx" onChnage={()=>{}} />
// inputunPropsları = {type:'xxx', onChange: ()=>{}}
export default function Input({ type, name, onChange, placeholder, value }) {
  return (
    <input
      className="input"
      type={type}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    />
  );
}
