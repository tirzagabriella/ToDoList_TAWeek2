import React from "react"

export default function AddItemForm(props){
  return (
    <div className="center-container">
      <form className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input type="text" id="item" value={props.newItem} onChange={e => props.setNewItem(e.target.value)} />
        </div>  
        <button className="btn" onClick={props.handleSubmit}>Add</button>
      </form>
    </div>
    
  )
}