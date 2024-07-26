import { reactive } from "vue";

const cart = reactive({
  items: [],
});

const addToCart = (product, quantity = 1) => {
  if (typeof product.size !== 'string' && product.size !== false) {
    throw new Error('Invalid size value');
  }

  const existingItem = cart.items.find(item => item.product.id === product.id);
  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.items.push({ product, quantity });
  }
};

const removeFromCart = (productId) => {
  const index = cart.items.findIndex(item => item.product.id === productId);
  if (index !== -1) {
    cart.items.splice(index, 1);
  }
};

const updateQuantity = (productId, quantity) => {
  const item = cart.items.find(item => item.product.id === productId);
  if (item) {
    item.quantity = quantity;
    if (item.quantity <= 0) {
      removeFromCart(productId);
    }
  }
};

const getCartTotal = () => {
  return cart.items.reduce((total, item) => total + item.product.price * item.quantity, 0);
};

export default {
  cart,
  addToCart,
  removeFromCart,
  updateQuantity,
  getCartTotal,
};