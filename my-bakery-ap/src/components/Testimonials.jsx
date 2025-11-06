import { MdOutlineStarPurple500 } from "react-icons/md";

function Testimonials () {
    return (
        <section>
            <div class="container mx-auto px-1 py-12 bg-orange-950">
                <h2 class="text-3xl font-serif font-bold text-white text-center mb-12">What Our Customers Say</h2>
                <div  class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div class="p-6 rounded-lg bg-stone-800">
                        <div class=" flex items-center mb-4">
                            <div class="text-yellow-400 mr-2">
                            <MdOutlineStarPurple500 />
                            </div>
                            <div class="text-yellow-400 mr-2">
                            <MdOutlineStarPurple500 />
                            </div>
                            <div class="text-yellow-400 mr-2">
                            <MdOutlineStarPurple500 />
                            </div>
                            <div class="text-yellow-400 mr-2">
                            <MdOutlineStarPurple500 />
                            </div>
                            <div class="text-yellow-400 mr-2">
                            <MdOutlineStarPurple500 />
                            </div>
                                <span class="text-white mr-5">5.0</span>
                        </div>
                            <p class="italic mb-4 text-white">"The most beautiful and delicious wedding cake I've ever seen! Elena captured our vision perfectly."</p>
                            <div class="flex items-center">
                                <img src="https://via.placeholder.com/50" alt="Customer 1" class="w-12 h-12 rounded-full mr-4"/>
                                <div>
                                    <p class="font-medium text-white">Sarah Johnson</p>
                                    <p class="text-sm text-gray-500">Wedding client</p>
                                </div>
                            </div>
                    </div>
                    <div class="bg-stone-800 p-6 rounded-lg">
                        <div class="flex items-center mb-4">
                        <div class="text-yellow-400 mr-2">
                            <MdOutlineStarPurple500 />
                            </div>
                            <div class="text-yellow-400 mr-2">
                            <MdOutlineStarPurple500 />
                            </div>
                            <div class="text-yellow-400 mr-2">
                            <MdOutlineStarPurple500 />
                            </div>
                            <div class="text-yellow-400 mr-2">
                            <MdOutlineStarPurple500 />
                            </div>
                            <div class="text-yellow-400 mr-2">
                            <MdOutlineStarPurple500 />
                            </div>
                                <span class="text-white">5.0</span>
                        </div>
                            <p class="italic mb-4 text-white">"I stop by every Saturday for their sourdough. It's the best bread I've found in the city!"</p>
                            <div class="flex items-center">
                                <img src="https://via.placeholder.com/50" alt="Customer 2" class="w-12 h-12 rounded-full mr-4"/>
                                <div>
                                    <p class="font-medium text-white">Michael Lee</p>
                                    <p class="text-sm text-gray-500">Regular customer</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;