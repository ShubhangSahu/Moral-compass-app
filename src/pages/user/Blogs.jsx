import React from "react";
import { Link } from "react-router-dom";
import PathConstants from "../../routes/PathConstants";

const categories = [
  { id: 1, name: "History", icon: "📜" },
  { id: 2, name: "Preamble", icon: "📖" },
  { id: 3, name: "Fundamental Rights", icon: "⚖️" },
  { id: 4, name: "Directive Principles", icon: "🏛️" },
  { id: 5, name: "Amendments", icon: "✍️" },
  { id: 6, name: "Schedules", icon: "📂" },
  { id: 7, name: "Judicial Interpretations", icon: "⚙️" },
  { id: 8, name: "Indian Federalism", icon: "🌐" },
  { id: 9, name: "Election Process", icon: "🗳️" },
  { id: 10, name: "Emergency Provisions", icon: "🚨" },
];

const BlogPage = () => {
  return (
    <div className="p-10 space-y-10">
      {/* Categories Section */}
      <section className="categories">
        <h2 className="mb-6 text-3xl font-bold">Categories</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Link
            to={PathConstants.HISTORY}
            className="flex items-center justify-start gap-10 p-6 text-center transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl"
          >
            <div className="text-6xl">{categories[0].icon}</div>
            <h3 className="text-xl font-bold">{categories[0].name}</h3>
          </Link>
          <Link
            to={PathConstants.PREAMBLE}
            className="flex items-center justify-start gap-10 p-6 text-center transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl"
          >
            <div className="text-6xl">{categories[1].icon}</div>
            <h3 className="text-xl font-bold">{categories[1].name}</h3>
          </Link>
          <Link
            to={PathConstants.RIGHTS}
            className="flex items-center justify-start gap-10 p-6 text-center transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl"
          >
            <div className="text-6xl">{categories[2].icon}</div>
            <h3 className="text-xl font-bold">{categories[2].name}</h3>
          </Link>
          <Link
            to={PathConstants.DIRECTIVE}
            className="flex items-center justify-start gap-10 p-6 text-center transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl"
          >
            <div className="text-6xl">{categories[3].icon}</div>
            <h3 className="text-xl font-bold">{categories[3].name}</h3>
          </Link>
          <Link
            to={PathConstants.AMENDMENTS}
            className="flex items-center justify-start gap-10 p-6 text-center transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl"
          >
            <div className="text-6xl">{categories[4].icon}</div>
            <h3 className="text-xl font-bold">{categories[4].name}</h3>
          </Link>
          <Link
            to={PathConstants.SCHEDULES}
            className="flex items-center justify-start gap-10 p-6 text-center transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl"
          >
            <div className="text-6xl">{categories[5].icon}</div>
            <h3 className="text-xl font-bold">{categories[5].name}</h3>
          </Link>
          <Link
            to={PathConstants.JUDICIAL}
            className="flex items-center justify-start gap-10 p-6 text-center transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl"
          >
            <div className="text-6xl">{categories[6].icon}</div>
            <h3 className="text-xl font-bold">{categories[6].name}</h3>
          </Link>
          <Link
            to={PathConstants.FEDERALISM}
            className="flex items-center justify-start gap-10 p-6 text-center transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl"
          >
            <div className="text-6xl">{categories[7].icon}</div>
            <h3 className="text-xl font-bold">{categories[7].name}</h3>
          </Link>
          <Link
            to={PathConstants.ELECTION}
            className="flex items-center justify-start gap-10 p-6 text-center transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl"
          >
            <div className="text-6xl">{categories[8].icon}</div>
            <h3 className="text-xl font-bold">{categories[8].name}</h3>
          </Link>
          <Link
            to={PathConstants.EMERGENCY}
            className="flex items-center justify-start gap-10 p-6 text-center transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl"
          >
            <div className="text-6xl">{categories[9].icon}</div>
            <h3 className="text-xl font-bold">{categories[9].name}</h3>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
