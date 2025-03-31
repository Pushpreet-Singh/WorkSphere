import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import { Card, CardContent } from "../UI/Card";

const JobListings = () => {
  const navigate = useNavigate();

  const jobListings = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "TechCorp",
      location: "Remote",
      description: "Looking for a skilled React developer to join our team.",
      postedDate: "March 30, 2025",
    },
    {
      id: 2,
      title: "Backend Developer",
      company: "CodeBase Ltd.",
      location: "New York, USA",
      description: "Seeking an experienced Node.js developer for API development.",
      postedDate: "March 28, 2025",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "DesignHub",
      location: "London, UK",
      description: "Creative UI/UX designer needed for mobile and web applications.",
      postedDate: "March 27, 2025",
    },
    {
      id: 4,  // New Job Added
      title: "Full Stack Developer",
      company: "DevSolutions",
      location: "San Francisco, USA",
      description: "We are looking for a Full Stack Developer skilled in React and Node.js.",
      postedDate: "March 25, 2025",
    }
  ];

  const handleApplyNow = (jobId) => {
    // Redirect to chat page with jobId as a parameter
    navigate(`/chat/${jobId}`);
  };

  return (
    <>
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Job Listings</h1>
        <Button onClick={() => navigate("/dashboard")} className="bg-blue-500">
          Back to Dashboard
        </Button>
      </header>

      <main className="min-h-screen bg-white p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center underline">
          Available Job Listings
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobListings.map((job) => (
            <Card key={job.id}>
              <CardContent>
                <h2 className="text-xl font-bold">{job.title}</h2>
                <p className="text-gray-600 font-semibold">{job.company}</p>
                <p className="text-gray-600">{job.location}</p>
                <p className="text-gray-700 mt-2">{job.description}</p>
                <p className="text-gray-500 text-sm mt-2">Posted on: {job.postedDate}</p>
                <Button onClick={() => handleApplyNow(job.id)} className="mt-4 bg-green-500">
                  Apply Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="my-6">
          <Card>
            <CardContent>
              <h2 className="text-xl font-bold">Inbox</h2>
              <p className="text-gray-600 mt-2">Check your messages from potential employers.</p>
              <Button onClick={() => navigate("/inbox")} className="mt-4 bg-blue-500">
                Go to Inbox
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="bg-gray-800 text-white p-6 text-center mt-10">
        <p className="text-base">WorkSphere 2025. All rights reserved.</p>
        <h2 className="text-sm">Ziion Technology, Mohali</h2>
      </footer>
    </>
  );
};

export default JobListings;