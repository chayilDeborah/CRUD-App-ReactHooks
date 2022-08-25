import React from "react";
import { Link } from "react-router-dom";

const Welcome = () => {
    // const styles={
    //     welcom:"flex justify-center"
    // }
  return (
    <>
      <div className="flex justify-center items-center text-center text-200 text-5xl h-[70vh]">
        Contact Manager Application Using React Hooks
      </div>
      <Link to='/crud'><button className="rounded-full bg-blue-700 text-white px-8 py-4 flex justify-center items-center mx-60 ">Add to Contact</button></Link>
    </>
  );
};

export default Welcome;
