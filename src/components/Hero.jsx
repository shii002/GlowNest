function Hero() {
  return (
    <section className="bg-pink-50 py-24">
      <div className="max-w-7xl mx-auto text-center">

        <h1 className="text-6xl font-bold text-pink-600">
          Discover Your Perfect Beauty ✨
        </h1>

        <p className="mt-6 text-xl text-gray-600">
          AI Powered Beauty & Skincare Shopping Experience
        </p>

        <div className="mt-10 flex justify-center gap-6">
          <button className="bg-pink-600 text-white px-8 py-3 rounded-full hover:bg-pink-700">
            Shop Now
          </button>

          <button className="border-2 border-pink-600 text-pink-600 px-8 py-3 rounded-full">
            Explore
          </button>
        </div>

      </div>
    </section>
  );
}

export default Hero;