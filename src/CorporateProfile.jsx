import { useState } from 'react';

const slideshowImages = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80', // Scrap metal pile
  'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80', // Scrap metal yard
  'https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=800&q=80', // Container loading
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80', // Shipping containers
];

function CorporateProfile() {
  const [slide, setSlide] = useState(0);
  const nextSlide = () => setSlide((slide + 1) % slideshowImages.length);
  const prevSlide = () => setSlide((slide - 1 + slideshowImages.length) % slideshowImages.length);

  return (
    <section>
      <div className="slideshow-container" style={{position:'relative',maxWidth:'800px',margin:'0 auto 1.5rem auto'}}>
        <img
          src={slideshowImages[slide]}
          alt={`Scrapping process ${slide + 1}`}
          style={{width:'100%',maxHeight:'260px',objectFit:'cover',borderRadius:'10px'}}
        />
        <button
          className="slideshow-arrow left"
          onClick={prevSlide}
          aria-label="Previous slide"
          style={{position:'absolute',top:'50%',left:'10px',transform:'translateY(-50%)',background:'#fff',border:'none',borderRadius:'50%',width:'36px',height:'36px',boxShadow:'0 2px 8px rgba(0,0,0,0.08)',cursor:'pointer',fontSize:'1.5rem',opacity:0.7}}
        >&#8592;</button>
        <button
          className="slideshow-arrow right"
          onClick={nextSlide}
          aria-label="Next slide"
          style={{position:'absolute',top:'50%',right:'10px',transform:'translateY(-50%)',background:'#fff',border:'none',borderRadius:'50%',width:'36px',height:'36px',boxShadow:'0 2px 8px rgba(0,0,0,0.08)',cursor:'pointer',fontSize:'1.5rem',opacity:0.7}}
        >&#8594;</button>
        <div style={{position:'absolute',bottom:'10px',left:'50%',transform:'translateX(-50%)',display:'flex',gap:'6px'}}>
          {slideshowImages.map((_, idx) => (
            <span key={idx} style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',background:slide===idx?'#0077b6':'#ccc',opacity:0.7}}></span>
          ))}
        </div>
      </div>
      <h1>Corporate Profile</h1>
      <p>
        <strong>KPV Global Metals Inc.</strong> is a leading international exporter of non-ferrous metals, headquartered in Mississauga, Ontario, Canada. We serve clients across the globe, providing reliable sourcing, processing, and delivery of high-quality metals for a wide range of industries.
      </p>
      <p>
        Our company is built on a foundation of trust, transparency, and long-term relationships. We leverage our extensive network and market expertise to deliver tailored solutions and exceptional value to our partners worldwide.
      </p>
      <p>
        As a trusted partner, we are committed to sustainable business practices, responsible sourcing, and contributing to the growth and success of our clients and communities.
      </p>
      <hr style={{margin: '2rem 0'}} />
      <h2>Certificate of Incorporation</h2>
      <ul style={{listStyle: 'none', padding: 0, fontSize: '1.05rem'}}>
        <li><strong>Corporation Name:</strong> KPV Global Metals Inc.</li>
        <li><strong>Corporation Number:</strong> 1709914-2</li>
        <li><strong>Date of Incorporation:</strong> 2025-06-20</li>
        <li><strong>Registered Office:</strong> 62 Ellendale Dr, Toronto ON M1P 1N5, Canada</li>
        {/* <li><strong>Director:</strong> Divyam Sakhuja</li> */}
        {/* <li><strong>Authorized Shares:</strong> Unlimited number of common shares</li>
        <li><strong>Share Transfer Restrictions:</strong> Transfers require approval by a majority of directors or shareholders.</li> */}
      </ul>
      <p style={{color:'#888', fontSize:'0.95rem', marginTop:'2rem'}}>
        Incorporated under the Canada Business Corporations Act. This information is provided in accordance with public disclosure requirements.
      </p>
    </section>
  );
}

export default CorporateProfile; 