import { useState } from "react";
import "./style.css";

export default function App() {
  const [newItem, setNewItem] = useState("");

  return (
    <>
      <form className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label>
          <input
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            type="text"
            id="item"
          />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        <li className="list-item">
          <label htmlFor="checkbox-1">
            <input type="checkbox" name="checkbox" id="checkbox-1" />
            Item 1
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
        <li className="list-item">
          <label htmlFor="checkbox-2">
            <input type="checkbox" name="checkbox" id="checkbox-2" />
            Item 2
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
        <li className="list-item">
          <label htmlFor="checkbox-3">
            <input type="checkbox" name="checkbox" id="checkbox-3" />
            Item 3
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
    </>
  );
}
