import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PostPage from "./components/Posts/PostPage";
import SavedPostsPage from "./components/SavedPosts/SavedPostsPage";
import FollowersPage from "./components/Followers/FollowersPage";
import Footer from "./components/Footer";
import SettingsPage from "./components/SettingsPage/SettingsPage";
import TestPage1 from "./components/TestPage1/TestPage1";
import TestPage2 from "./components/TestPage2/TestPage2";

function App() {
  return (
    <>
      <Router>
        <div className="container">
          <div className="content">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/posts" element={<PostPage />} />
              <Route path="/savedposts" element={<SavedPostsPage />} />
              <Route path="/followers" element={<FollowersPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/test1" element={<TestPage1 />} />
              <Route path="/test2" element={<TestPage2 />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
