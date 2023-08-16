import React from "react";

const Footer = () => {
  return (
    <div className="border-t border-gray-200 pt-4 text-center mt-24">
      <p className="text-base font-light">Thanks for visiting this website</p>
      <h3 className="text-md mt-2 font-semibold">
        Dugsiiye &copy; {new Date().getFullYear()}
      </h3>
    </div>
  );
};

export default Footer;
