import styles from "../styles/Booking.module.css";
import BookingForm from "../components/BookingForm";

export default function Booking() {
  const handleBookingSubmit = (formData) => {
    console.log("Booking submitted:", formData);
    // Тут можна викликати API або показати екран підтвердження
  };

  return (
    <section className={styles.bookingSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Reserve a table</h2>
        <p className={styles.subtitle}>
          Plan ahead for a perfect meal at Little Lemon
        </p>

        <BookingForm onSubmit={handleBookingSubmit} />
      </div>
    </section>
  );
}