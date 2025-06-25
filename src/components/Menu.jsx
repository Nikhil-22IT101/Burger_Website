import React from "react";
import MenuCard from "../layouts/MenuCard";
import img1 from "../assets/img/menu1.png";
import img2 from "../assets/img/menu-2.png";
import img3 from "../assets/img/menu-3.png";
import img4 from "../assets/img/menu-4.png";
import img5 from "../assets/img/menu-5.png";
import img6 from "../assets/img/menu-6.png";
import img7 from "../assets/img/menu-7.png";
import img8 from "../assets/img/menu-8.png";
import img9 from "../assets/img/menu-9.png";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




const Menu = () => {
  const navigate = useNavigate();
  const menuItems = [
    {
      id: 1,
      title: "Classic Burger",
      price: "₹300",
      imgSrc: img1,
      description: "A timeless favorite with a juicy beef patty, crisp lettuce, fresh tomato, onions, pickles, and our signature sauce on a toasted bun."
    },
    {
      id: 2,
      title: "Cheese Blast",
      price: "₹350",
      imgSrc: img2,
      description: "Overflowing with gooey melted cheese, this burger features a double cheese patty, cheddar slices, and a creamy cheese sauce."
    },
    {
      id: 3,
      title: "Spicy Delight",
      price: "₹290",
      imgSrc: img3,
      description: "Turn up the heat with a spicy chicken patty, jalapeños, pepper jack cheese, and a fiery chipotle mayo."
    },
    {
      id: 4,
      title: "Crispy Chicken",
      price: "₹380",
      imgSrc: img4,
      description: "Golden-fried chicken breast, crunchy lettuce, tangy pickles, and creamy mayo on a soft sesame bun."
    },
    {
      id: 5,
      title: "Triple Chicken",
      price: "₹490",
      imgSrc: img5,
      description: "Three layers of tender chicken patties, fresh lettuce, tomato, and a zesty house sauce for the ultimate chicken lover."
    },
    {
      id: 6,
      title: "Double Chicken",
      price: "₹430",
      imgSrc: img6,
      description: "Double the delight with two crispy chicken fillets, cheese, lettuce, and a smoky barbecue sauce."
    },
    {
      id: 7,
      title: "Double Cheese Burger",
      price: "₹400",
      imgSrc: img7,
      description: "A cheesy masterpiece with two beef patties, double cheese, caramelized onions, and tangy burger sauce."
    },
    {
      id: 8,
      title: "Korean Chilli Chicken",
      price: "₹350",
      imgSrc: img8,
      description: "Crispy chicken tossed in spicy Korean chili glaze, topped with slaw and sesame seeds for an Asian twist."
    },
    {
      id: 9,
      title: "Peri Peri Chicken",
      price: "₹320",
      imgSrc: img9,
      description: "Succulent grilled chicken marinated in peri peri spices, with lettuce, tomato, and a tangy peri peri mayo."
    }
  ];

  const handleAddBurger = (id) => {
    const burger = menuItems.find(item => item.id === id);
    const price = Number(burger.price.replace(/[^\d]/g, ""));
    const cartItem = { ...burger, price, name: burger.title };
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    const updatedCart = [...existingCart, cartItem];
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    toast.success(
      <div style={{display: 'flex', alignItems: 'center'}}>
        <span style={{fontSize: '2rem', marginRight: 12}}>🍔</span>
        <div>
          <div style={{fontWeight: 'bold', fontSize: '1.1rem'}}>Burger Added</div>
          <div style={{fontSize: '0.95rem'}}>{burger.title} has been added to your cart.</div>
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
    <>
      <ToastContainer />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <MenuCard
            key={item.id}
            id={item.id}
            title={item.title}
            price={item.price}
            imgSrc={item.imgSrc}
            description={item.description}
            onAdd={handleAddBurger}
          />
        ))}
      </div>
    </>
  );
};

export default Menu;