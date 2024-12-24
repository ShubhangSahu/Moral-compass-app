import React from "react";
import { motion } from "framer-motion";

export default function Modals({ selected, setSelected }) {
  if (!selected) {
    return <></>;
  }

  return (
    <div
      onClick={() => setSelected(null)}
      className="fixed inset-0 z-50 overflow-hidden cursor-pointer bg-black/50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full h-full max-w-[700px] mx-auto my-8 px-8 cursor-default"
      >
        <motion.div
          layoutId={`card-${selected.id}`}
          className="relative flex flex-col w-full h-[75%] transition-shadow duration-200 bg-white border border-gray-200 shadow-sm  rounded-3xl hover:shadow-md "
        >
          <div className="flex items-center justify-center h-[25%] flex-shrink-0 p-8 text-lg font-semibold text-gray-800 bg-base-300 rounded-t-3xl">
            <h1 className="text-center">{selected.title}</h1>
          </div>
          {/* Description Container */}
          <div className="relative flex-1 p-8 overflow-hidden">
            <p className="text-sm leading-relaxed text-gray-600">
              {selected.description}
            </p>
            {/* Fade-Out Effect */}
            <div className="absolute bottom-0 left-0 right-0 h-10 pointer-events-none bg-gradient-to-t from-white to-transparent rounded-3xl"></div>
          </div>
        </motion.div>
        {/* <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="p-4 bg-white"
        >
          <h3 className="mb-2 text-2xl font-bold">{selected.title}</h3>
          {selected.tags.map((tag) => {
            return (
              <div
                className="mb-1 mr-1 border-none badge bg-base-300 text-zinc-600"
                key={tag}
              >
                {tag}
              </div>
            );
          })}
          <p className="my-4">{selected.description}</p>
          <button className="btn btn-primary btn-block">Download</button>
        </motion.div> */}
      </div>
    </div>
  );
}
