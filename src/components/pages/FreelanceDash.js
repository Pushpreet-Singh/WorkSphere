import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import { Card, CardContent } from "../UI/Card";

const FreelanceDashboard = () => {
  const navigate = useNavigate();

  return (
    <>
      <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">WorkSphere</h1>
        <div className="flex gap-4">
          <Button onClick={() => navigate("/job-listings")} className="bg-blue-500">
            New Job Listings
          </Button>
          <Button onClick={() => navigate("/")} className="bg-red-500">
            Logout
          </Button>
        </div>
      </header>
      <h1 className="text-3xl font-bold text-center mt-6 text-gray-800 underline">Welcome to your dashboard!</h1>
      <div className="min-h-screen bg-white flex pt-10">
        {/* Sidebar */}
        <aside className="w-1/4 h-full bg-white shadow-md p-4 mt-24 ml-14 border-solid">
          {/* Profile Section */}
          <div>
            <h3 className="text-xl font-bold text-blue-600">Profile</h3>
            <div className="flex flex-col items-center mb-4">
              <img src="/public/assets/profile.png" className="w-32 h-32 rounded-full border-2 border-gray-300 mb-4" />
              <h4 className="text-lg font-semibold text-blue-600 underline">Pushpreet Singh</h4>
              <p className="text-gray-600 mb-2">singh26@gmail.com</p>
              <p className="text-gray-600 mb-2">Location: Patiala, Punjab</p>
              <p className="text-gray-600 mb-2">Member Since: January 2023</p>
              <p className="text-gray-600 mb-2">Language Preferences: English</p>
            </div>
            <Button onClick={() => navigate("/edit-profile")} className="w-full mb-2">
              Edit Profile
            </Button>
          </div>

          <hr className="bottom-1 mt-4 gray-800"></hr>

          {/* Inbox Section */}
          <div>
            <h3 className="text-xl font-bold text-blue-600 mt-6">Inbox</h3>
            <div className="bg-white p-4 rounded-lg shadow mb-4">
              <p className="text-gray-700 font-semibold">Message from John Doe:</p>
              <p className="text-gray-600 italic">"Can you send me the latest update?"</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="text-gray-700 font-semibold">Message from Client X:</p>
              <p className="text-gray-600 italic">"Great job on the last task!"</p>
            </div>
            <Button onClick={() => navigate("/inbox")} className="w-full bg-blue-500 text-white mt-4">
              Check Inbox
            </Button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="w-3/4 p-6 flex flex-col">
          {/* Statistics Section */}
          <section className="mb-6 mt-6">
            <h1 className="text-3xl font-semibold text-blue-600 mb-2 underline">Dashboard Statistics</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent>
                  <h2 className="text-xl font-bold">Total Tasks</h2>
                  <p className="text-2xl">45</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <h2 className="text-xl font-bold">Completed Tasks</h2>
                  <p className="text-2xl">30</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <h2 className="text-xl font-bold">Pending Tasks</h2>
                  <p className="text-2xl">15</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Tasks Section */}
          <section className="mb-6 mt-6">
            <h1 className="text-3xl font-semibold text-blue-600 mb-2 underline">Your Tasks</h1>
            <div className="grid grid-cols-1 gap-6">
              <Card>
                <CardContent>
                  <h2 className="text-xl font-bold">Task 1: Design a Landing Page</h2>
                  <p className="text-gray-600">Due Date: April 10, 2025</p>
                  <p className="text-gray-600">Status: In Progress</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <h2 className="text-xl font-bold">Task 2: Develop Backend API</h2>
                  <p className="text-gray-600">Due Date: April 15, 2025</p>
                  <p className="text-gray-600">Status: Pending</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <h2 className="text-xl font-bold">Task 3: Test Payment Integration</h2>
                  <p className="text-gray-600">Due Date: April 20, 2025</p>
                  <p className="text-gray-600">Status: Not Started</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Notifications Section */}
          <section>
            <h1 className="text-3xl font-semibold text-blue-600 underline mb-2 mt-6">Notifications</h1>
            <div className="grid grid-cols-1 gap-6">
              <Card>
                <CardContent>
                  <h2 className="text-xl font-bold text-blue-600">New Message from Client</h2>
                  <p className="text-gray-600">"Hey, I need an update on the homepage design!"</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <h2 className="text-xl font-bold text-blue-600">Task Deadline Approaching</h2>
                  <p className="text-gray-600">"Your task 'Fix Dashboard Layout Issues' is due in 2 days."</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent>
                  <h2 className="text-xl font-bold text-blue-600">Payment Received</h2>
                  <p className="text-gray-600">"You've received $250 for the 'Landing Page Development' project."</p>
                </CardContent>
              </Card>
            </div>
          </section>
        </main>

        {/* Footer */}
        
      </div>
      <div className="w-full">
        <footer className="bg-gray-800 text-white p-6 text-center w-full">
          <p className="text-base">WorkSphere 2023. All rights reserved.</p>
          <h2 className="text-sm">Ziion Technology, Mohali</h2>
        </footer>
      </div>
    </>
  );
};

export default FreelanceDashboard;