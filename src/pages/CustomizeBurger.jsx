import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import menu2Img from '../assets/img/menu2.jpg';

const CustomizeBurger = () => {
  const navigate = useNavigate();
  const [customization, setCustomization] = useState({
    patty: '',
    cheese: '',
    vegetables: [],
    sauces: [],
    extras: []
  });

  const prices = {
    patty: {
      beef: 150,
      chicken: 130,
      veggie: 120
    },
    cheese: {
      cheddar: 30,
      swiss: 40,
      american: 35,
      'pepper jack': 45
    },
    vegetables: {
      lettuce: 10,
      tomato: 15,
      onion: 10,
      pickles: 10,
      jalapenos: 20
    },
    sauces: {
      ketchup: 5,
      mayonnaise: 5,
      mustard: 5,
      bbq: 10,
      ranch: 10
    },
    extras: {
      bacon: 40,
      avocado: 50,
      mushrooms: 30,
      pineapple: 25
    }
  };

  const pattyOptions = ['beef', 'chicken', 'veggie'];
  const cheeseOptions = ['cheddar', 'swiss', 'american', 'pepper jack'];
  const vegetableOptions = ['lettuce', 'tomato', 'onion', 'pickles', 'jalapenos'];
  const sauceOptions = ['ketchup', 'mayonnaise', 'mustard', 'bbq', 'ranch'];
  const extraOptions = ['bacon', 'avocado', 'mushrooms', 'pineapple'];

  const handleOptionChange = (category, value) => {
    if (Array.isArray(customization[category])) {
      setCustomization(prev => ({
        ...prev,
        [category]: prev[category].includes(value)
          ? prev[category].filter(item => item !== value)
          : [...prev[category], value]
      }));
    } else {
      setCustomization(prev => ({ ...prev, [category]: value }));
    }
  };

  const calculateTotal = () => {
    let total = 0;
    if (customization.patty) total += prices.patty[customization.patty];
    if (customization.cheese) total += prices.cheese[customization.cheese];
    customization.vegetables.forEach(veg => (total += prices.vegetables[veg]));
    customization.sauces.forEach(sauce => (total += prices.sauces[sauce]));
    customization.extras.forEach(extra => (total += prices.extras[extra]));
    return total;
  };

  const handleAddToCart = () => {
    const customBurger = {
      id: Date.now(),
      name: 'Custom Burger',
      price: calculateTotal(),
      customization: { ...customization },
      imgSrc: menu2Img
    };
    const existingCart = JSON.parse(localStorage.getItem('cart') || '[]');
    localStorage.setItem('cart', JSON.stringify([...existingCart, customBurger]));
    navigate('/cart');
  };

  const renderOptionButtons = (options, category) => {
    return options.map(option => {
      const isSelected = Array.isArray(customization[category])
        ? customization[category].includes(option)
        : customization[category] === option;

      const price =
        prices[category] && prices[category][option] !== undefined
          ? prices[category][option]
          : 0;

      return (
        <button
          key={option}
          onClick={() => handleOptionChange(category, option)}
          className={`px-4 py-2 rounded font-semibold transition-all duration-200 min-w-[120px]
            ${isSelected
              ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-md scale-105'
              : 'bg-gradient-to-r from-blue-100 to-yellow-200 text-blue-900 hover:from-yellow-300 hover:to-pink-200 hover:text-black hover:shadow-md hover:scale-105'
            }`}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)} (₹{price})
        </button>
      );
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Customize Your Burger</h1>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-3">Choose Your Patty</h2>
          <div className="flex gap-4 flex-wrap">
            {renderOptionButtons(pattyOptions, 'patty')}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Choose Your Cheese</h2>
          <div className="flex gap-4 flex-wrap">
            {renderOptionButtons(cheeseOptions, 'cheese')}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Add Vegetables</h2>
          <div className="flex gap-4 flex-wrap">
            {renderOptionButtons(vegetableOptions, 'vegetables')}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Add Sauces</h2>
          <div className="flex gap-4 flex-wrap">
            {renderOptionButtons(sauceOptions, 'sauces')}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">Add Extras</h2>
          <div className="flex gap-4 flex-wrap">
            {renderOptionButtons(extraOptions, 'extras')}
          </div>
        </div>

        <div className="text-2xl font-bold text-right mt-6">
          Total: ₹{calculateTotal()}
        </div>

        <button
          className="w-full bg-red-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors"
          onClick={handleAddToCart}
        >
          <span className="text-white">Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default CustomizeBurger;
