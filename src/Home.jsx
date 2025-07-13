import { useState } from 'react';

const featuredMetals = [
  {
    name: 'Copper',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=200&q=80',
    desc: 'High-quality copper scrap and ingots for industrial use.'
  },
  {
    name: 'Aluminum',
    img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=200&q=80',
    desc: 'Premium aluminum scrap and ingots, sourced globally.'
  },
  {
    name: 'Brass',
    img: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=200&q=80',
    desc: 'Durable brass scrap and ingots for decorative and industrial applications.'
  }
];

function Home() {
  return (
    <>
      <section>
        <h1>KPV Global Metals Inc.</h1>
        <h2>Specializing in Export of Non-Ferrous Metals</h2>
        <p>
          We are a global leader in the export of high-quality non-ferrous metals, committed to excellence, reliability, and sustainable business practices.
        </p>
      </section>
      <section>
        <h2>Featured Metals</h2>
        <div className="featured-metals">
          {featuredMetals.map((metal) => (
            <div className="metal-card" key={metal.name}>
              <img src={metal.img} alt={metal.name} />
              <h3>{metal.name}</h3>
              <p>{metal.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2>Why Choose Us?</h2>
        <ul className="why-choose-us">
          <li>Expertise in global non-ferrous metal trade</li>
          <li>Reliable sourcing and timely delivery</li>
          <li>Commitment to quality and sustainability</li>
          <li>Transparent and customer-focused approach</li>
        </ul>
      </section>
      <section>
        <h2>Our Trading Partners</h2>
        <div className="partner-card" style={{background:'#f0f6ff',padding:'1.2rem',borderRadius:'10px',maxWidth:'500px',margin:'0 auto',boxShadow:'0 2px 8px rgba(0,0,0,0.04)'}}>
          <h3>SP Electronics</h3>
          <p>
            We are proud to partner with <strong>SP Electronics</strong>, a leading company specializing in the trading and recycling of batteries. This partnership allows us to expand our reach and offer sustainable solutions in the battery sector, supporting a cleaner and greener future.
          </p>
        </div>
      </section>
    </>
  );
}

export default Home; 