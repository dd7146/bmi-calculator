# BMI Calculator

A simple Body Mass Index (BMI) calculator built using **React.js**. This app allows users to input their height and weight to calculate their BMI and provides feedback on their health status based on the calculated value.

## Features

- User can input height (in cm) and weight (in kg).
- Calculates BMI based on the formula:  
  \[
  BMI = \frac{{weight(kg)}}{{height(m)^2}}
  \]
- Provides feedback on health status:
  - Underweight: BMI < 18.5
  - Normal weight: 18.5 ≤ BMI < 24.9
  - Overweight: 25 ≤ BMI < 29.9
  - Obesity: BMI ≥ 30
- Clean, responsive UI with modern design.

## Screenshots

![BMI Calculator Screenshot](screenshot.png)

## Getting Started

Follow these instructions to run the project on your local machine.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/dd7146/bmi-calculator.git

Navigate to the project folder:

bash
Copy code
cd bmi-calculator
Install dependencies:

bash
Copy code
npm install
Start the development server:

bash
Copy code
npm start
Open your browser and go to:

arduino
Copy code
http://localhost:3000


Project Structure
bmi-calculator/
│
├── public/
│   └── index.html          # Main HTML file
├── src/
│   ├── components/
│   │   └── BMICalculator.js # BMI Calculator component
│   ├── App.js              # Main App component
│   ├── index.js            # App entry point
│   └── BMICalculator.css   # Styling for the app
├── package.json            # Project configuration
└── README.md               # Project readme


How to Use
Enter your height (in cm).
Enter your weight (in kg).
Click the Calculate BMI button.
The result will display your BMI and a message indicating your health status.


Built With
React.js - A JavaScript library for building user interfaces
CSS3 - Styling the application

Contributing
Feel free to fork the repository and submit pull requests. Any suggestions or improvements are welcome!
