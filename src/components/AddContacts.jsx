import React from "react";
import ContactForm from './ContactForm';
const AddContacts = () => {

    const handleOnSubmit = () => {
        // console.log(userData);
      };
    return (
        <>
        <ContactForm handleOnSubmit = {handleOnSubmit} />

        </>
    );
}
export default AddContacts;