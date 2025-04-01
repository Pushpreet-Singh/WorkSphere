import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PostJob from "./PostJob"; // Import PostJob component

const EmployerDashboard = () => {
  const [recentJobs, setRecentJobs] = useState([]);
  const [showPostJob, setShowPostJob] = useState(false); // State to toggle post job form
  const navigate = useNavigate();

  // Handling the job posting
  const handleJobSubmit = (jobDetails) => {
    setRecentJobs((prevJobs) => [...prevJobs, jobDetails]); // Add the new job to the recentJobs state
    setShowPostJob(false); // Close the post job form and show the job listings
  };

  return (
    <div className="employer-dashboard bg-gray-100 min-h-screen w-full">
      {/* Header */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-blue-600">WorkSphere</h1>
        <div>
          {!showPostJob ? (
            <button 
              onClick={() => setShowPostJob(true)}  // Show PostJob form when clicked
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-4"
            >
              Post a Job
            </button>
          ) : (
            <button 
              onClick={() => setShowPostJob(false)}  // Hide PostJob form when clicked
              className="bg-red-500 text-white px-4 py-2 rounded mr-4 hover:bg-red-600"
            >
              Cancel
            </button>
          )}
          <button 
            onClick={() => navigate("/")} 
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </header>

      <h1 className="dashboard-title text-3xl font-bold text-blue-600 mb-6 mt-2 text-center underline">
        Welcome to Your Employer Dashboard
      </h1>

      {/* Conditional rendering of the PostJob form or job listings */}
      {showPostJob ? (
        <PostJob onSubmit={handleJobSubmit} /> // Pass handleJobSubmit as a prop to PostJob
      ) : (
        <>
          <h2 className="section-title text-2xl font-semibold text-gray-700 mb-4 ml-4">
            Recent Job Listings:
          </h2>
          <div className="job-list space-y-4">
            {recentJobs.length === 0 ? (
              <>
                {/* Default placeholder jobs */}
                <div className="job-card bg-white p-4 shadow-md rounded-lg border border-gray-200">
                  <h3 className="job-title text-xl font-bold text-blue-500 mb-2">Software Engineer</h3>
                  <p className="job-description text-gray-600 mb-2">
                    Looking for an experienced software engineer to build a web application.
                  </p>
                  <p className="job-category text-gray-700"><strong>Category:</strong> Development</p>
                  <p className="job-budget text-gray-700"><strong>Budget:</strong> $5000</p>
                  <p className="job-deadline text-gray-700"><strong>Deadline:</strong> May 30, 2025</p>
                  <div className="mt-2 flex items-center">
                    <input type="checkbox" id="completed-1" className="mr-2" />
                    <label htmlFor="completed-1" className="text-gray-700">Mark as Completed</label>
                  </div>
                </div>
                {/* Other default placeholder jobs */}
                <div className="job-card bg-white p-4 shadow-md rounded-lg border border-gray-200 mt-4">
                  <h3 className="job-title text-xl font-bold text-blue-500 mb-2">Graphic Designer</h3>
                  <p className="job-description text-gray-600 mb-2">
                    Seeking a creative designer to create logos and branding materials.
                  </p>
                  <p className="job-category text-gray-700"><strong>Category:</strong> Design</p>
                  <p className="job-budget text-gray-700"><strong>Budget:</strong> $3000</p>
                  <p className="job-deadline text-gray-700"><strong>Deadline:</strong> June 15, 2025</p>
                  <div className="mt-2 flex items-center">
                    <input type="checkbox" id="completed-2" className="mr-2" />
                    <label htmlFor="completed-2" className="text-gray-700">Mark as Completed</label>
                  </div>
                </div>
                {/* Another default placeholder job */}
                <div className="job-card bg-white p-4 shadow-md rounded-lg border border-gray-200 mt-4">
                  <h3 className="job-title text-xl font-bold text-blue-500 mb-2">Digital Marketer</h3>
                  <p className="job-description text-gray-600 mb-2">
                    Hiring a digital marketing expert to manage social media campaigns.
                  </p>
                  <p className="job-category text-gray-700"><strong>Category:</strong> Marketing</p>
                  <p className="job-budget text-gray-700"><strong>Budget:</strong> $4000</p>
                  <p className="job-deadline text-gray-700"><strong>Deadline:</strong> July 1, 2025</p>
                  <div className="mt-2 flex items-center">
                    <input type="checkbox" id="completed-3" className="mr-2" />
                    <label htmlFor="completed-3" className="text-gray-700">Mark as Completed</label>
                  </div>
                </div>
              </>
            ) : (
              recentJobs.map((job, index) => (
                <div key={index} className="job-card bg-white p-4 shadow-md rounded-lg border border-gray-200">
                  <h3 className="job-title text-xl font-bold text-blue-500 mb-2">{job.title}</h3>
                  <p className="job-description text-gray-600 mb-2">{job.description}</p>
                  <p className="job-category text-gray-700"><strong>Category:</strong> {job.category}</p>
                  <p className="job-budget text-gray-700"><strong>Budget:</strong> ${job.budget}</p>
                  <p className="job-deadline text-gray-700"><strong>Deadline:</strong> {job.deadline}</p>
                  <div className="mt-2 flex items-center">
                    <input type="checkbox" id={`completed-${index}`} className="mr-2" />
                    <label htmlFor={`completed-${index}`} className="text-gray-700">Mark as Completed</label>
                  </div>
                </div>
              ))
            )}
          </div>
        </>
      )}

      {/* Footer */}
      <div className="w-full mt-16">
        <footer className="bg-gray-800 text-white p-6 text-center w-full">
          <p className="text-base">WorkSphere 2023. All rights reserved.</p>
          {/* <h2 className="text-sm">Ziion Technology, Mohali</h2> */}
        </footer>
      </div>
    </div>
  );
};

export default EmployerDashboard;


