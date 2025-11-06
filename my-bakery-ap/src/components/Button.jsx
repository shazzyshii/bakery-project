import { PiShoppingCart } from "react-icons/pi";
function Button () {
    return (
        <div class="fixed bottom-6 right-6 z-40">
        <button class="floating bg-yellow-950 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-amber-800 transition duration-300">
            <PiShoppingCart size={33} />
        </button>
    </div>
    );
}

export default Button;