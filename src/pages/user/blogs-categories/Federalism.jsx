import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../firebase.config";
import BlogsWrapper from "../../../components/blog/BlogsWrapper";
import { v4 as uuidv4 } from "uuid";

function Federalism() {
  const [posts, setPosts] = useState([]); // State to store fetched posts

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Reference to the 'posts' subcollection of the 'history' document
        const postsCollectionRef = collection(
          db,
          "blogs",
          "indian_federalism",
          "posts"
        );
        const postsSnapshot = await getDocs(postsCollectionRef);
        const postsList = postsSnapshot.docs.map((doc) => ({
          id: doc.id,
          layoutId: `blog-${uuidv4()}`,
          ...doc.data(),
        }));
        setPosts(postsList); // Save fetched posts into the state
        console.log(posts);
      } catch (error) {
        console.error("Error fetching posts: ", error);
      }
    };

    fetchPosts(); // Call the function to fetch posts
  }, []); // Empty dependency array ensures this runs only once

  return <BlogsWrapper posts={posts} />;
}

export default Federalism;
