import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import { Link, useNavigate } from 'react-router-dom';

const URL = 'http://localhost:8070/inventory';

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};

const AllInventory = () => {
  const navigate = useNavigate();
  const [inventory, setInventory] = useState([]);

  const deleteHandler = (_id) => {
    axios.delete(`http://localhost:8070/inventory/delete/${_id}`)
      .then(() => {
        fetchHandler().then((data) => setInventory(data));
      });
  };

  useEffect(() => {
    fetchHandler().then((data) => setInventory(data));
  }, []);

  return (
    <div className="container">
      <h1 className="my-4">All Inventory</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Expiry Date</th>
            <th>Manufacture Date</th>
            <th>Status</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr key={item._id}>
              <td>{item.item}</td>
              <td>{item.quantity}</td>
              <td>{item.ex_date}</td>
              <td>{item.mf_date}</td>
              <td>{item.status}</td>
              <td>
                <Link to={`inventory/update/${item._id}`} className="btn btn-sm btn-outline-primary">Update</Link>
              </td>
              <td>
                <button onClick={() => deleteHandler(item._id)} className="btn btn-sm btn-outline-danger">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllInventory;
