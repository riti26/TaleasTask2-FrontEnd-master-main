import React, { useState, useEffect } from "react";
import axios from 'axios'
import { useHistory, useParams } from "react-router-dom";

const AddPhone = () => {
  let history = useHistory();
  const { id } = useParams();
  const [phone, setPhone] = useState({
      user: id,
      prefix: "",
      phoneNr: ""
  });

  const { prefix, phoneNr} = phone;
  const onInputChange = e => {
    setPhone({ ...phone, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post(`http://localhost:3003/phones/create-phone/${id}`, phone);
    history.push("/");
  };

  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add A Phone</h2>
        <form onSubmit={e => onSubmit(e)}>
        <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="user"
              disabled="true"
              value={id}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="prefix"
              value={prefix}
              onChange={e => onInputChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phoen Number"
              name="phoneNr"
              value={phoneNr}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Add Phone</button>
        </form>
      </div>
    </div>
  );
};

export default AddPhone;
