import { useState } from "react";
import logo from "../assets/Logo.svg";
import styles from "../styles/Nav.module.css";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <img src={logo} alt="Little Lemon Logo" className={styles.logo} />

      <button
        className={styles.burger}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      <ul className={`${styles.menu} ${isOpen ? styles.show : ""}`}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="booking">Booking</a>
        </li>
        <li>
          <a href="#order-online">Order online</a>
        </li>
        <li>
          <a href="#login">Login</a>
        </li>
      </ul>
    </nav>
  );
}
