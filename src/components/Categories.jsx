function Categories() {
  const categories = [
    {
      id: 1,
      name: "Makeup",
      emoji: "💄",
    },
    {
      id: 2,
      name: "Skincare",
      emoji: "🧴",
    },
    {
      id: 3,
      name: "Hair Care",
      emoji: "💇",
    },
    {
      id: 4,
      name: "Fragrance",
      emoji: "🌸",
    },
    {
      id: 5,
      name: "Nail Care",
      emoji: "💅",
    },
    {
      id: 6,
      name: "Bath & Body",
      emoji: "🛁",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-pink-600 mb-10">
          Shop By Category
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">

          {categories.map((item) => (
            <div
              key={item.id}
              className="bg-pink-50 rounded-2xl p-6 text-center shadow hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer"
            >
              <div className="text-5xl mb-3">
                {item.emoji}
              </div>

              <h3 className="font-semibold">
                {item.name}
              </h3>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Categories;