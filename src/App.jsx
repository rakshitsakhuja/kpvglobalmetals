import { Routes, Route, Link } from 'react-router-dom'
import './App.css'

import Home from './Home'
import WhatWeDo from './WhatWeDo'
import About from './About'
import Contact from './Contact'
import CorporateProfile from './CorporateProfile'

function App() {
  return (
    <>
      <header className="header">
        <Link to="/">
          <img src="/logo.jpg" className="logo" alt="KPV Global Metals Inc. Logo" />
        </Link>
        <nav>
          <ul className="nav-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">Who We Are</Link></li>
            <li><Link to="/what-we-do">What We Do</Link></li>
            <li><Link to="/corporate-profile">Corporate Profile</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/corporate-profile" element={<CorporateProfile />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <footer className="site-footer">© 2025 KPV Global Metals Inc. All rights reserved.</footer>
    </>
  )
}

export default App
