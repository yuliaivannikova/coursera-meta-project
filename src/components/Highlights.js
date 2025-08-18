import styles from '../styles/Highlights.module.css';
import greekSalad from "../assets/greek-salad.jpg";
import bruchetta from '../assets/bruchetta.jpg';
import lemonDessert from '../assets/lemon-dessert.jpg';

export default function Highlights() {
  const specials = [
    {
      id: 1,
      name: "Greek salad",
      price: "$12.99",
      image: greekSalad,
      description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      alt: "Fresh Greek salad with colorful vegetables and feta cheese"
    },
    {
      id: 2,
      name: "Bruchetta",
      price: "$5.99",
      image: bruchetta,
      description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      alt: "Toasted bruschetta topped with fresh tomatoes"
    },
    {
      id: 3,
      name: "Lemon Dessert",
      price: "$5.00",
      image: lemonDessert,
      description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      alt: "Layered lemon dessert cake"
    }
  ];

  return (
    <section id="highlights" className={styles.weeklySpecials}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>This weeks specials!</h2>
          <button className={styles.onlineMenuBtn}>Online Menu</button>
        </div>

        <div className={styles.specialsContainer}>
          {specials.map((special) => (
            <div key={special.id} className={styles.dishCard}>
              <div className={styles.dishImage}>
                <img 
                  src={special.image} 
                  alt={special.alt}
                />
              </div>
              
              <div className={styles.dishContent}>
                <div className={styles.dishHeader}>
                  <h3>{special.name}</h3>
                  <span className={styles.price}>{special.price}</span>
                </div>
                
                <p className={styles.description}>
                  {special.description}
                </p>
                
                <button className={styles.orderBtn}>
                  Order a delivery
                  <svg className={styles.arrow} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}