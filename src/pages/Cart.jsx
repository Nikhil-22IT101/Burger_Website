import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Load cart items from localStorage
    const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(savedCart);
  }, []);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const handleRemoveItem = (itemId) => {
    const updatedCart = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-600 mb-4">
            <span className='text-red-500'>Your cart is empty</span>
            </p>
          <button
            onClick={() => navigate('/')}
            className="bg-sky-600 !text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors shadow"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="border rounded-lg p-4 flex justify-between items-start"
              >
                <div className="flex items-start gap-4">
                  {item.imgSrc && (
                    <img src={item.imgSrc} alt={item.name} className="w-20 h-20 object-cover rounded-md border" />
                  )}
                  <div>
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    {item.customization && (
                      <div className="text-sm text-gray-600 mt-2">
                        <p>Patty: {item.customization.patty}</p>
                        <p>Cheese: {item.customization.cheese}</p>
                        <p>Vegetables: {item.customization.vegetables.join(', ') || 'None'}</p>
                        <p>Sauces: {item.customization.sauces.join(', ') || 'None'}</p>
                        {item.customization.extras.length > 0 && (
                          <p>Extras: {item.customization.extras.join(', ')}</p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold">₹{item.price}</p>
                  <button
                    className="flex items-center justify-center gap-2 text-white font-bold px-4 py-2 rounded-lg mt-2 bg-gradient-to-r from-red-500 to-red-700 hover:from-red-700 hover:to-red-500 shadow-md transition-all duration-200 border border-red-400 min-w-[100px]"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    <FaTrash className="text-white" />
                    <span className="text-white">Remove</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t pt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-semibold">Total:</span>
              <span className="text-xl font-semibold">
                ₹{calculateTotal()}
              </span>
            </div>
            <button
              onClick={() => {
                if (cartItems.length > 0) navigate('/checkout');
              }}
              disabled={cartItems.length === 0}
              className={`w-full py-3 rounded-lg text-lg font-bold transition-colors shadow-md drop-shadow-sm ${cartItems.length === 0
                ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                : 'bg-gradient-to-r from-red-500 to-red-700 hover:from-red-700 hover:to-red-500 text-white'
                }`}
            >
              <span className="text-white">process to checkout</span>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
