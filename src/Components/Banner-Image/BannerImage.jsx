import React from "react";

const BannerImage = () => {
  return (
    <div className="absolute top-[360px] left-56">
      <img
        className="w-[900px] h-[360px] object-cover rounded-lg"
        src="/src/assets/banner.jpg"
        alt=""
      />
    </div>
  );
};

export default BannerImage;
