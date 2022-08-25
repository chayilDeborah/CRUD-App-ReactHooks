import React, { useState } from "react";
import axios from "axios";
// import { useLocation, useNavigate } from "react-router-dom";
import editSvg from "../svg/edit.svg";
import deleteSvg from "../svg/delete.svg";
import { useNavigate } from "react-router-dom";
import userEvent from "@testing-library/user-event";

const AddContactPage = (props) => {
  const navigate= useNavigate();
  const [User, setUser] = useState({name:"", email:"", job:""});

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [job, setJob] = useState("");

  let add = (e) => {
    e.preventDefault();
      if(User.name === "" || User.email === "" || User.job ===""){
        alert("All fields are mandatory!!!");
        return
  }
  props.addContactHandler(User);
  setUser({name:"", email:"", job:""});
  navigate('/');

  var data = JSON.stringify({});

  var config = {
    method: "get",
    url: "https://6304e96294b8c58fd7280ac4.mockapi.io/api/crud/fakeData",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  const getData = async () => {
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const postData = async () => {
    var data = JSON.stringify({
      name: name,
      email: email,
      job: job,
    });

    var config = {
      method: "post",
      url: "https://6304e96294b8c58fd7280ac4.mockapi.io/api/crud/fakeData",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  // const editContact = (props) => {
  //   const navigate = useNavigate();
  //   let location = useLocation();
  //   const {name, email, job } = location.state.contact;
  //   const [User, setUser ] = useState({name, email, job});

  //   let update = (e) => {
  //     e.preventDefault();
  //     if(User.name === "" || User.email === "" || User.job ===""){
  //       alert("All fields are mandatory!!!");
  //       return
  //     }
  //   }
  // }

  return (
    <div>
      <div className="ml-[650px] mt-8 text-3xl font-bold">Contact Manager</div>
      <div className="ml-[150px]">
        <div className="text-2xl font-semibold mt-5">Add To Contact</div>

        <div onSubmit={add}>
        <div className="form-control mt-5">
          <label className="label">
            <span className="label-text font-medium text-1xl">Your Name</span>
          </label>
          <label className="input-group">
            <div className="flex">
            <input
              type="text"
              placeholder="Daniel Enoch" value={User.name}
              onChange={(e) => setUser({...User, name: e.target.value})}
              className="input input-bordered base-300 w-[600px] mt-2"
            />
            <img src={editSvg} alt="edit" className="w-[50px] ml-5 cursor-pointer" />
            <img src={deleteSvg} alt="delete" className="w-[50px] ml-3 cursor-pointer" />
            </div>
          </label>
        </div>
        <div className="form-control mt-5">
          <label className="label">
            <span className="label-text font-medium text-1xl">Your Email</span>
          </label>
          <label className="input-group">
            <div className="flex">
            <input
              type="text"
              placeholder="info@site.com" value={User.email} onChange={(e) => setUser({...User, email: e.target.value})}
              className="input input-bordered base-300 w-[600px] mt-2"
            />
            <img src={editSvg} alt="edit" className="w-[50px] ml-5 cursor-pointer" />
            <img src={deleteSvg} alt="delete" className="w-[50px] ml-3 cursor-pointer" />
            </div>
          </label>
        </div>
        <div className="form-control mt-5">
          <label className="label">
            <span className="label-textfont-medium text-1xl">Job</span>
          </label>
          <label className="input-group">
            <div className="flex">
            <input
              type="text"
              placeholder="software developer" value={User.job} onChange={(e) => setUser({...User, job: e.target.value})}
              className="input input-bordered base-300 w-[600px] mt-2"
            />
            <img src={editSvg} alt="edit" className="w-[50px] ml-5 cursor-pointer" />
            <img src={deleteSvg} alt="delete" className="w-[50px] ml-3 cursor-pointer" />
            </div>
          </label>
        </div>
        <button className="btn btn-accent mt-10 px-10 py-3 bg-teal-600 text-black" onClick={postData}>ADD</button>
      </div>
      </div>
    </div>
  );
};
}
export default AddContactPage;
