function Features () {
    return (
        <section id="products" class="py-16 bg-white">
            <div class="container mx-auto px-4">
                <h2 class="text-3xl font-serif font-bold text-center text-orange-950 mb-12">Our Signature Creations</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* //  product 1 */}
            <div class="p-6">
                <h3 class="text-xl font-serif font-bold text-orange-950 mb-2">Decadent Chocolate Cake</h3>
                <p class="text-shadow-amber-800 mb-4">Rich, moist chocolate layers with silky ganache</p>
            </div>
            <div class="flex justify-between items-center">
                <span class="text-orange-950 font-bold text-lg">$42</span>
                <button class="bg-yellow-950 hover:bg-amber-800 text-white px-4 py-2 rounded-full text-sm transition duration-300">
                    Add to Cart
                </button>
            </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* // product 2 */}
            <div class="p-6">
                <h3 class="text-xl font-serif font-bold text-orange-950 mb-2">Sourdough Artisan Bread</h3>
                <p class="text-shadow-amber-800 mb-4">Crispy crust with a soft, airy interior</p>
            </div>
            <div class="flex justify-between items-center">
                <span class="text-orange-950 font-bold text-lg">
                    $8
                    </span>
                <button class="bg-yellow-950 hover:bg-amber-800 text-white px-4 py-2 rounded-full text-sm transition duration-300">
                    Add to Cart
                </button>
                </div>
                </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* // product 3 */}
            <div class="p-6">
                <h3 class="text-xl font-serif font-bold text-orange-950 mb-2">Fresh Fruit Tart</h3>
                <p class="text-shadow-amber-800 mb-4">Buttery crust filled with custard and topped with seasonal fruits</p>
            </div>
            <div class="flex justify-between items-center">
                <span class="text-orange-950 font-bold text-lg">$30</span>
                <button class="bg-yellow-950 hover:bg-amber-800 text-white px-4 py-2 rounded-full text-sm transition duration-300">
                    Add to Cart
                </button>
            </div>
            </div>
            <div class="text-center mt-12">
                <button class="border-2 border-orange-700  bg-orange-950 hover:bg-amber-800 text-white px-8 py-3 rounded-full text-lg font-medium transition duration-300">
                    View All Products
                </button>
            </div>
        </section>
    );
};

export default Features;