import React, { useEffect } from 'react';
import previewImg from '../Assets/img/preview.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './AboutPreview.css'
const AboutPreview = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Text */}
          <div 
            className="col-md-6"
            data-aos="fade-right"
          >
            <h2>Thousands Of Customers Trust Our Company</h2>
            <p className="text-muted">
              We provide tailored financing solutions to businesses and individuals across sectors.
            </p>
            <a href="/about" className="btn btn-success mt-2">
              Learn More
            </a>
          </div>

          {/* Right Image */}
          <div 
            className="col-md-5 offset-md-1"
            data-aos="fade-left"
          >
            <img
              src={previewImg}
              className="img-fluid rounded shadow-sm"
              alt="About Preview"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutPreview;