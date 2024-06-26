import React from 'react'
import {useState} from 'react'
import { Link } from 'react-router-dom';
const ApplicationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    address: '',
    programme: '',
    nationality: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, such as sending data to a server
    console.log('Form submitted:', formData);
  };
  return (

    <div  className="w-full h-[800px] pb-20 flex items-center  border-b-[1px] border-b-black">
      <div className='absolute top-0  flex justify-center items-center  mt-7 left-10 text-2xl'>Profile</div>
      <div className='absolute top-0 right- flex justify-center items-center text-sm mt-7 right-10'>
        <Link to="/sign_up/maghandi/college" className='w-full bg-indigo-500 text-white py-2
           px-4 rounded-md hover:bg-indigo-900 focus:outline-none focus:bg-indigo-950'>Log Out</Link></div>
       <div className="w-1/2 mx-auto p-6 bg-violet-400 shadow-md rounded-md  justify-center items-center">
      <h2 className="text-2xl font-bold mb-4 text-center">Application Form</h2>
    
      <form onSubmit={handleSubmit}>
        
          <div className='w-2/3 m-auto'>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input type="name" id="name" name="name" value={formData.name} onChange={handleChange} className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
        
          
        </div>
        <div className="m-auto mt-4 w-2/3 ">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 ">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
        </div>
        <div className="w-2/3 m-auto mt-4">
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
        </div>
        <div className="w-2/3 m-auto mt-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} 
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
        </div>
        <div className=" w-2/3 m-auto mt-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">Programme</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} 
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
        </div>
        <div className="w-2/3 m-auto mt-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">Nationality</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} 
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
        </div>
        <div className=" text-center mt-6 ">
          <button  type="submit" className="w-1/3 bg-indigo-500 text-white py-2 
           px-4 rounded-md hover:bg-indigo-900 focus:outline-none focus:bg-indigo-950 text-center" >Apply</button>
        </div>
      </form>
      
    </div>
    
    </div>
  )
}

export default ApplicationPage