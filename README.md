# expense.calc - Expense Tracker App


![image](https://github.com/Satyaaam/expenses/assets/118035430/8a28d3fc-915e-48b8-a32a-83128e8e6f09)
![image](https://github.com/Satyaaam/expenses/assets/118035430/ce2ea2f6-4c35-4c1f-ac41-2bd806bec88f)
![image](https://github.com/Satyaaam/expenses/assets/118035430/8d19d218-bc97-4983-8301-13a9ad15c333)

![image](https://github.com/Satyaaam/expenses/assets/118035430/8a4901cb-1268-4b32-a999-dce9537334d8)

![image](https://github.com/Satyaaam/expenses/assets/118035430/bee51f12-e79f-4951-ac97-c6aeb43e20ac)
![image](https://github.com/Satyaaam/expenses/assets/118035430/1bf1cdda-4bdd-4022-9f2a-ff76f6bd96ae)
![image](https://github.com/Satyaaam/expenses/assets/118035430/fb338164-9efe-45cc-a63f-906ec2f418fe)

![image](https://github.com/Satyaaam/expenses/assets/118035430/232540c1-31ed-4db8-8ca0-823e4129b53c)
![image](https://github.com/Satyaaam/expenses/assets/118035430/db573387-5295-40cc-9902-f9930a5cd487)


expense.calc is a user-friendly expense tracker app designed to help you effortlessly manage and monitor your expenses. With features like trip-specific expense tracking, Firebase integration for seamless data storage, and user authentication through login and signup functionalities, expense.calc aims to simplify your financial tracking experience.

## Features

1. **Expense Tracking:** Keep a detailed record of your expenses for each trip, making it easier to manage your budget and stay organized.

2. **Firebase Integration:** All your expense data is securely stored in Firebase, ensuring that your information is accessible across devices and remains synchronized.

3. **Login and Signup:** Protect your data and ensure privacy with the app's user authentication system. Users can create accounts through signup and securely log in to access their personalized expense data.

## Installation Guide

Follow these steps to install and set up expense.calc on your device:

### Prerequisites

1. **Firebase Account:** Create a Firebase account at [Firebase Console](https://console.firebase.google.com/) and set up a new project.

2. **Clone Repository:** Clone the expense.calc repository to your local machine.

### Firebase Configuration:
1. Go to the Firebase Console and navigate to your project.
2. Obtain your Firebase project's configuration (API key, auth domain, database URL, etc.).
3. Replace the placeholder values in the src/firebase.js file with your Firebase project's configuration.

// src/firebase.js

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};


```bash
git clone https://github.com/Satyaaam/expense.calc.git
