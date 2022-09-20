import React from "react";
import ContactForm from './ContactForm';
const AddContacts = () => {

    const handleOnSubmit = (contact) => {
        console.log(contact);
      };
    return (
        <>
        <ContactForm handleOnSubmit = {handleOnSubmit} />

        </>
    );
}
export default AddContacts;