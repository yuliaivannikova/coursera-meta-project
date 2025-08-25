// Booking.js
import { useReducer } from "react";
import styles from "../styles/Booking.module.css";
import BookingForm from "../components/BookingForm";


export const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return ["17:00", "18:00", "19:00", "20:00", "21:00"];
    default:
      return state;
  }
};

export const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00"];
};

export default function Booking() {
  // Use useReducer for availableTimes state
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
   
  const handleBookingSubmit = (formData) => {
    console.log("Booking submitted:", formData);
    // Here you can call API or show confirmation screen
  };
  
  return (
    <section className={styles.bookingSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Reserve a table</h2>
        <p className={styles.subtitle}>
          Plan ahead for a perfect meal at Little Lemon
        </p>

        <BookingForm 
          availableTimes={availableTimes}
          dispatch={dispatch}
          onSubmit={handleBookingSubmit}
        />
      </div>
    </section>
  );
}