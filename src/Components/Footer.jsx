import React from "react";

const date = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="text-center flex justify-center align-center -mt-40 bg-black  h-40">
      <h4 className="footer-text text-white mt-16">
        &copy;{" "}
        <span id="date" className=" text-white">
          {" "}
          {date}
        </span>
        <span className="company text-white"> Rishin Mather Portfolio. </span>
        All rights reserved
      </h4>
    </footer>
  );
};

export default Footer;
