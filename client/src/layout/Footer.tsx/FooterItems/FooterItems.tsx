import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const FooterItems = () => {
  return (
    <div className="footer-items">
      <div className="footer-section">
        <h4 className="footer-title">Orders & Returns</h4>
        <ul className="footer-list">
          <li className="footer-item">Order Status</li>
          <li className="footer-item">Returns & Exchanges</li>
          <li className="footer-item">Orders History</li>
          <li className="footer-item">Shipping & Delivery</li>
          <li className="footer-item">Return an Item</li>
          <li className="footer-item">Login</li>
        </ul>
      </div>

      <div className="footer-section">
        <h4 className="footer-title">Support & Service</h4>
        <ul className="footer-list">
          <li className="footer-item">Contact Us</li>
          <li className="footer-item">Protection Plans</li>
          <li className="footer-item">Answer City</li>
          <li className="footer-item">Product Recalls</li>
          <li className="footer-item">Privacy & Security</li>
          <li className="footer-item">Terms</li>
        </ul>
      </div>

      <div className="footer-section">
        <h4 className="footer-title">Company Overview</h4>
        <ul className="footer-list">
          <li className="footer-item">About Us</li>
          <li className="footer-item">Affiliate Program</li>
          <li className="footer-item">Careers</li>
          <li className="footer-item">Blog</li>
        </ul>
      </div>

      <div className="footer-section">
        <h4 className="footer-title">Connect with Us</h4>
        <ul className="footer-socials">
          <li className="footer-social">
            <FaFacebook />
          </li>
          <li className="footer-social">
            <FaTwitter />
          </li>
          <li className="footer-social">
            <FaInstagram />
          </li>
          <li className="footer-social">
            <FaYoutube />
          </li>
        </ul>
      </div>

      <div className="footer-copyright">
        <p>© 2025 Sasa Nedic.</p>
      </div>
    </div>
  );
};

export default FooterItems;
