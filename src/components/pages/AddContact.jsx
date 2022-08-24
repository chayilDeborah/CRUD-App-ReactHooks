import React, { useState} from "react";

const AddContactPage = () => {

    const [name, setName ] = useState('');
    const [email, setEmail ] = useState('');
    const [job, setJob ] = useState('');

    const postData = () => {
        console.log(name);
        console.log(email);
        console.log(job);

    }

  return (
    <>
      <div className="flex justify-center items-center mt-[40px] text-3xl font-bold ">
        Contact Manager
      </div>
      <div className="ml-[350px]">
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
              className="input input-bordered base-300 w-1/2 mt-2"
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
              className="input input-bordered base-300 w-1/2 mt-2"
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
              className="input input-bordered base-300 w-1/2 mt-2"
            />
          </label>
        </div>
        <button className="btn btn-accent mt-7 px-10 py-3 bg-teal-500 text-black" onClick={postData}>ADD</button>
      </div>
    </>
  );
};
export default AddContactPage;
