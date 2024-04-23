// import React from "react";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useSelector, useDispatch } from "react-redux";
// import PostForm from "../components/Posts/PostForm";
// import PostItem from "../components/Posts/PostItem";
// import { getUserPosts, reset } from "../features/posts/postSlice";

// function Dashboard() {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const { user } = useSelector((state) => state.auth);
//   const { posts } = useSelector((state) => state.posts);

//   useEffect(() => {
//     if (!user) {
//       navigate("/login");
//     }

//     dispatch(getUserPosts(user._id));

//     return () => {
//       dispatch(reset());
//     };
//   }, [user, navigate, dispatch]);

//   return (
//     <>
//       <section className="heading">
//         <h1>{user.username}'s Dashboard</h1>
//       </section>

//       <PostForm />

//       <section className="content">
//         <h2>Your Posts</h2>
//         {posts.length === 0 ? (
//           <p>No posts found</p>
//         ) : (
//           <ul className="posts">
//             {posts.map((post) => (
//               <PostItem key={post._id} post={post} />
//             ))}
//           </ul>
//         )}
//       </section>
//     </>
//   );
// }

import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Dashboard() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  // Redirect to login if user is not authenticated
  if (!user) {
    navigate("/login");
    return null;
  }

  return (
    <>
      <section className="heading">
        <h1>{user.username}'s Dashboard</h1>
      </section>

      <div className="category-cards">
        {/* Category Card for Posts */}
        <Link to="/posts" className="category-card">
          <h2>Posts</h2>
          <p>Create or view posts</p>
        </Link>
        {/* Add more category cards for other actions */}
        <Link to="/savedposts" className="category-card">
          <h2>Saved Posts</h2>
          <p>View Saved Posts</p>
        </Link>
        {/* Add more category cards for other actions */}
        <Link to="/followers" className="category-card">
          <h2>Followers</h2>
          <p>View Followers</p>
        </Link>
        {/* Add more category cards for other actions */}
        <Link to="/test1" className="category-card">
          <h2>Test1</h2>
          <p>Test1</p>
        </Link>
        {/* Add more category cards for other actions */}
        <Link to="/test2" className="category-card">
          <h2>Test2</h2>
          <p>Test2</p>
        </Link>
        <Link to="/settings" className="category-card">
          <h2>Settings</h2>
          <p>Settings</p>
        </Link>
      </div>
    </>
  );
}


export default Dashboard;
