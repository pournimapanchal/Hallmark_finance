import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import clockImg from '../Assets/img/clock.png';
import securityImg from '../Assets/img/security.png';
import quickApprovalImg from '../Assets/img/quick approval.png';
import lowInterestImg from '../Assets/img/low interest.png';
import personalSecurityImg from '../Assets/img/personal security.png';
import disbursementImg from '../Assets/img/disbursement.png';

const features = [
  { img: clockImg, title: 'Quick & Easy', desc: 'Typography should be relevant and thought out. Type is so strong that it can' },
  { img: securityImg, title: 'Absolute Security', desc: 'Typography should be relevant and thought out. Type is so strong that it can' },
  { img: quickApprovalImg, title: 'Quick Approval', desc: 'Typography should be relevant and thought out. Type is so strong that it can' },
  { img: lowInterestImg, title: 'Low Interest Rates', desc: 'Typography should be relevant and thought out. Type is so strong that it can' },
  { img: personalSecurityImg, title: 'Personal Security', desc: 'Typography should be relevant and thought out. Type is so strong that it can' },
  { img: disbursementImg, title: 'Disbursement Day', desc: 'Typography should be relevant and thought out. Type is so strong that it can' },
];

const WhyChooseUs = () => {

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true
    });
  }, []);

  return (
    <section className="py-5">
      <div className="container">

        <div className="text-center mb-5" data-aos="fade-up">
          <h2>Why People Choose Us</h2>
          <p>This question should make the viewer want to open the brochure to learn more.</p>
        </div>

        <div className="row">
          {features.map((feature, index) => (
            <div
              className="col-md-4 mb-4"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              <div className="card h-100 text-center border-0 shadow-sm p-3">
                <div className="my-3">
                  <img
                    src={feature.img}
                    alt={feature.title}
                    style={{ height: '60px' }}
                  />
                </div>

                <h5>{feature.title}</h5>

                <p className="text-muted">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;