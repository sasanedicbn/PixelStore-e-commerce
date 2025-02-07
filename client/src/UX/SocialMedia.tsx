import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const SocialMedia = () => {
  return (
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
  );
};

export default SocialMedia;
