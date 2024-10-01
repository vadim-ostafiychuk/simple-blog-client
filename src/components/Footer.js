import React from "react";
import { Footer as FooterFlowbite, FooterCopyright } from "flowbite-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <FooterFlowbite container>
      <FooterCopyright href="/" by="Simple Blog" year={year} />
    </FooterFlowbite>
  );
};

export default Footer;
