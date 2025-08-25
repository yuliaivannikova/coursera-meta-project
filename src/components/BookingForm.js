// BookingForm.js
import styles from "../styles/Booking.module.css";
import React, { useState } from "react";

export default function BookingForm({ availableTimes, onSubmit, dispatch }) {
  const [formData, setFormData] = useState({
    date: "",
    selectedTime: "", 
    guests: "",
    name: "",
    email: "",
    occasion: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "date") {
      dispatch({ type: "UPDATE_TIMES", payload: value });
    }
  };

  const handleFormChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleTimeSelection = (selectedTime) => {
    handleFormChange("selectedTime", selectedTime); // Змінив на selectedTime
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Валідація обраного часу
    if (!formData.selectedTime) {
      alert("Please select a time");
      return;
    }
    
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
          onChange={handleInputChange}
          required
        />
      </label>

      <fieldset className={styles.timeFieldset}>
        <legend>Available Times*</legend>
        <div className={styles.timeOptions}>
          {availableTimes.map((time) => {
            const isActive = formData.selectedTime === time; // Змінив на selectedTime
            return (
              <button
                type="button"
                key={time}
                className={`${styles.timeBtn} ${isActive ? styles.active : ""}`}
                aria-pressed={isActive}
                onClick={() => handleTimeSelection(time)}
              >
                {time}
              </button>
            );
          })}
        </div>
      </fieldset>

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        value={formData.occasion}
        onChange={handleInputChange}
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
          onChange={handleInputChange}
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
          onChange={handleInputChange}
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
          onChange={handleInputChange}
          placeholder="Enter email address"
          required
        />
      </label>

      <button type="submit" className={styles.confirmBtn}>
        Make your reservation
      </button>
    </form>
  );
}