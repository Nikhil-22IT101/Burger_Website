import React from "react";
import img1 from "../assets/img/menu2.jpg";
import img2 from "../assets/img/menu3.jpg";
import img3 from "../assets/img/menu4.jpg";
import SpecialMenuCard from "../layouts/SpecialMenuCard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const SpecialMenu = () => {
  const navigate = useNavigate();
  const handleAddBurger = ({ img, title, price }) => {
    const priceNum = Number(price.replace(/[^\d]/g, ""));
    const cartItem = {
      id: Date.now(),
      name: title,
      imgSrc: img,
      price: priceNum,
    };
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const updatedCart = [...existingCart, cartItem];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    toast.success(
      <div style={{display: 'flex', alignItems: 'center'}}>
        <span style={{fontSize: '2rem', marginRight: 12}}>🍔</span>
        <div>
          <div style={{fontWeight: 'bold', fontSize: '1.1rem'}}>Burger Added</div>
          <div style={{fontSize: '0.95rem'}}>{title} has been added to your cart.</div>
        </div>
      </div>,
      {
        position: "top-right",
        autoClose: 2200,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          background: '#22313a',
          color: '#fff',
          borderRadius: '10px',
          boxShadow: '0 2px 12px rgba(0,0,0,0.2)'
        }
      }
    );
    setTimeout(() => navigate('/cart'), 1200);
  };

  return (
    <div className="dark:bg-gray-900 dark:text-secondary">
      <ToastContainer />
      <div className=" min-h-screen flex flex-col justify-center items-center md:px-32 px-5 pt-16 md:pt-0">
        {/* heading  */}
        <h1 className=" font-semibold text-4xl text-center text-secondary my-8">
          Special Menu
        </h1>

        {/* card section  */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14 md:gap-5">
          <SpecialMenuCard img={img1} title="Delight Burger" price="₹120" onAdd={handleAddBurger} />
          <SpecialMenuCard img={img2} title="Jamboree Burger" price="₹140" onAdd={handleAddBurger} />
          <SpecialMenuCard img={img3} title="Serenade Burger" price="₹160" onAdd={handleAddBurger} />
        </div>
      </div>
    </div>
  );
};

export default SpecialMenu;
