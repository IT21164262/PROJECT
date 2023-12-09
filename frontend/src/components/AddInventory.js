import React, { useState } from "react";
import axios from "axios";

export default function AddInventory() {
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState("");
  const [ex_date, setEx_date] = useState("");
  const [mf_date, setMf_date] = useState("");
  const [status, setStatus] = useState("");

  console.log(item)

  function handleSubmit(e) {
    e.preventDefault();

    const newInventory = {
      item,
      quantity,
      ex_date,
      mf_date,
      status
    };

    axios
      .post("http://localhost:8070/inventory/add", newInventory)
      .then(() => {
        alert("Inventory Added");
        window.location = "/";
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <h2>Add Inventory</h2>
          <label htmlFor="item">Item Name</label>
          <input
            type="text"
            className="form-control"
            id="item"
            placeholder="Enter Item name"
            value={item}
            onChange={(e) => {
              setItem(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="quantity">Quantity</label>
          <input
            type="text"
            className="form-control"
            id="quantity"
            placeholder="Enter quantity"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="exDate">Expire Date</label>
          <input
            type="text"
            className="form-control"
            id="ex_date"
            placeholder="Enter Expire Date"
            value={ex_date}
            onChange={(e) => {
              setEx_date(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="mf_date">Manufacturer Date</label>
          <input
            type="text"
            className="form-control"
            id="mf_date"
            placeholder="Enter mf_date"
            value={mf_date}
            onChange={(e) => {
              setMf_date(e.target.value);
            }}
          />
        </div>

        <div className="form-group">
          <label htmlFor="status">Status</label>
          <input
            type="text"
            className="form-control"
            id="status"
            placeholder="Enter Status"
            value={status}
            onChange={(e) => {
              setStatus(e.target.value);
            }}
          />
        </div>

        <button
          type="submit"
          className="btn btn-warning"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
