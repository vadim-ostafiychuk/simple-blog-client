import React from "react";
import Image from "next/image";
import Navbar from "../components/Navbar.js";
import Footer from "@/components/Footer.js";
import PostList from "@/components/PostList.js";
import PostList2 from "@/components/PostList copy.js";

const Home = () => {
  return (
    <div className="container mx-auto px-5 py-4">
      <div className="flex flex-col xl:flex-row gap-4">
        <PostList2 title={"Popular posts:"} />
        <div className="border hidden xl:block"></div>
        <PostList title={"New posts:"} />
      </div>
    </div>
  );
};

export default Home;
