import emailjs from "emailjs-com";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Mailer = () => {


    const user = JSON.parse(localStorage.getItem('currentUser'));

  function sendEmail(e) {

    
    e.preventDefault();

    emailjs.sendForm(
      "service_24jbmdk",
      "template_dg25svx",
      e.target,
      "l5NUKPpbvRhbN3ZLl"
    ).then(res=>{
        alert("email send success ")
        console.log(res);
    }).catch(err=> console.log(err));
  }

  return (
    <div
      className="container border"
      style={{
        marginTop: "50px",
        width: "50%",
        backgroundImage: `url('')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <h1 style={{ marginTop: "25px" }}>Contact Form</h1>
      <form
        className="row"
        style={{ margin: "25px 85px 75px 100px" }}
        onSubmit={sendEmail}
      >
        <label>name</label>
        <input type="text" name="name"  value={user.name} className="form-control" />

        <label>Email</label>
        <input type="email" name="user_email" value={user.email} className="form-control" />

        <label>Message</label>
        <textarea name="message" rows="4" value="hotel reservation successfully " className="form-control" />
        <input
          type="submit"
          value="Send"
          className="form-control btn btn-primary"
          style={{ marginTop: "30px" }}
        />
      </form>
    </div>
  );
};

export default Mailer;