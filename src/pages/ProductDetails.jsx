import { useParams } from "react-router-dom";
import products from "../data/products";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductDetails() {
  const { addToCart } = useContext(CartContext);


const { id } = useParams();

const product = products.find(
  (item) => item.id === Number(id)
);

if (!product) {
  return <h1>Product Not Found</h1>;
}
  return (
  <div className="max-w-6xl mx-auto px-6 py-12">
    <div className="grid md:grid-cols-2 gap-10">

      <img
        src={product.image}
        alt={product.name}
        className="rounded-2xl w-full"
      />

      <div>
        <h1 className="text-4xl font-bold">
          {product.name}
        </h1>

        <p className="text-pink-600 text-2xl mt-4">
          ₹{product.price}
        </p>

        <p className="text-yellow-500 mt-2">
          ⭐ {product.rating}
        </p>

        <button
  onClick={() => addToCart(product)}
  className="mt-6 bg-pink-600 text-white px-6 py-3 rounded-lg"
>
  Add to Cart
</button>
      </div>

    </div>
  </div>
);}
export default ProductDetails;