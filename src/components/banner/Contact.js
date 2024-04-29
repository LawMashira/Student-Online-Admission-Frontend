import React, { useState } from "react";
import Title from "./Title";
import ContactLeft from "./ContactLeft";
import GoogleMap from "./GoogleMap";

export default function Contact() {
  const [username, setUsername] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  //const [errMessage, seterrMessage]= useState("")
  //const [successMessage, setSuccesssMessage]= useState("")

  //======== Email  Validation
  /*const emailValidation = ()=>{
    return String (email)
    .toLocaleLowerCase()
    .match (/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/)
   }

/*
const handleSend = (e)=>{
  e.preventDefault()
  if(username=== ""){
    seterrMessage("Username is required");
      } else if(phoneNumber===""){
        seterrMessage("Phone number is required") ;
      }else if(email===""){
        seterrMessage("Email is required") ;
      }else if(!emailValidation(email)){
        seterrMessage("Please enter a  valid email") ;
      }else if(subject===""){
        seterrMessage("Subject is required") ;
      }else if(message===""){
        seterrMessage("Message is required") ;

  }else{
    setSuccesssMessage(`Thank you ${username}, Message successfully send`);
    setUsername("")
    setSubject("")
    setphoneNumber("")
    setEmail("")
    seterrMessage("")
    setMessage("")
    
  }
}
*/
  return (
    <section
      id="contact"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div
        className="flex justify-center items-center
       text-center text-5xl"
      >
        <Title title="Contact Us" des=" Send Us An Enquiry" />
      </div>
      <div className="w-full flex flex-col gap-6 py-2">
        <div className="w-full h-auto flex flex-col lgl:flex-row justify-between">
          <ContactLeft />

          <div
            className="w-full lgl:w-[60%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b]
    flex flex-col gap-8 p-4 lgl:p-8 rounded-lg shadow-shadowOne"
          >
            <form
              action="https://getform.io/f/4a5f26c5-fda2-4c23-9c6e-a519a9b6272a"
              method="POST"
              className="w-full flex flex-col gap-6 py-2 lgl:py-5"
            >
              {/*
  {
    errMessage && (<p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b]
    shadow-shadowOne text-center text-red-700 text-base  tracking-wide
    animate-bounce'>{errMessage}</p>
  )}
  {
    successMessage && (<p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b]
    shadow-shadowOne text-center text-green-600 text-base  tracking-wide
    animate-bounce'>{successMessage}</p>)
  }*/}

              <div className="w-full flex flex-col  lgl:flex-row gap-10">
                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-50 uppercase tracking-wide">
                    NAME
                  </p>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                    className={`${
                      {
                        /*errMessage === "Username is required"&&  "outline-designColor"*/
                      }
                    }  contactInput  `}
                    type="text"
                    name="NAME"
                    required
                    //placeholder="Enter your name"
                  />
                </div>

                <div className="w-full lgl:w-1/2 flex flex-col gap-4">
                  <p className="text-sm text-gray-50 uppercase tracking-wide">
                    Phone Number
                  </p>
                  <input
                    onChange={(e) => setphoneNumber(e.target.value)}
                    value={phoneNumber}
                    className={`${
                      {
                        /* errMessage ==="Phone is required"&&  "outline-designColor"*/
                      }
                    } contactInput  `}
                    type="number"
                    name="Phone Number "
                    required
                    //placeholder="Enter phone number"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-50 uppercase tracking-wide">
                  Email
                </p>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className={`${
                    {
                      /*errMessage ==="A valid email is required"&&  "outline-designColor"*/
                    }
                  } contactInput   `}
                  type="email"
                  name="email"
                  required
                 // placeholder="Enter email number"
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-50 uppercase tracking-wide">
                  Subject
                </p>
                <input
                  className={`${
                    {
                      /*errMessage ==="Subject is required"&&  "outline-designColor"*/
                    }
                  } contactInput`}
                  type="text"
                  name="Subject"
                  required
                 // placeholder="Enter the subject matter"
                  onChange={(e) => setSubject(e.target.value)}
                  value={subject}
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-sm text-gray-50 uppercase tracking-wide">
                  Message
                </p>
                <textarea
                  name="Message"
                  required
                  //placeholder="Enter your enquiry"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  className={`${
                    {
                      /* errMessage === "Message is required"&&  "outline-designColor"*/
                    }
                  }  contactInput`}
                  cols="30"
                  rows="8"
                ></textarea>
              </div>
              <div className="w-full">
                <button
                  type="submit" // onClick={handleSend}
                  className="w-full h-12 bg-[#141518] rounded-lg text-base first-letter:

  bg-gradient-to-b from-blue-500
  to-blue-600


    tracking-wider uppercase hover:text-white duration-300
    hover:border-[1px] hover:border-designColor border-transparent text-yellow-100"
                >
                  Send An Enquiry
                </button>
              </div>
              {/*

{
    errMessage && (<p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b]
    shadow-shadowOne text-center text-red-700 text-base  tracking-wide
    animate-bounce'>{errMessage}</p>
  )}
{
    successMessage && (<p className='py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b]
    shadow-shadowOne text-center text-green-600 text-base  tracking-wide
    animate-bounce'>{successMessage}</p>)
  }
*/}
            </form>
  
          </div>

          

        </div>
       
      
      </div>
      <div className="justify-center">
          <GoogleMap/> 
          </div>
    </section>
  );
}
