import { useState } from "react";
import styles from "../styles/Booking.module.css";

export default function BookingForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "",
    name: "",
    email: "",
    occasion: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label>
        Date*
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Available Times*
        <div className={styles.timeOptions}>
          {["5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM"].map(
            (t) => (
              <button
                type="button"
                key={t}
                className={`${styles.timeBtn} ${
                  formData.time === t ? styles.active : ""
                }`}
                onClick={() => setFormData({ ...formData, time: t })}
              >
                {t}
              </button>
            )
          )}
        </div>
      </label>

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        value={formData.occasion}
        onChange={handleChange}
      >
        <option value="">Select occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <label>
        Number of Guests*
        <select
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          required
        >
          <option value="">Select guests</option>
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </label>

      <label>
        Name*
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />
      </label>

      <label>
        Email*
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter email address"
          required
        />
      </label>

      <button type="submit" className={styles.confirmBtn}>
        Confirm booking
      </button>
    </form>
  );
}