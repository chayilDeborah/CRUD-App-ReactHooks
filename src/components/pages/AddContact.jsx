import React, { useState} from "react";
import axios from "axios";
// import { useLocation, useNavigate } from "react-router-dom";
const AddContactPage = () => {

    const [name, setName ] = useState('');
    const [email, setEmail ] = useState('');
    const [job, setJob ] = useState('');
    var data = JSON.stringify({});
    
    var config = {
      method: 'get',
      url: 'https://6304e96294b8c58fd7280ac4.mockapi.io/api/crud/fakeData',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
   const getData=async()=>{ 
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}
    const postData = async() => {
var data = JSON.stringify({
  "name": name,
  "email": email,
  "job": job
});

var config = {
  method: 'post',
  url: 'https://6304e96294b8c58fd7280ac4.mockapi.io/api/crud/fakeData',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});

    }
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
    <>
      {/* <div className=" justify-center items-center mt-[40px] text-3xl font-bold ">
        Contact Manager
      </div> */}

      <div className="">
        <div>
        <div className="text-2xl font-semibold mt-5">
          Add To Contact
        </div>
        <div className="form-control mt-5">
          <label className="label">
            <span className="label-text font-medium text-1xl">Your Name</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              placeholder="Daniel Enoch" onChange={(e) => setName(e.target.value)}
              className="input input-bordered base-300 w-[500px] mt-2"
            />
          </label>
        </div>
        <div className="form-control mt-5">
          <label className="label">
            <span className="label-text font-medium text-1xl">Your Email</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              placeholder="info@site.com" onChange={(e) => setEmail(e.target.value)}
              className="input input-bordered base-300 w-[500px] mt-2"
            />
          </label>
        </div>
        <div className="form-control mt-5">
          <label className="label">
            <span className="label-textfont-medium text-1xl">Job</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              placeholder="software developer" onChange={(e) => setJob(e.target.value)}
              className="input input-bordered base-300 w-[500px] mt-2"
            />
          </label>
        </div>
        <div className="flex ">
        <button className="btn btn-accent mt-7 px-10 py-3 bg-teal-500 text-black" onClick={postData}>ADD</button>
        {/* <button className="btn btn-accent mt-7 px-10 py-3 bg-teal-500 text-black ml-10" onClick={postData}>EDIT</button> */}
        </div>
        </div>


        
      </div>
    </>
  );
};
export default AddContactPage;
