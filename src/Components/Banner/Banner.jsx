import React from "react";

const Banner = () => {
  return (
    <div className="h-96 ">
      <h2 className="text-5xl font-bold text-white text-center">
        Upgrade Your Tech Accessorize with <br /> Gadget Heaven Accessories
      </h2>
      <p className="text-center text-white mt-4">
        Explore the latest gadgets that will take your experience to the next
        level. From smart devices to <br /> the coolest accessories, we have it
        all!
      </p>
      <div className="flex justify-center items-center mt-4">
        <button className="text-[#9538E2] bg-white btn rounded-xl">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Banner;
