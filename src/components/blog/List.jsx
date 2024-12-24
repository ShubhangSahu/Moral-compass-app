import React from "react";
import { motion } from "framer-motion";

const Card = ({ setSelected, post }) => {
  return (
    <motion.div
      className="relative flex flex-col w-full transition-shadow duration-200 bg-white border border-gray-200 shadow-sm cursor-pointer rounded-3xl hover:shadow-md"
      whileHover={{
        scale: 1.025,
        transition: {
          duration: 0.2,
        },
      }}
      whileTap={{
        scale: 0.95,
      }}
      onClick={() => {
        setSelected(post);
      }}
      layoutId={`card-${post.id}`}
    >
      {/* Title */}
      <div className="bg-base-300 flex items-center h-[25%] justify-center flex-shrink-0 p-4 rounded-t-3xl text-lg font-semibold text-gray-800">
        <h1 className="text-center">{post.title}</h1>
      </div>
      <hr />
      {/* Description Container */}
      <div className="relative flex-1 p-4 overflow-hidden">
        <p className="text-sm leading-relaxed text-gray-600">
          {post.description}
        </p>
        {/* Fade-Out Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-10 pointer-events-none bg-gradient-to-t from-white to-transparent rounded-3xl"></div>
      </div>
    </motion.div>
  );
};

export default function List({ setSelected, posts }) {
  return (
    <div className="p-4">
      <h1 className="mb-8 text-4xl font-bold text-center">History Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-[75%] mx-auto">
        {posts.map((post) => (
          <Card key={post.id} setSelected={setSelected} post={post} />
        ))}
      </div>
    </div>
  );
}
