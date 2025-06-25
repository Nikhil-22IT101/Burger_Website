const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

// Sample product data (in a real application, this would come from a database)
const products = [
  {
    id: 1,
    name: 'Classic Burger',
    price: 8.99,
    description: 'A juicy beef patty with lettuce, tomato, and special sauce',
    image: '/images/classic-burger.jpg'
  },
  {
    id: 2,
    name: 'Cheese Burger',
    price: 9.99,
    description: 'Classic burger with melted cheese',
    image: '/images/cheese-burger.jpg'
  },
  {
    id: 3,
    name: 'Double Burger',
    price: 12.99,
    description: 'Two beef patties with double cheese',
    image: '/images/double-burger.jpg'
  }
];

// @route   GET api/products
// @desc    Get all products
// @access  Public
router.get('/', (req, res) => {
  res.json(products);
});

// @route   GET api/products/:id
// @desc    Get product by ID
// @access  Public
router.get('/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  res.json(product);
});

// @route   POST api/products
// @desc    Create a product (admin only)
// @access  Private
router.post('/', auth, (req, res) => {
  const { name, price, description, image } = req.body;

  const newProduct = {
    id: products.length + 1,
    name,
    price,
    description,
    image
  };

  products.push(newProduct);
  res.json(newProduct);
});

// @route   PUT api/products/:id
// @desc    Update a product (admin only)
// @access  Private
router.put('/:id', auth, (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  const { name, price, description, image } = req.body;

  product.name = name || product.name;
  product.price = price || product.price;
  product.description = description || product.description;
  product.image = image || product.image;

  res.json(product);
});

// @route   DELETE api/products/:id
// @desc    Delete a product (admin only)
// @access  Private
router.delete('/:id', auth, (req, res) => {
  const productIndex = products.findIndex(p => p.id === parseInt(req.params.id));
  
  if (productIndex === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }

  products.splice(productIndex, 1);
  res.json({ message: 'Product removed' });
});

module.exports = router; 