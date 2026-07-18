import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />

        <div className="p-4">

          <h3 className="text-lg font-semibold">{product.name}</h3>

          <p className="text-pink-600 font-bold mt-2">₹{product.price}</p>

          <p className="text-yellow-500">⭐ {product.rating}</p>

          <button className="mt-4 w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700">
            Add to Cart
          </button>

        </div>

      </div>
    </Link>
  );
}

export default ProductCard;