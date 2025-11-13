import aboutImage from '../assets/about-image.jpg';

function About () {
        
    return (
        <section id="about" className="py-16">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                    {/* ADDED: Image section */}
                    <div className="md:w-1/2 mb-10 md:mb-0">
                        <img 
                            src={aboutImage} 
                            alt="Sugar & Spice Art Bakery interior" 
                            className="rounded-lg shadow-lg w-full h-80 object-cover"
                        />
                    </div>
                    <div className="md:w-1/2 md:pl-12">
                        <h2 className="text-3xl font-serif font-bold text-orange-950 mb-6">Our Story</h2>
                        <p className="text-orange-800 mb-4">At Sugar & Spice Art Bakery, we believe that baking is an art form. Each creation is carefully crafted with the finest ingredients and an artistic touch.</p>
                        <p className="text-orange-800 mb-4">Since 2015, our bakery has become a local favorite for those who appreciate the marriage of exceptional flavor and beautiful design.</p>
                        <p className="text-orange-800 mb-4">From custom cakes to artisanal pastries, every item we create is a testament to our passion for baking and our commitment to quality.</p>
                        <p className="text-orange-800 mb-4">Join us on a journey of taste and creativity, and let Sugar & Spice Art Bakery be a part of your special moments.</p>
                        <div className="flex items-center mt-8"></div> 
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;