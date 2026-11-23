import React from 'react';
import counter1 from '../Assets/img/counter-1.png';
import counter2 from '../Assets/img/counter-2.png';
import counter3 from '../Assets/img/counter-3.png';
import counter4 from '../Assets/img/counter-4.png';

const counters = [
  { img: counter1, label: 'Successful Loan Approval' },
  { img: counter2, label: 'Customer Satisfaction' },
  { img: counter3, label: 'Office National Partners' },
  { img: counter4, label: 'Award Certificate' },
];

const Counters = () => {
  return (
    <section className="py-5 bg-light d-flex justify-content-around flex-wrap text-center">
      {counters.map((counter, index) => (
        <div className="counter-box mb-4" key={index}>
          <img 
            src={counter.img} 
            alt={counter.label} 
            style={{ width: '80px', height: '80px' }}
          />
          <p className="mt-2">{counter.label}</p>
        </div>
      ))}
    </section>
  );
};

export default Counters;