import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WorkSphereHomepage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import DashboardPage from "./components/pages/FreelanceDash";
import JobListings from "./components/pages/JobListings";
import InboxPage from "./components/pages/Inbox";
import ChatPage from "./components/pages/Chat";
import Chat from "./components/pages/Chat";
import EditProfile from "./components/pages/EditProfile";
import EmployerDashboard from "./components/pages/EmployerDash";
import PostJob from "./components/pages/PostJob";


function App() {
  const recentJobs = [];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<WorkSphereHomepage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<DashboardPage />}/>
        <Route path="/job-listings" element={<JobListings />} />
        <Route path="/inbox" element={<InboxPage/>} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/chat/:messageId" element={<Chat/>} />
        <Route path="/edit-profile" element={<EditProfile />} />
        {/* <Route path="/employer-dashboard" element={<EmployerDashboard recentJobs={recentJobs} />} /> */}
        <Route path="/employer-dashboard" element={<EmployerDashboard />} />
        <Route path="/post-job" element={<PostJob updateRecentJobs={(job) => recentJobs.push(job)} />} /> 
      </Routes>
    </Router>
  );
}

export default App;