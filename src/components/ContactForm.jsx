import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const ContactForm = (props) => {
    const [contact, setContact] = useState({
        contactname: props.contact ? props.contact.contactname : '',
        email: props.contact ? props.contact.email : '',
        job: props.contact ? props.contact.job : '',
        phone: props.contact ? props.contact.phone : ''

    });
    const [errorMsg, setErrorMsg] = useState('');
    const { contactname, email, job, phone } = contact;

    const handleOnSubmit = (event) => {
        event.preventDefault();
        const values = [ contactname, email, job, phone];
        let errorMsg = '';

        const allFieldsFilled = values.every((field) => {
            const value = `${field}`.trim();
            return value !== '' && value !=='0';
        });
        if (allFieldsFilled) {
            const contact = {
                id: uuidv4(),
                contactname,
                email,
                job,
                phone,
                date: new Date()
            };
            props.handleOnSubmit(contact);
        } else {
            errorMsg = 'Please fill out all the fields.';
        }
        setErrorMsg(errorMsg);
    };

    const handleInputChange = (events) => {
        const { name, value } = events.targets;
        switch (name) {
            case 'phone':
                if (value === '' || parseInt(value) === +value) {
                    setContact((prevState) => ({
                        ...prevState,
                        [name]: value
                    }) );
                }
                break;
                case 'email':
                    if (value === '' || value.match(!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email))) {
                        setContact((prevState) => ({
                            ...prevState,
                            [name]: value
                        }))
                    }
                    break;
                    default: 
                    setContact((prevState) => ({
                        ...prevState,
                        [name]: value
                    }));
        }
    };



    return (
        <>
        { errorMsg &&  <p>{errorMsg}</p>}
        <form onSubmit={handleOnSubmit}>
        <div className="form-control mt-5">
          <label className="label">
            <span className="label-text font-medium text-1xl">Your Name</span>
          </label>
          <label className="input-group">
            <input
              type="text"
              value={contactname}
              placeholder="Daniel Enoch" 
              onChange={handleInputChange}
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
              value={email}
              placeholder="info@site.com" 
              onChange={handleInputChange}
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
              value={job}
              placeholder="software developer" 
              onChange={handleInputChange}
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
              value={phone}
              placeholder="+234" 
              onChange={handleInputChange}
              className="input input-bordered base-300 w-1/2 mt-2"
            />
          </label>
        </div>
        <button className="btn btn-accent mt-7 px-10 py-3 bg-teal-500 text-black" type='submit'>ADD</button>
        </form>
        </>
    )
}
export default ContactForm;