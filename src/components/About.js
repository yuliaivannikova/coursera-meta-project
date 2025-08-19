import restaurantChefs1 from "../assets/restaurant-chefs1.jpg";
import restaurantChefs2 from "../assets/restaurant-chefs2.jpg";
import styles from "../styles/About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.aboutContent}>
          {/* Text Content */}
          <div className={styles.textContent}>
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p className={styles.description}>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit.
            </p>
          </div>

          {/* Image Section */}
          <div className={styles.imageSection}>
            <img
              src={restaurantChefs1}
              alt="Little Lemon chefs cooking"
              className={styles.mainImage}
            />
            <img
              src={restaurantChefs2}
              alt="Little Lemon restaurant interior"
              className={styles.secondaryImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
