import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";

const EditProfile = () => {
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    location: "New York, USA",
    memberSince: "2022",
    language: "English",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Profile updated successfully!");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Edit Profile</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-96">
        <label className="block mb-2">Name:</label>
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-4"
        />

        <label className="block mb-2">Email:</label>
        <input
          type="email"
          name="email"
          value={profile.email}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-4"
        />

        <label className="block mb-2">Location:</label>
        <input
          type="text"
          name="location"
          value={profile.location}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-4"
        />

        <label className="block mb-2">Language Preference:</label>
        <input
          type="text"
          name="language"
          value={profile.language}
          onChange={handleChange}
          className="w-full p-2 border rounded mb-4"
        />

        <Button type="submit" className="bg-blue-500 w-full">Save Changes</Button>
      </form>
    </div>
  );
};

export default EditProfile;