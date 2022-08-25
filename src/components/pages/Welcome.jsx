import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Welcome = (props) => {
    const inputEl = useRef("");

    const renderContactList = props.contacts.map((contact)=>{
      return(
          <ContactCard contact={contact} clickHandler={deletContactHandler} key={contact.id}/>
      );
  })

  const getSearchTerm = () =>{
    //console.log(inputEl.current.value);
    props.searchKeyword(inputEl.current.value);
}

  return (
    <>
      <div className="flex justify-center items-center text-center text-200 text-4xl h-[15vh]">
        Contact Manager Application Using React Hooks
      </div>
      <div className="ml-[100px]">
      <div className="flex justify-between ">
      <div className="text-3xl font-medium">Contact List</div>
      <Link to='/crud'><button className="rounded-full bg-blue-700 text-white px-8 py-4 flex justify-center items-center mx-60 ">Add to Contact</button></Link>
      </div>
      <div class="form-control">
  <div class="input-group">
    <input ref={inputEl} type="text" placeholder="Search Contact" class="input input-bordered" value={props.term} onChange={getSearchTerm} />
    <button className="btn btn-square">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
  </div>
</div>
<div className="">
  {renderContactList.length >0 ?  renderContactList: "No Contacts Available"} 
</div>

</div>
    </>
  );
};

export default Welcome;
