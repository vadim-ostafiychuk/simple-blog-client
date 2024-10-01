import React from "react";
import { Card, Button } from "flowbite-react";
import image1 from "../public/image-1.png";
import Image from "next/image";
import Rating from "@/components/Rating";

const PostCard = () => {
  return (
    <Card
      className="md:max-w-2xl"
      horizontal
      renderImage={() => (
        <Image
          className="w-full h-[200px] md:h-auto"
          style={{ objectFit: "cover" }}
          width={200}
          alt="image"
          src={image1}
        />
      )}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <Rating />
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
      </p>
      <Button>Read more</Button>
    </Card>
  );
};

export default PostCard;
