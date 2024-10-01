import React from "react";
import PostCard from "./PostCard.js";

const PostList = ({ title }) => {
  return (
    <div>
      <h2 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white pb-2">
        {title}
      </h2>
      <div className="flex flex-col gap-4">
        <PostCard />
        <PostCard />
      </div>
    </div>
  );
};

export default PostList;
