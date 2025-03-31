import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WorkSphereHomepage from "./components/pages/HomePage";
import LoginPage from "./components/pages/LoginPage";
import DashboardPage from "./components/pages/FreelanceDash";
import JobListings from "./components/pages/JobListings";
import InboxPage from "./components/pages/Inbox";
import ChatPage from "./components/pages/Chat";
import Chat from "./components/pages/Chat";
import EditProfile from "./components/pages/EditProfile";


function App() {
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
      </Routes>
    </Router>
  );
}

export default App;