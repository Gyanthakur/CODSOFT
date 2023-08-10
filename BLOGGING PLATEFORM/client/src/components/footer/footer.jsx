import React from 'react';
import {WhatsApp, Instagram, LinkedIn, Twitter, GitHub, Email } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Created by GPS &copy; {new Date().getFullYear()} Gyan Pratap Singh</p>
        <div className="social-icons">
          <a className="icon-link" href="https://wa.me/918957818597?text=Hello%F0%9F%91%8B%2C%20I%20have%20a%20question%20about%20your%20service.%20Can%20you%20please%20help%20me%3F" target="_blank" rel="noopener noreferrer">
            <WhatsApp className="icon" />
          </a>
          <a className="icon-link" href="https://www.instagram.com/gp.singh.ro.ckstar4438/" target="_blank" rel="noopener noreferrer">
            <Instagram className="icon" />
          </a>
          <a className="icon-link" href="https://www.linkedin.com/in/gyan-pratap-singh-275785236/" target="_blank" rel="noopener noreferrer">
            <LinkedIn className="icon" />
          </a>
          <a className="icon-link" href="https://twitter.com/gps_96169/" target="_blank" rel="noopener noreferrer">
            <Twitter className="icon" />
          </a>
          <a className="icon-link" href="https://github.com/Gyanthakur/" target="_blank" rel="noopener noreferrer">
            <GitHub className="icon" />
          </a>
          <a className="icon-link" href="mailto:gps.96169@gmail.com">
            <Email className="icon" />
          </a>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background-color: #333;
          color: white;
          padding: 20px 0;
          text-align: center;
        }
        
        .footer-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .social-icons {
          display: flex;
          gap: 10px;
        }
        
        .icon-link {
          color: white;
          text-decoration: none;
        }
        .icon-link:hover {
          color: #fb007d;
          text-decoration: none;
        }
        
        .icon {
          font-size: 24px;
        }
      `}</style>
    </footer>
  );
}

export default Footer;
