import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-title">Explore India</div>
      <div className="footer-content">
        <h3>Get in touch</h3>
        <div className="social-icon-container">
                <div className="social-icon"><a href="https://www.instagram.com/theckpatil/"><i
                            className="fa-brands fa-instagram"></i></a></div>
                <div className="social-icon"><a href="https://www.facebook.com/theckpatil/"><i
                            className="fa-brands fa-facebook-f"></i></a></div>
                <div className="social-icon"><a href="https://www.linkedin.com/in/theckpatil/"><i
                            class="fa-brands fa-linkedin-in"></i></a></div>
                <div className="social-icon"><a href="https://github.com/theckpatil/"><i
                            class="fa-brands fa-github"></i></a></div>
                <div className="social-icon"><a href="https://ckpatil.vercel.app/"><i class="fa-solid fa-user-tie"></i></a>
                </div>
            </div>
      </div>
      <div className="footer-dev">
        <div className="dev-info">
          <p>&copy; 2024<span style={{ color: 'orangered', fontWeight: 700 }}> | </span>All Rights Reserved</p>
          <span style={{ fontWeight: 600, fontSize: '16px', color: '#ffff' }}>Designed & Developed by <a href="https://ckpatil.vercel.app/" style={{ textDecoration: 'none', color: 'orangered' }}>Chandrakant Patil</a></span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
