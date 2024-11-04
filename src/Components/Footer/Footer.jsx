import React from "react";

const Footer = () => {
  return (
    <div className="mx-auto container text-center">
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold">Gadget Heaven</h2>
        <p className="mt-5 text-[#09080F99]">
          Leading the way in cutting-edge technology and innovation.
        </p>
      </div>

      <footer className=" bg-base-200 text-base-content p-10 grid grid-cols-1 md:grid-cols-3 gap-4 justify-center text-center">
        <div className="text-center flex flex-col text-[#09080F99]">
          <h6 className="footer-title text-black">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>

        <div className="text-center flex flex-col text-[#09080F99]">
          <h6 className="footer-title text-black">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>

        <div className="text-center flex flex-col text-[#09080F99]">
          <h6 className="footer-title text-black">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;