function Hero() {
    return (
        <section  id="home" class="hero py-24 md:py-32">
            <div class="container mx-auto px-4 text-center">
                <h2  class="text-4xl text-amber-800 md:text-6xl font-serif font-bold mb-6">Indulgent, Elegant and Irresistible</h2>
                <p class="text-xl t text-amber-600 md:text-2xl mb-8 max-w-2xl mx-auto">where sweetness meets sophistication - discover the magic in every bite</p>
                <div class="flex flex-col md:flex-row justify-center gap-4">
                <button class="bg-white hover:bg-orange-800 text-shadow-black px-8 py-3 rounded-full font-medium transition duration-300">
                    Order Now
                </button>
                <button class="bg-white hover:bg-orange-800 text-black px-8 py-3 rounded-full font-medium transition duration-300">
                    View Menu
                </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;