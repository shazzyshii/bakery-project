
function Footer() {
    return (
        <footer className="bg-yellow-950">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center w-full">
                    <h2 className="text-amber-50 text-2xl font-serif font-bold">Sugar & Spice</h2>
                    <p className="text-gray-500 mt-2">Art Bakery since 2015</p>
                </div>
                <div className="flex space-x-7">
                    <a href="#" className="text-gray-500 hover:text-white transition duration-300">Privacy Policy</a> 
                    <a href="#" className="text-gray-500 hover:text-white transition duration-300">Terms of Service</a>|
                    <a href="#" className="text-gray-500 hover:text-white transition duration-300">FAQ</a>
                </div>
                <div class="border-t border-gray-400 mt-10 pt-15 text-center text-gray-300">
                    <p>&copy; 2024 Sugar & Spice Art Bakery. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;