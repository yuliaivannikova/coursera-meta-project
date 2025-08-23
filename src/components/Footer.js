import logo from "../assets/Logo-white.svg";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          {/* Logo */}
          <div className={styles.logoSection}>
            <img src={logo} alt="Little Lemon Logo" className={styles.logo} />
          </div>

          {/* Doormat Navigation */}
          <div className={styles.navSection}>
            <h4>Doormat Navigation</h4>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/menu">Menu</a>
              </li>
              <li>
                <a href="/booking">Booking</a>
              </li>
              <li>
                <a href="/order">Order Online</a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className={styles.contactSection}>
            <h4>Contact</h4>
            <ul>
              <li>123 Lemon St, Chicago, IL</li>
              <li>+1 (312) 555-7890</li>
              <li>info@littlelemon.com</li>
            </ul>
          </div>

          {/* Social Media Links */}
          {/* Social Media Links */}
          <div className={styles.socialSection}>
            <h4>Social Media Links</h4>
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/littlelemon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/littlelemon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/littlelemon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
