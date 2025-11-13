
import heroBackground from '../assets/hero-bg.jpg';
function Hero() {
    
    return (
        <section 
            className="min-h-screen flex items-center justify-center text-center text-white relative"
        style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${heroBackground})`,
        backgroundSize: `cover`,
        backgroundPosition: `center`,
        backgroundRepeat: `no-repeat`,
        //background: 'rgba(0,0,0,0.6)' ,:
    }}
    >    
            <div className="container mx-auto py-16 px-4">
            <div className="max-w-2xl mx-auto">
                <h2  className="text-4xl text-amber-600 md:text-6xl font-serif font-bold mb-6">Indulgent, Elegant and Irresistible</h2>
                <p className=" mb-8 text-xl text-white md:text-2xl max-w-2xl mx-auto">where sweetness meets sophistication, discover the magic in every bite.</p>
                <div className="flex flex-col md:flex-row justify-center gap-4">
                <button className="bg-white hover:bg-orange-800 text-black px-8 py-3 rounded-full font-medium transition duration-300">
                    Order Now
                </button>
                </div>
            </div>
            </div>
        </section>
    );
};

export default Hero;