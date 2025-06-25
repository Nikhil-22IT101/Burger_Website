import React from "react";

const MenuCard = ({ id, title, price, imgSrc, description, onAdd }) => {
  return (
    <div
      className="group relative space-y-2 p-4 bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-md cursor-pointer hover:bg-primary transition duration-300 ease-in-out"
      key={id}
    >
      <img
        className="absolute w-40 -right-6 sm:-right-14 bottom-0 mr-2 group-hover:-translate-y-8 transition duration-300 ease-in-out"
        src={imgSrc}
        alt="burger"
      />
      <h1 className="font-semibold text-2xl text-primary group-hover:text-black">
        {title}
      </h1>
      <p>{description}</p>
      <h3 className="font-semibold text-2xl text-secondary">{price}</h3>
      <button
        className="mt-2 px-4 py-2 bg-red-500 text-white rounded hover:bg-secondary transition"
        onClick={() => onAdd ? onAdd(id) : alert(`${title} ordered!`)}
      >
        Add Burger
      </button>
    </div>
  );
};

export default MenuCard;
