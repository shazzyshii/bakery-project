import { PiShoppingCart } from "react-icons/pi";
import { FaBars } from "react-icons/fa6";
const Header = () => {
    return (
        <header className="sticky top-0 z-50 bg-white shadow-md">
            <div  className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center">
                    <h1 className="text-2xl font-serif font-bold text-orange-950 ">Sugar & Spice </h1>
                    <span className="text-xs font-serif text-shadow-amber-800 ml-1">Art Bakery</span>
                </div>
                <div>
                    <nav className="hidden md:flex space-x-8 ">  
                    <li><a href="/home" className="text-amber-900 hover:text-amber-600 font-medium">Home</a></li>
                    <li><a href="/about" className="text-amber-900 hover:text-amber-600 font-medium">About Us</a></li>
                    <li><a href="/products" className="text-amber-900 hover:text-amber-600 font-medium">Products</a></li>
                    <li><a href="/gallery" className="text-amber-900 hover:text-amber-600 font-medium">Gallery</a></li>
                    <li><a href="/contact" className="text-amber-900 hover:text-amber-600 font-medium">Contact</a></li>
                    </nav>
                </div>
                <div className="bg-white hover:bg-amber-600 text-black rounded full ">Sign Up</div>
                <div className="bg-white hover:bg-amber-600 text-black rounded full">Log in</div>
            </div>
            <div className="flex items-center space-x-4">
                <button className="text-amber-900 hover:text-amber-500">
                    <PiShoppingCart size={28} />
                </button>
                <button className="md:hidden text-amber-900">
                    <FaBars size={28} />
                </button>
            </div>
        </header>
    );

};

export default Header;