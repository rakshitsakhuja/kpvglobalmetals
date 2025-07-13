import { useState } from 'react';

function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // TODO: Replace this with your own Formspree endpoint for production
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mnqekvyo';

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const form = e.target;
    const data = new FormData(form);
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: {
          Accept: 'application/json',
        },
      });
      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        const result = await response.json();
        setError(result.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <h1>Contact Us</h1>
      <div className="contact-grid">
        <div className="contact-info-block">
          <h2>Office Opening Hours</h2>
          <ul>
            <li><strong>Monday - Friday:</strong> 9:00 am – 5:00 pm</li>
            <li><strong>Saturday:</strong> OFF</li>
            <li><strong>Sunday:</strong> OFF</li>
          </ul>
          {/* <h2>Office Address</h2> */}
          {/* <p>77 City Centre Drive #501,<br/>Mississauga, ON, Canada L5B 1M5</p> */}
          <p><strong>Registered Office:</strong><br/>62 Ellendale Dr, Toronto ON M1P 1N5, Canada</p>
          {/* <p><strong>Director:</strong> Divyam Sakhuja</p> */}
          <h2>Contact</h2>
          <p><strong>Email:</strong> <a href="mailto:info@kpvglobalmetals.com">info@kpvglobalmetals.com</a></p>
          <p><strong>Phone:</strong> <a href="tel:+1 (647) 865-0837">+1 (647) 865-0837</a></p>
          {/* <div className="contact-socials">
            <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="#" target="_blank" rel="noopener noreferrer">YouTube</a>
          </div> */}
        </div>
        <div className="contact-form-block">
          <h2>Send Us a Message</h2>
          <p style={{color: '#888', fontSize: '0.95rem', marginBottom: '1rem'}}>
            This form uses a demo Formspree endpoint. For production, <a href="https://formspree.io/" target="_blank" rel="noopener noreferrer">create your own Formspree form</a> and replace the endpoint in <code>src/Contact.jsx</code>.
          </p>
          {submitted ? (
            <p>Thank you for contacting us! We will get back to you soon.</p>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <label>
                Name:
                <input type="text" name="name" required />
              </label>
              <label>
                Phone Number:
                <input type="text" name="Phone Number" required />
              </label>
              <label>
                Email:
                <input type="email" name="email" required />
              </label>
              <label>
                Message:
                <textarea name="message" required></textarea>
              </label>
              <button type="submit" disabled={loading}>{loading ? 'Sending...' : 'Send'}</button>
              {error && <p style={{color: 'red', marginTop: '0.5rem'}}>{error}</p>}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact; 