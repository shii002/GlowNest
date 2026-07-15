import { FiSearch, FiHeart, FiShoppingCart, FiUser } from "react-icons/fi";

function Navbar() {
  return (
    <nav  className="bg-white shadow-md sticky top-0 py-4 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <h1 className="text-3xl font-bold text-pink-600">
          GlowNest
        </h1>

        {/* Search Box */}
        <div className="flex items-center bg-pink-50 rounded-full px-5 py-3 w-[450px]">
          <FiSearch className="text-gray-500" />
          <input
            type="text"
            placeholder="Search beauty products..."
            className="bg-transparent outline-none ml-2 w-full"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6 text-2xl">
          <FiHeart className="cursor-pointer" />
          <FiShoppingCart className="cursor-pointer" />
          <FiUser className="cursor-pointer" />
        </div>

      </div>
    </nav>
  );
}

export default Navbar;