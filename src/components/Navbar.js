import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Navbar as NavbarFlowbite,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
  Dropdown,
} from "flowbite-react";
import Logotype from "../public/navbar/logotype.svg";

const Navbar = () => {
  return (
    <NavbarFlowbite fluid rounded>
      <NavbarBrand as={Link} href="/">
        <Image
          src={Logotype}
          width={36}
          className="mr-3 h-6 sm:h-9"
          alt="Simple Blog"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Simple Blog
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink as={Link} href="/" active>
          Home
        </NavbarLink>
        <NavbarLink as={Link} href="/posts">
          Posts
        </NavbarLink>
        <NavbarLink as={Link} href="/login">
          Login
        </NavbarLink>
      </NavbarCollapse>
    </NavbarFlowbite>
  );
};

export default Navbar;
