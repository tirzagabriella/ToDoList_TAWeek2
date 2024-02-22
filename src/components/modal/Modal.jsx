import React from "react";

export default function Modal(props) {
  return (
    <div className="static"> 
      <div
        className="fixed h-screen w-screen bg-black z-10 top-0 opacity-70">
        </div>
      <div className="grid place-items-center">
        <div className="mx-4 my-4 px-4 py-4 bg-black z-10">
          <input type="text" id="item" value={props.editedValue} onChange={e => props.setEditedValue(e.target.value)}/>
          <button className="btn" onClick={() => props.confirmEdit(props.editedValue)}>Submit</button>
          <button className="btn" onClick={() => {props.setEditedValue(""); props.toggle();}}>Cancel</button>
        </div>  
      </div>
    </div>
  );
}
