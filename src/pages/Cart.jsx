import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const {
  cartItems,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} = useContext(CartContext);
const totalPrice = cartItems.reduce(
  (total, item) => total + item.price * item.quantity,
  0
);
if (cartItems.length === 0) {
  return (
    <div className="max-w-6xl mx-auto p-10 text-center">
      <h1 className="text-4xl font-bold">🛒 Your Cart is Empty</h1>

      <p className="mt-4 text-gray-500">
        Looks like you haven't added anything yet.
      </p><Link to="/">
  <button className="mt-6 bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700">
    Continue Shopping
  </button>
</Link>
    </div>
  );
}
  return (
  <div className="max-w-6xl mx-auto p-6">
    <h1 className="text-4xl font-bold mb-6">Cart Page</h1>

    <p className="mb-6">Total Items: {cartItems.length}</p>
    

    {cartItems.map((item) => (
      <div
        key={item.id}
        className="flex items-center gap-6 border rounded-xl p-4 mb-4"
      >
        <img
          src={item.image}
          alt={item.name}
          className="w-28 h-28 object-cover rounded-lg"
        />

        <div>
          <h2 className="text-xl font-bold">{item.name}</h2>
          <p className="text-pink-600 font-bold">₹{item.price}</p>
          <p className="mt-2 font-semibold">
            
  Quantity: {item.quantity}
</p>
<div className="flex items-center gap-3 mt-3">
  <button
  onClick={() => decreaseQuantity(item.id)}
  className="bg-pink-500 text-white px-3 py-1 rounded"
>
  -
</button>

<span>{item.quantity}</span>

<button
  onClick={() => increaseQuantity(item.id)}
  className="bg-pink-500 text-white px-3 py-1 rounded"
>
  +
</button><button
  onClick={() => {
  if (window.confirm("Remove this item from cart?")) {
    removeFromCart(item.id);
  }
}}
  className="mt-4 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
>
  Remove
</button>
</div>
          <p>⭐ {item.rating}</p>
          <div className="mt-8 border-t pt-6">
  <h2 className="text-2xl font-bold">
    Total: ₹{totalPrice}
  </h2>

  <button className="mt-4 bg-pink-600 text-white px-6 py-3 rounded-lg hover:bg-pink-700">
    Proceed to Checkout
  </button>
</div>
          
        </div>
      </div>
    ))}
  </div>
  
);}

export default Cart;