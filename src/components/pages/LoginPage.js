import React, { useState } from "react";
import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "../../firebase.config";

const LoginPage = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  // Example users: one for Employer, one for Freelancer
  const users = {
    "freelancer@example.com": { password: "freelancer123", role: "freelancer" },
    "employer@example.com": { password: "employer123", role: "employer" }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/dashboard"); // Redirect after Google login
    } catch (error) {
      console.error("Google Sign-In Error:", error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (users[email] && users[email].password === password) {
      // Redirect based on the role
      if (users[email].role === "freelancer") {
        navigate("/Dashboard"); // Freelancer dashboard
      } else if (users[email].role === "employer") {
        navigate("/employer-dashboard"); // Employer dashboard
      }
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 shadow-md rounded-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-4 text-blue-600">
          {isSignup ? "Sign Up" : "Login"}
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 border rounded mb-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 border rounded mb-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </form>

        <div className="text-center mt-4">
          <button
            onClick={handleGoogleSignIn}
            className="w-full bg-red-500 text-white py-2 rounded flex items-center justify-center space-x-2 hover:bg-red-600"
          >
            <img src="/public/assets/google.png" alt="Google" className="w-5 h-5" />
            <span>Sign in with Google</span>
          </button>
          <a href="/forgot-password" className="block text-blue-600 mt-3">Forgot Password ?</a>
          <p className="mt-3 text-gray-700">
            {isSignup ? "Already have an account?" : "Don't have an account?"}  
            <button
              onClick={() => setIsSignup(!isSignup)}
              className="text-blue-600 font-bold ml-1"
            >
              {isSignup ? "Login" : "Sign Up"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;