import { useState } from 'react';



function Header() {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignUpModal, setShowSignUpModal] = useState(false);
    const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    confirmPassword: ''
    });

  // Function to handle login button click
    const handleLogin = () => {
    setShowLoginModal(true);
    setShowSignUpModal(false);
    };

  // Function to handle sign up button click
    const handleSignUp = () => {
    setShowSignUpModal(true);
    setShowLoginModal(false);
    };

  // Function to handle form input changes
    const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
        ...prevState,
        [name]: value
    }));
    };

  // Function to handle login form submission
    const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Login data:', {
        email: formData.email,
        password: formData.password
    });
    
    // Here you would typically send data to your backend
    alert('Login successful!');
    setShowLoginModal(false);
    setFormData({ email: '', password: '', firstName: '', lastName: '', confirmPassword: '' });
    };

  // Function to handle sign up form submission
    const handleSignUpSubmit = (e) => {
    e.preventDefault();
    console.log('Sign up data:', formData);
    
    // Here you would typically send data to your backend
    if (formData.password !== formData.confirmPassword) {
        alert("Passwords don't match!");
        return;
    }
    
    alert('Account created successfully!');
    setShowSignUpModal(false);
    setFormData({ email: '', password: '', firstName: '', lastName: '', confirmPassword: '' });
    };

  // Function to close modals
    const closeModals = () => {
    setShowLoginModal(false);
    setShowSignUpModal(false);
    setFormData({ email: '', password: '', firstName: '', lastName: '', confirmPassword: '' });
    };

    return (
    <>
        <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <div className="flex items-center">
            <h1 className="text-2xl font-serif font-bold text-orange-950">Sugar & Spice</h1>
            <span className="text-xs font-serif text-amber-800 ml-1">Art Bakery</span>
            </div>
            
            <div>
            <nav className="hidden md:flex space-x-8">  
                <a href="/home" className="text-amber-900 hover:text-amber-600 font-medium">Home</a>
                <a href="/about" className="text-amber-900 hover:text-amber-600 font-medium">About Us</a>
                <a href="/products" className="text-amber-900 hover:text-amber-600 font-medium">Products</a>
                <a href="/gallery" className="text-amber-900 hover:text-amber-600 font-medium">Gallery</a>
                <a href="/contact" className="text-amber-900 hover:text-amber-600 font-medium">Contact</a>
            </nav>
            </div>
            
            <div className="flex items-center space-x-4">
            <button 
                onClick={handleSignUp}
                className="bg-white hover:bg-amber-600 text-black hover:text-white px-4 py-2 rounded-full transition duration-300 border border-amber-600"
            >
                Sign Up
            </button>
            
            <button 
                onClick={handleLogin}
                className="bg-white hover:bg-amber-600 text-black hover:text-white px-4 py-2 rounded-full transition duration-300 border border-amber-600"
            >
                Log in
            </button>

            </div>
        </div>
        </header>

      {/* Login Modal */}
        {showLoginModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold text-amber-900 mb-6">Login to Your Account</h2>
            <form onSubmit={handleLoginSubmit}>
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                />
                </div>
                
                <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                />
                </div>
                
                <div className="flex justify-between space-x-4">
                <button
                    type="button"
                    onClick={closeModals}
                    className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded transition duration-300"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded transition duration-300"
                >
                    Login
                </button>
                </div>
            </form>
            
            <p className="text-center mt-4 text-sm text-gray-600">
                Don't have an account?{' '}
                <button
                onClick={() => { setShowLoginModal(false); setShowSignUpModal(true); }}
                className="text-amber-600 hover:text-amber-700 font-medium"
                >
                Sign up here
                </button>
            </p>
            </div>
        </div>
        )}

      {/* Sign Up Modal */}
        {showSignUpModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-opacity-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96 max-h-[90vh] overflow-y-auto">
            <h2 className="text-2xl font-bold text-amber-900 mb-6">Create an Account</h2>
            <form onSubmit={handleSignUpSubmit}>
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                    First Name
                </label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                />
                </div>
                
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                    Last Name
                </label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                />
                </div>
                
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="signupEmail">
                    Email
                </label>
                <input
                    type="email"
                    id="signupEmail"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                />
                </div>
                
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="signupPassword">
                    Password
                </label>
                <input
                    type="password"
                    id="signupPassword"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                />
                </div>
                
                <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                    Confirm Password
                </label>
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                    required
                />
                </div>
                
                <div className="flex justify-between space-x-4">
                <button
                    type="button"
                    onClick={closeModals}
                    className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded transition duration-300"
                >
                    Cancel
                </button>
                <button
                    type="submit"
                    className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded transition duration-300"
                >
                    Sign Up
                </button>
                </div>
            </form>
            
            <p className="text-center mt-4 text-sm text-gray-600">
                Already have an account?{' '}
                <button
                onClick={() => { setShowSignUpModal(false); setShowLoginModal(true); }}
                className="text-amber-600 hover:text-amber-700 font-medium"
                >
                Login here
                </button>
            </p>
            </div>
        </div>
        )}
    </>
    );
}

export default Header;