import React from 'react'
import {useState} from 'react'
const ApplicationPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    city: '',
    state: '',
    zip: ''
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
       <div className="max-w-md mx-auto p-6 bg-violet-600 shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Application Form</h2>
    
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
            <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} 
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline--indigrder-indigo-500" required />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
            <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
          </div>
        </div>
        <div className="mt-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
        </div>
        <div className="mt-4">
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
        </div>
        <div className="mt-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} 
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
        </div>
        <div className="mt-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">Programme</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} 
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
        </div>
        <div className="mt-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">Nationality</label>
          <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} 
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" required />
        </div>
        <div className="mt-6">
          <button type="submit" className="w-full bg-indigo-500 text-white py-2
           px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600">Submit</button>
        </div>
      </form>
      
    </div>
    
    </div>
  )
}

export default ApplicationPage