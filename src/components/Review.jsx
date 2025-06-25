import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReviewCard from "../layouts/ReviewCard";

const Review = () => {
  const data = [
    {
      id: 1,
      desc: "The burgers here are absolutely delicious! Fresh ingredients and juicy patties make every bite amazing. Highly recommend the classic cheeseburger!",
      name: "Alex Thompson",
    },
    {
      id: 2,
      desc: "I love the variety on the menu. The spicy chicken burger was crispy and flavorful, and the fries were perfectly seasoned.",
      name: "Emily Rodriguez",
    },
    {
      id: 3,
      desc: "Great atmosphere and friendly staff. My kids enjoyed the meal and the milkshakes were a big hit!",
      name: "Jordan Patel",
    },
    {
      id: 4,
      desc: "Best burger joint in town! The veggie burger was surprisingly tasty and the service was quick.",
      name: "Morgan Harper",
    },
    {
      id: 5,
      desc: "Tried the double bacon burger and it exceeded my expectations. Will definitely come back for more!",
      name: "Jordan Morales",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div className="dark:bg-gray-900 dark:text-secondary">
      {/* heading  */}
      <h1 className="font-semibold text-4xl text-center text-secondary pt-24">
        Our Review
      </h1>

      {/* review card section  */}
      <div className=" py-10 mx-4 md:mx-0">
        <Slider {...settings}>
          {data.map((item) => (
            <ReviewCard key={item.id} name={item.name} desc={item.desc} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Review;
