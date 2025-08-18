import styles from '../styles/Testimonials.module.css';
import customer1 from '../assets/customer1.png';
import customer2 from '../assets/customer2.png';
import customer3 from '../assets/customer3.png';
import customer4 from '../assets/customer4.png';

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Maria Rodriguez",
      rating: 5,
      image: customer1,
      review: "Amazing authentic Mediterranean food! The Greek salad is fresh and the flavors are incredible. Definitely coming back!",
      alt: "Happy customer Maria Rodriguez"
    },
    {
      id: 2,
      name: "John Thompson", 
      rating: 5,
      image: customer2,
      review: "Best bruschetta in Chicago! The atmosphere is cozy and the service is exceptional. Highly recommend this place.",
      alt: "Satisfied customer John Thompson"
    },
    {
      id: 3,
      name: "Sarah Chen",
      rating: 5,
      image: customer3, 
      review: "The lemon dessert is to die for! Every dish we tried was perfectly seasoned. This is our new favorite restaurant.",
      alt: "Delighted customer Sarah Chen"
    },
    {
      id: 4,
      name: "David Wilson",
      rating: 4,
      image: customer4,
      review: "Great family-owned restaurant with traditional recipes. The modern twist on classic dishes is really well done.",
      alt: "Happy customer David Wilson"
    }
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <svg 
        key={i} 
        className={`${styles.star} ${i < rating ? styles.filled : styles.empty}`}
        viewBox="0 0 24 24"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ));
  };

  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className={styles.container}>
        <h2 className={styles.title}>What our customers say</h2>

        <div className={styles.reviews}>
          {reviews.map((review) => (
            <div key={review.id} className={styles.reviewCard}>
              
              {/* Rating Stars */}
              <div className={styles.rating}>
                {renderStars(review.rating)}
              </div>

              {/* Customer Info */}
              <div className={styles.customerInfo}>
                <img 
                  src={review.image}
                  alt={review.alt}
                  className={styles.avatar}
                />
                <h4 className={styles.customerName}>{review.name}</h4>
              </div>

              {/* Review Text */}
              <p className={styles.reviewText}>"{review.review}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}