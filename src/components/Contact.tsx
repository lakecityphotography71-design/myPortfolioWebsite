import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNumber: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Send email using Email.js
    emailjs.send(
      'lakecityphotography',
      'template_y9kpi2h',
      {
        name: formData.name,
        email: formData.email,
        contactNumber: formData.contactNumber,
        message: formData.message,
      },
      '30gOXNLgSa9kNZpnk'
    )
    .then(() => {
      // WhatsApp message format
      const whatsappNumber = '919983832968'; // admin number, no +
      const text =
        `Name: ${formData.name}%0A` +
        `Email: ${formData.email}%0A` +
        `Contact Number: ${formData.contactNumber}%0A` +
        `Message: ${formData.message}`;
      window.open(`https://wa.me/${whatsappNumber}?text=${text}`, '_blank');
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', contactNumber: '', message: '' });
    })
    .catch(() => {
      alert('Failed to send message. Please try again later.');
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="py-24 px-6 bg-gradient-to-br from-white via-stone-50 to-slate-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-200 to-stone-200"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Let's Create Together
          </h2>
          <p className="font-inter text-lg text-slate-600 max-w-2xl mx-auto">
            Ready to capture your special moments? Get in touch with us to discuss 
            your photography needs and let's create something beautiful together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block font-inter text-sm font-medium text-slate-700 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-300 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-inter text-sm font-medium text-slate-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-300 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                />
              </div>

                <div>
                  <label
                    htmlFor="contactNumber"
                    className="block font-inter text-sm font-medium text-slate-700 mb-2"
                  >
                    Contact Number
                  </label>
                  <input
                    type="tel"
                    id="contactNumber"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    pattern="[6-9]{1}[0-9]{9}"
                    maxLength={10}
                    minLength={10}
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-300 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
                    placeholder="Enter 10-digit mobile number"
                  />
                </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-inter text-sm font-medium text-slate-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-slate-300 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-slate-800 text-white py-3 px-6 rounded-xl hover:bg-slate-700 transition-colors duration-200 font-inter font-medium"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-slate-600 mt-1" />
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-slate-800 mb-2">
                    Address
                  </h3>
                  <p className="font-inter text-slate-600">
                    Kumharo Ka Bhatta,<br />
                    Udaipur,<br />
                    Rajasthan , INDIA
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-slate-600 mt-1" />
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-slate-800 mb-2">
                    Phone
                  </h3>
                  <p className="font-inter text-slate-600">+91 9983832968</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-slate-600 mt-1" />
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-slate-800 mb-2">
                    Email
                  </h3>
                  <p className="font-inter text-slate-600">lakecityphotography71@gmail.com</p>
                </div>
              </div>

              <div className="pt-8">
                <h3 className="font-playfair text-xl font-semibold text-slate-800 mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.instagram.com/lakecity_photography"
                    className="p-3 bg-white/50 backdrop-blur-sm border border-slate-200 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-200"
                  >
                    <Instagram className="w-6 h-6 text-slate-600" />
                  </a>
                  {/* <a
                    href="#"
                    className="p-3 bg-white/50 backdrop-blur-sm border border-slate-200 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-200"
                  >
                    <Mail className="w-6 h-6 text-slate-600" />
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;