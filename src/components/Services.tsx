import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const Services: React.FC = () => {
  const [ref, isVisible] = useIntersectionObserver();

  const services = [
    {
      title: 'Wedding Photography',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    },
    {
      title: 'Prewedding Shoots',
      image: 'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    },
    {
      title: 'Maternity Photography',
      image: 'https://images.pexels.com/photos/1556901/pexels-photo-1556901.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    },
    {
      title: 'Family Portraits',
      image: 'https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    },
    {
      title: 'Party Photography',
      image: 'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    },
    {
      title: 'Corporate Events',
      image: 'https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    },
    {
      title: 'Seminars & Conferences',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    },
    {
      title: 'Model Shoots',
      image: 'https://images.pexels.com/photos/1845288/pexels-photo-1845288.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1',
    },
  ];

  return (
    <section ref={ref} id="services" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            Our Services
          </h2>
          <p className="font-inter text-lg text-slate-600 max-w-2xl mx-auto">
            From intimate moments to grand celebrations, we capture it all with 
            artistic vision and professional excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group cursor-pointer transition-all duration-700 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="font-playfair text-xl font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {service.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;