import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
function Contact () {
    return (
        <section id="contact" class="py-16">
            <div class="container mx-auto px-4">
                <div class="max-w-4xl mx-auto rounded-lg shadow-lg overflow-hidden">
                    <div class="md:flex">
            <div class="md:w-1/2 p-8 bg-amber-50">
                <h2 class="text-3xl font-serif font-bold text-amber-900 mb-6">Visit Our Bakery</h2>
                <div class="mb-6">
                    <h3 class="text-lg font-medium text-amber-800 mb-2">Location</h3>
                    <p  class="text-amber-800">123 Sweet Avenue<br />Pastry District, PC 12345</p>
                </div>
                <div>
                    <h3  class="text-lg font-medium text-amber-800 mb-2">Hours</h3>
                    <p class="text-amber-800">Monday - Friday: 7am - 7pm <br />Saturday: 8am - 6pm <br /> Sunday: 9am - 4pm</p>
                </div>
                <div class="mb-6">
                    <h3 class="text-lg font-medium text-amber-800 mb-2">Contact Us</h3>
                    <p class="text-amber-700">Phone: (254) 123-4567<br />Email: hello@sugarspice.com</p>
                </div>
                <div class="flex space-x-4 mt-8">
                <a href="#" class="bg-amber-900 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-amber-500 transition duration-300">
                                <FaInstagram />
                            </a>
                            <a href="#" class="bg-amber-900 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-amber-500 transition duration-300">
                                <FaFacebook />
                            </a>
                            <a href="#" class="bg-amber-900 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-amber-500 transition duration-300">
                                <FaTwitter />
                            </a>
                </div>
            </div>
            <div class="md:w-1/2 bg-white p-8">
                <h2 class="text-2xl font-serif font-bold  text-amber-900 mb-6">Send Us a Message</h2>
                <form>
                    <div class="mb-4">
                        <label class="block  text-shadow-amber-800 text-sm font-medium mb-2" for="name">Name:</label>
                        <input class="w-full px-4 py-2 border border-amber-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-500" type="text" id="name" name="name" required />
                    </div>
                    <div class="mb-4">
                        <label class="block  text-shadow-amber-800 text-sm font-medium mb-2" for="email">Email:</label>
                        <input class="w-full px-4 py-2 border border-amber-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-500" type="email" id="email" name="email" required />
                    </div>
                    <div class="mb-4">
                        <label  class="block  text-shadow-amber-800 text-sm font-medium mb-2" for="message">Message:</label>
                        <textarea class="w-full px-4 py-2 border border-amber-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-brown-500" id="message" name="message" required></textarea>
                    </div>
                    <button class="w-full bg-brown-700 hover:bg-amber-700 text-shadow-black py-3 rounded-lg font-medium transition duration-300">Send Message</button>
                </form>
            </div>
            </div>
            </div>
            </div>
        </section>
    );
};

export default Contact;