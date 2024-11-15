import React, { useState } from 'react';
import { useRouter } from 'next/router'; // Import the useRouter hook from Next.js
import Header from './Header'

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '', // Added phone number to form data
        message: '',
    });
    const [toastVisible, setToastVisible] = useState(false);
    const router = useRouter(); // Initialize the useRouter hook for navigation

    // Handle form field changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission success
        setToastVisible(true);
        setTimeout(() => {
            setToastVisible(false);
            router.push('/'); // Redirect to the home page after the toast disappears
        }, 3000); // Hide the toast after 3 seconds
        // Reset form data
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    return (
        <div
            className="bg-cover bg-center min-h-screen p-6 flex items-center justify-center"
            style={{
                backgroundImage: "url('https://www.helpersfoundation.org/wp-content/uploads/2022/03/Education-in-Africa.jpg')",
            }}
        >
            {/* Toast Notification */}
            {toastVisible && (
                <div className="fixed top-5 right-5 bg-green-500 text-white py-3 px-6 rounded-lg shadow-lg text-sm font-medium transition-opacity duration-500 opacity-100">
                    <p>Successfully sent! Thanks for contacting us.</p>
                </div>
            )}
            <Header />
            {/* Card container */}
            <div className="max-w-lg w-full bg-white bg-opacity-80 p-8 rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105 duration-300">
                <h2 className="text-4xl font-semibold text-center text-blue-600 mb-8">Contact Us</h2>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="mb-4">
                        <label className="block text-lg font-medium text-gray-800">Your Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-200"
                            placeholder="Enter your name"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-lg font-medium text-gray-800">Your Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-200"
                            placeholder="Enter your email"

                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-lg font-medium text-gray-800">Your Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-200"
                            placeholder="Enter your phone number"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-lg font-medium text-gray-800">Your Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            rows="6"
                            className="w-full p-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 transition-all duration-200"
                            placeholder="Write your message here"
                            required
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transform transition-all duration-200"
                        >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactPage;
