import React, { useState } from 'react';
import './BMICalculator.css';  // For styling (create this file as needed)

const BMICalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');

  const calculateBMI = (e) => {
    e.preventDefault();

    if (weight === '' || height === '') {
      setMessage('Please enter valid weight and height.');
      return;
    }

    const bmiValue = (weight / ((height / 100) * (height / 100))).toFixed(2);
    setBmi(bmiValue);

    // Determine BMI category
    if (bmiValue < 18.5) {
      setMessage('You are underweight.');
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      setMessage('You have a normal weight.');
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      setMessage('You are overweight.');
    } else {
      setMessage('You are obese.');
    }
  };

  return (
    <div className="bmi-container">
      <h2>BMI Calculator</h2>
      <form onSubmit={calculateBMI}>
        <div className="input-group">
          <label>Weight (in kg):</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter your weight"
          />
        </div>
        <div className="input-group">
          <label>Height (in cm):</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Enter your height"
          />
        </div>
        <button type="submit">Calculate BMI</button>
      </form>

      {bmi && (
        <div className="bmi-result">
          <h3>Your BMI: {bmi}</h3>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default BMICalculator;
