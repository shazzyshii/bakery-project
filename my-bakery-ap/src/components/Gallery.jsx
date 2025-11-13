import { useState, useEffect } from 'react';
import galleryImage1 from '../assets/gallery-image1.jpg';
import galleryImage2 from '../assets/gallery-image2.jpg';
import galleryImage3 from '../assets/gallery-image3.jpg';
import galleryImage4 from '../assets/gallery-image4.jpg';
import galleryImage5 from '../assets/gallery-image5.jpg';
import galleryImage6 from '../assets/gallery-image6.jpg';
import galleryImage7 from '../assets/gallery-image7.jpg';
import galleryImage8 from '../assets/gallery-image8.jpg';
import galleryImage9 from '../assets/gallery-image9.jpg';
import { GalleryCard } from './Card.jsx';

function Gallery() {
    const galleryImages = [
        { src: galleryImage1, alt: "Bakery creation 1" },
        { src: galleryImage2, alt: "Bakery creation 2" },
        { src: galleryImage3, alt: "Bakery creation 3" },
        { src: galleryImage4, alt: "Bakery creation 4" },
        { src: galleryImage5, alt: "Bakery creation 5" },
        { src: galleryImage6, alt: "Bakery creation 6" },
        { src: galleryImage7, alt: "Bakery creation 7" },
        { src: galleryImage8, alt: "Bakery creation 8" },
        { src: galleryImage9, alt: "Bakery creation 9" }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Auto-advance slides
    useEffect(() => {
        if (!isAutoPlaying) return;

        const nextSlide = () => {
            setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
        };

        const interval = setInterval(() => {
            nextSlide();
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, [isAutoPlaying, galleryImages.length]);

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const handleImageClick = (imageData) => {
        console.log('Image clicked:', imageData);
        // You can implement lightbox or modal here
    };

    // Calculate visible slides for different screen sizes
    const getVisibleSlides = () => {
        const slides = [];
        const totalSlides = galleryImages.length;
        
        // Show 1 slide on mobile, 3 on tablet, 5 on desktop
        let slidesToShow = 1;
        if (window.innerWidth >= 768) slidesToShow = 3;
        if (window.innerWidth >= 1024) slidesToShow = 5;

        // Get current and adjacent slides for the loop effect
        for (let i = -2; i <= 2; i++) {
            const slideIndex = (currentSlide + i + totalSlides) % totalSlides;
            slides.push({
                ...galleryImages[slideIndex],
                index: slideIndex,
                position: i
            });
        }

        return slides.filter(slide => Math.abs(slide.position) <= Math.floor(slidesToShow / 2));
    };

    return (
        <section id="gallery" className="py-16 bg-white">
            <div className="container mx-auto">
                <h2 className="text-3xl font-serif font-bold text-center text-amber-950 mb-12">
                    Our Edible Art
                </h2>
                
                {/* Slider Container */}
                <div className="relative">
                    {/* Navigation Arrows */}
                    <button 
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-amber-950 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 -ml-4"
                        aria-label="Previous slide"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    
                    <button 
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-amber-950 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 -mr-4"
                        aria-label="Next slide"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Auto-play Toggle */}
                    <div className="absolute top-4 right-4 z-10">
                        <button 
                            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                            className="bg-white/80 hover:bg-white text-amber-950 px-3 py-2 rounded-full shadow-lg transition-all duration-300 text-sm font-medium"
                        >
                            {isAutoPlaying ? 'Pause' : 'Play'}
                        </button>
                    </div>

                    {/* Slides */}
                    <div className="flex justify-center items-center gap-4 px-8">
                        {getVisibleSlides().map((slide, index) => (
                            <div 
                                key={`${slide.index}-${index}`}
                                className={`transition-all duration-500 ${
                                    slide.position === 0 
                                        ? 'scale-105 opacity-100' 
                                        : 'scale-95 opacity-70'
                                }`}
                            >
                                <GalleryCard 
                                    image={slide.src}
                                    alt={slide.alt}
                                    onImageClick={handleImageClick}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Slide Indicators */}
                    <div className="flex justify-center mt-8 space-x-2">
                        {galleryImages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-10 h-3 rounded-full transition-all duration-300 ${
                                    index === currentSlide 
                                        ? 'bg-amber-700 scale-125' 
                                        : 'bg-amber-300 hover:bg-amber-500'
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Current Slide Counter */}
                    <div className="text-center mt-4 text-amber-700 font-medium">
                        {currentSlide + 1} / {galleryImages.length}
                    </div>
                </div>
                
                <div className="text-center mt-12">
                    <button className="border-2 border-orange-700 bg-orange-950 hover:bg-amber-800 text-white px-8 py-3 rounded-full text-lg font-medium transition duration-300">
                        View Full Gallery
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Gallery;