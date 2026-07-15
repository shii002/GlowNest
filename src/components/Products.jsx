import ProductCard from "./ProductCard";

function Products() {
  const products = [
    {
      id: 1,
      name: "Lakme Lipstick",
      price: 499,
      rating: 4.5,
      image: "https://picsum.photos/300/400?random=1",
    },
    {
      id: 2,
      name: "Mamaearth Face Wash",
      price: 299,
      rating: 4.7,
      image: "https://picsum.photos/300/400?random=2",
    },
    {
      id: 3,
      name: "Minimalist Serum",
      price: 599,
      rating: 4.8,
      image: "https://picsum.photos/300/400?random=3",
    },
    {
      id: 4,
      name: "Maybelline Mascara",
      price: 699,
      rating: 4.6,
      image: "https://picsum.photos/300/400?random=4",
    },
  ];

  return (
    <section className="py-16 bg-pink-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-pink-600 mb-10">
          Trending Products
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default Products;