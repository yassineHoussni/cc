import React from 'react';
import './css/footer.css'; 

const Footer = () => {
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <h3>Electro<span>Dell</span></h3>

        <p className="footer-links">
          <a href="#">Home</a>
          |
          <a href="#">About</a>
          |
          <a href="#">Contact</a>
          |
          <a href="#">Blog</a>
        </p>

        <p className="footer-company-name">
          Copyright © 2023 <strong>Electro Dell</strong> All rights reserved
        </p>
      </div>

      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span>Morocco</span>
            Tanger
          </p>
        </div>

        <div>
          <i className="fa fa-phone"></i>
          <p>+212 6**55**68</p>
        </div>
        <div>
          <i className="fa fa-envelope"></i>
          <p>
            <a href="https://www.electroplanet.ma">Dell@gmail.com</a>
          </p>
        </div>
      </div>

      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>
          <strong>Dell Electro</strong> Dell's ecommerce site is a go-to for quality electronics.
          Easy navigation, detailed product info, and reliable service make it a top choice for tech enthusiasts and businesses alike.
        </p>
        <div className="footer-icons">
          <a href="#"><i className="fa-brands fs-2 fa-facebook"></i></a>
          <a href="#"><i className="fa-brands fs-2 fa-instagram"></i></a>
          <a href="#"><i className="fa-brands fs-2  fa-linkedin"></i></a>
          <a href="#"><i className="fa-brands fs-2  fa-twitter"></i></a>
          <a href="#"><i className="fa-brands fs-2  fa-youtube"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
