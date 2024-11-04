import React from "react";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import BannerImage from "../Banner-Image/BannerImage";
import Footer from "../Footer/Footer";

const MainFile = () => {
  return (
    <div>
      {/* Navbar */}
      <div className="mx-5 mt-5">
        <Navbar></Navbar>
      </div>
      {/* Banner  */}
      <div className="bg-[#9538E2] mx-5 relative rounded-br-lg rounded-bl-lg">
        <Banner></Banner>
      </div>
      {/* Banner Image  */}
      <BannerImage></BannerImage>
      {/* Dynamic Section */}
      <div className="min-h-[calc(100vh-232px)] "></div>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default MainFile;
