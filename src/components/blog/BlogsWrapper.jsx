import React, { useState } from "react";
import List from "./List";
import Modals from "./Modals";

function BlogsWrapper({ posts }) {
  const [selected, setSelected] = useState(null);

  return (
    <div>
      <List setSelected={setSelected} posts={posts} />
      <Modals selected={selected} setSelected={setSelected} />
    </div>
  );
}

export default BlogsWrapper;
