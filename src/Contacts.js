import React, { useState } from 'react'
import './contact.css'
import { Element } from 'react-scroll'
import {  FaLinkedinIn} from 'react-icons/fa'
function Contacts() {
  const[name,setName]=useState("");
  const[email,setEmail]=useState("") ;
  const[subject,setSubject]=useState("");
  const[messages,setMessage]=useState("");
  const[feedback,setFeedback]=useState("");
  const sendfile = async (name, email,subject,messages) => {
    try {
      const response = await fetch('https://city-lawyer.onrender.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ jina: name, mail: email, maneno:messages,somo:subject }),
      });
      const data = await response.json();
      console.log(data)
      if (data.success) {
        setFeedback(data.message);  // Set success message
        
      }
       else {
        setFeedback('Failed to send message.');  // Set error message if saving failed
      }
    } catch (error) {
      setFeedback('An error occurred while saving the item.');
    }
  // New item added
  
  };
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    await sendfile(name, email, subject, messages); // Pass the form data to sendfile function
    alert(feedback);
    setName('')
    setSubject("")
    setMessage("")
    setEmail("") // Show the feedback after sending the message
  };
  function nameset(e){
   let newname= e.target.value;
   setName(newname)
  }
  function emailset(e){
    let newname= e.target.value;
    setEmail(newname)
   }
   function Subjectset(e){
    let newname= e.target.value;
    setSubject(newname)
   }
   function messageset(e){
    let newname= e.target.value;
    setMessage(newname)
   }
 
  return (
    
    <div>
        <Element name="Contacts">
        <section className="contact">
      <div className="container">
        <h1 className="section-title">Get in Touch</h1>
        <p className="section-intro">
          If you need expert legal advice or want to schedule a consultation, feel free to reach out through the form below or contact us directly.
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <h2>Contact Information</h2>
            <p>Email: <a href="mailto:lovettschola@gmail.com">lovettschola@gmail.com</a></p>
            <p>Phone: <a href="tel:+254729981393">+254729981393</a></p>
            <p> <FaLinkedinIn/>Linkedin: <a href="https://www.linkedin.com/in/schola-achieno-0016301a3/?trk=contact-info">Shola Achieno</a></p>
          </div>

          <div className="contact-form">
            <form  onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" onChange={nameset} placeholder="Your Name"  value={name}required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" value={email} onChange={emailset} name="email" placeholder="Your Email" required />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" value={subject} onChange={Subjectset} name="subject" placeholder="Subject" required />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" value={messages} onChange={messageset} name="message" rows="6" placeholder="Your Message" required></textarea>
              </div>

              <button type="submit" className="btn-submit" >Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
        </Element>
    </div>
  )
}

export default Contacts