# Multi-Step Form App

This is a React application for a multi-step form using Material-UI. The form collects user information across multiple steps, including personal information, address information, and a final confirmation. The form data is saved in localStorage and validated at each step.

## Table of Contents

-Installation
-Usage
-Features
-Project Structure
-Customization

## Installation

-Node.js
-npm

## Setup Instructions

1.Clone the repository: - git clone https://github.com/yourusername/multi-step-form-app.git - cd multi-step-form-app

2.Install dependencies:

- npm install

3.Run the application:

- npm start

## Usage

How to Use the Multi-Step Form

1.Navigate through steps: The form is divided into three steps:

    - Step 1: Personal Information
    - Step 2: Address Information
    - Step 3: Confirmation

2. Validation: Each step includes validation. You cannot proceed to the next step unless all required fields are filled out.
3. Submit the form: On the final confirmation step, click Submit to submit the form. A message will display indicating successful submission.
4. Reset the form: Clicking Finish after submission will reset the form and clear the saved data from localStorage.

## Features

- Multi-step form with progress indicator
- Form validation at each step
- Data persistence using localStorage
- Responsive design using Material-UI

## Explanation of Key Files

- HorizontalStepper.js: The main component that handles the multi-step form logic and navigation between steps.
- PersonalInfo.js, AddressInfo.js, Confirmation.js: Components representing each step of the form.
- GetData.js: Handles retrieving and parsing form data from localStorage.

## Customization

- Styling: You can customize the styles by modifying the .css files in each component directory.
- Validation Logic: To change the validation rules, modify the validateFields function in HorizontalStepper.js.
