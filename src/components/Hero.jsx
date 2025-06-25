import React from "react";
import img from "../assets/img/hero.png";

const Hero = () => {
  return (
    <div className=" dark:bg-gray-900 dark:text-white">
      <div className="min-h-screen container flex flex-col justify-center md:flex-row md:justify-between items-center">
        {/* content section  */}
        <div className="w-full md:w-2/4 space-y-8 text-center md:text-start mt-24 md:mt-10">
          <div>
            <h3 className=" font-bold text-4xl md:text-5xl">Dive into our</h3>
            <h1 className=" font-bold text-5xl md:text-7xl mt-2 text-primary">
              Cheesy Bluster!
            </h1>
          </div>
          <p>
  We know you're obviously a fan of desi flavours and have your heart set on it. Your search for the best Indian fusion burgers ends here. With the taste of India in every bite, we have thoughtfully curated our menu to serve the Indian palette. Bursting with flavours, our wide range of burgers will always make you crave for more. 
</p>
          <button
            className=" bg-primary py-2 px-4 text-white font-semibold rounded-md hover:scale-105 transition duration-300 ease-in-out"
            onClick={() => {
              const menuSection = document.getElementById('menu');
              if (menuSection) {
                menuSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Order Now
          </button>
        </div>

        {/* img section */}
       <div className="w-full md:w-2/4 flex justify-center mt-10 md:mt-0">
  <img
    className="w-full max-w-md md:max-w-xl object-contain"
    src={img}
    alt="Cheesy Burger"
  />
</div>
      </div>
    </div>
  );
};

export default Hero;
