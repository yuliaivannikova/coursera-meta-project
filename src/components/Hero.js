import styles from '../styles/Hero.module.css';
import heroDish from '../assets/restauranfood.jpg';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant,
          focused on traditional recipes served with a modern twist.
        </p>
        <button className={styles.reserveBtn}>Reserve a Table</button>
      </div>

      <div className={styles.heroImage}>
        <img
          src={heroDish}
          alt="Little Lemon special dish"
        />
      </div>
    </section>
  ); 
}