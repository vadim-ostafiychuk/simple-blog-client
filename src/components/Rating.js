import React from "react";
import { Rating as FBRating, RatingStar } from "flowbite-react";
import Link from "next/link";

const Rating = ({ reviewCount }) => {
  return (
    <FBRating>
      <RatingStar filled={false} />
      <RatingStar filled={false} />
      <RatingStar filled={false} />
      <RatingStar filled={false} />
      <RatingStar filled={false} />
      <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">0</p>
      <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
      <Link
        href="#"
        className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
      >
        {+reviewCount || 0} reviews
      </Link>
    </FBRating>
  );
};

export default Rating;
