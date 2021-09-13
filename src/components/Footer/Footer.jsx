import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

function Footer() {
  return (
    <div className="footer">
      <div className="footerLinks">
        <Link className="link" to="/about">
          <p>About</p>
        </Link>
        <Link className="link" to="/contact-us">
        <p>Contact Us</p>
        </Link>
      </div>

      {/* for the copyright symbol and name */}
      <div className="footerCopyright">
        <p>&copy; Dylan Howard, 2021</p>
      </div>
    </div>
  );
}

export default Footer;
