import React from "react";
import Button from "../UI/Button";
import { Card, CardContent } from "../UI/Card";
import { useNavigate } from "react-router-dom";

const WorkSphereHomepage = () => {
  
  // Smooth scrolling function
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    if (!targetId) return;

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(`Element with id "${targetId}" not found.`);
    }
  };
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-blue-600 ml-10 drop-shadow-md">WorkSphere</h1>
        <nav>
          <ul className="content-center flex space-x-6 p-[18px]">
            <li><a href="#about" onClick={(e) => handleScroll(e, "about")} className="text-gray-700 hover:text-blue-600">About</a></li>
            <li><a href="#services" onClick={(e) => handleScroll(e, "services")} className="text-gray-700 hover:text-blue-600">Services</a></li>
            <li><a href="#contact" onClick={(e) => handleScroll(e, "contact")} className="text-gray-700 hover:text-blue-600">Contact</a></li>
          </ul>
        </nav>
        <Button onClick={() => navigate("/login")}>Login</Button>
      </header>
      
      {/* Main Content */}
      <main className="max-w-6xl mx-auto p-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4 text-center">
          Find and Hire the Best Talent
        </h2>
        <p className="text-gray-600 mb-6 text-center">
          WorkSphere connects top professionals with businesses seeking high-quality services.
        </p>
        
        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="transition-transform transform hover:scale-105 duration-300">
            <CardContent>
              <img src="/assets/payment-method.png" alt="Secure Payments" className="ml-16 h-40 object-cover mb-4" />
              <h3 className="text-xl font-bold text-blue-600">Secure Payments</h3>
              <p className="text-gray-600">Guaranteed payments through an escrow system.</p>
            </CardContent>
          </Card>
          <Card className="transition-transform transform hover:scale-105 duration-300">
            <CardContent>
              <img src="/assets/verified-professionals.png" alt="Verified Professionals" className="w-full h-40 object-cover mb-4" />
              <h3 className="text-xl font-bold text-blue-600">Verified Professionals</h3>
              <p className="text-gray-600">Hire skilled freelancers with verified profiles.</p>
            </CardContent>
          </Card>
          <Card className="transition-transform transform hover:scale-105 duration-300">
            <CardContent>
              <img src="/assets/talk.png" alt="Easy Communication" className="w-full h-40 object-cover mb-4" />
              <h3 className="text-xl font-bold text-blue-600">Easy Communication</h3>
              <p className="text-gray-600">Seamless messaging and project collaboration.</p>
            </CardContent>
          </Card>
        </div>

        {/* About, Services, and Contact Sections in Column Layout */}
        <div className="flex flex-col space-y-12 mt-16">
          <div id="about" className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">About WorkSphere</h2>
            <p className="text-gray-600">
              <b>“Your Trusted Platform for Hiring Top Talent”</b><br />
              WorkSphere is a modern freelancing platform designed to connect businesses with skilled professionals across various industries.
              Whether you’re a startup looking for a designer, a company in need of a developer, or a freelancer searching for high-quality projects,
              WorkSphere provides a secure and seamless environment for collaboration.<br />
              Our mission is to empower businesses and freelancers with advanced tools, secure transactions, 
              and a trusted ecosystem that fosters productivity and success.
            </p>
          </div>

          <div id="services" className="bg-white p-6 shadow-md rounded-lg flex flex-col space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Services</h2>
            <Card>
              <CardContent>
                <h3 className="text-xl font-bold text-blue-600">Freelancer Matching</h3>
                <p className="text-gray-600">Find the perfect talent for your project with our smart matching algorithm, ensuring the best fit based on skills and experience.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-xl font-bold text-blue-600">Secure Contracts</h3>
                <p className="text-gray-600">Work with confidence using milestone-based payments and legally binding contracts that protect both clients and freelancers.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-xl font-bold text-blue-600">Project Management Tools</h3>
                <p className="text-gray-600">Keep track of deadlines, tasks, and communication in one place, making collaboration easier and more efficient.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-xl font-bold text-blue-600">Dispute Resolution</h3>
                <p className="text-gray-600">Get fair dispute resolution support to ensure smooth project completion without conflicts.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="text-xl font-bold text-blue-600">Multi-Payment Options</h3>
                <p className="text-gray-600">Choose from various payment methods including bank transfer, PayPal, and cryptocurrency for added convenience.</p>
              </CardContent>
            </Card>
          </div>

          <div id="contact" className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-2xl font-bold text-blue-600 mb-4 underline">Contact Us</h2>
            <p className="text-gray-600 mb-2">Have questions? Reach out to us at <br /></p>
            <a href="mailto:support@worksphere.com" className="text-blue-600 underline">support@worksphere.com</a>
            <h2 className="text-blue-600 ml-4">+(91) 98765-43210</h2>
          </div>
        </div>
      </main>
      <footer>
        <div className="bg-gray-800 text-white p-6 text-center ">
          <p className="text-base">Worksphere 2023. All rights reserved.</p>
          {/* <h2 className="text-sm">Ziion Technology, Mohali</h2> */}
        </div>
      </footer>
    </div>
  );
};

export default WorkSphereHomepage;