import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook

const PostJob = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const [jobDetails, setJobDetails] = useState({
    title: "",
    description: "",
    category: "",
    budget: "",
    deadline: ""
  });

  const handleChange = (e) => {
    setJobDetails({ ...jobDetails, [e.target.name]: e.target.value });
  };

  const handlePostJob = () => {
    navigate("/employer-dashboard"); // Redirect to Employer Dashboard
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h2 className="text-3xl font-bold mb-6">Post a New Job</h2>
      <form className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
        <label className="block mb-2">Job Title:</label>
        <input 
          type="text" 
          name="title" 
          value={jobDetails.title} 
          onChange={handleChange} 
          required 
          className="w-full p-2 border rounded mb-4" 
        />

        <label className="block mb-2">Job Description:</label>
        <textarea 
          name="description" 
          value={jobDetails.description} 
          onChange={handleChange} 
          required 
          className="w-full p-2 border rounded mb-4"
        ></textarea>

        <label className="block mb-2">Category:</label>
        <input 
          type="text" 
          name="category" 
          value={jobDetails.category} 
          onChange={handleChange} 
          required 
          className="w-full p-2 border rounded mb-4" 
        />

        <label className="block mb-2">Budget ($):</label>
        <input 
          type="number" 
          name="budget" 
          value={jobDetails.budget} 
          onChange={handleChange} 
          required 
          className="w-full p-2 border rounded mb-4" 
        />

        <label className="block mb-2">Deadline:</label>
        <input 
          type="date" 
          name="deadline" 
          value={jobDetails.deadline} 
          onChange={handleChange} 
          required 
          className="w-full p-2 border rounded mb-4" 
        />

        <button 
          onClick={handlePostJob} // Add onClick handler for redirection
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Post Job
        </button>
      </form>
    </div>
  );
};

export default PostJob;