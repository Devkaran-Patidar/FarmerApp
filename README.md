Title :- 📱 Mobile App for Direct Market Access for Farmers
🌾 Project Overview

Mobile App for Direct Market Access for Farmers is a digital platform designed to eliminate middlemen in agricultural trade by directly connecting farmers with consumers and retailers.

Farmers often struggle to access fair markets, which results in lower profits due to intermediaries. This application bridges that gap by enabling farmers to list their produce, negotiate prices, and manage transactions directly with buyers.

The goal is to increase transparency, improve income potential, and empower farmers through technology.

🎯 Problem Statement

Farmers frequently face:

❌ Limited direct access to markets

❌ Dependence on middlemen

❌ Reduced profit margins

❌ Lack of price transparency

❌ Limited bargaining power

These challenges restrict their ability to sell produce at fair prices.

💡 Proposed Solution

This mobile application provides:

✅ Direct connection between farmers and buyers

✅ Produce listing with images and pricing

✅ Price negotiation features

✅ Order and transaction management

✅ Secure authentication system

By reducing dependency on intermediaries, the platform enhances farmers' income opportunities.

🚀 Key Features
👨‍🌾 Farmer Features

Register & Login

Add / Edit / Delete Produce Listings

Upload Product Images

Set & Negotiate Prices

View Buyer Requests

Manage Orders

Track Earnings

🛒 Buyer / Retailer Features

Register & Login

Browse Available Produce

Search & Filter Products

Negotiate Pricing

Place Orders

Track Order Status

🛠 Technology Stack
📱 Frontend

React.js (Mobile-Friendly UI)

React Router

CSS / Modern UI Design

Axios (API Integration)

🔧 Backend

Django

Django REST Framework

MySQL Database

JWT Authentication

🗂 Project Structure
Mobile-Direct-Market-App/
│
├── frontend/
│   ├── components/
│   ├── pages/
│   ├── layouts/
│   ├── App.jsx
│
├── backend/
│   ├── models.py
│   ├── views.py
│   ├── serializers.py
│   ├── urls.py
│   ├── settings.py
│
└── README.md

⚙️ Installation & Setup
🔹 Backend Setup

Create Virtual Environment

python -m venv venv


Activate Environment

Windows:

venv\Scripts\activate


Install Dependencies

pip install -r requirements.txt


Configure MySQL in settings.py

Run Migrations

python manage.py makemigrations
python manage.py migrate


Start Server

python manage.py runserver


Backend URL:

http://127.0.0.1:8000/

🔹 Frontend Setup
cd frontend
npm install
npm run dev


Frontend URL:

http://localhost:5173/

🗄 Database Design

Main Entities:

User (Farmer / Buyer Role)

Product (Produce Listing)

Order

Transaction

🔐 Authentication & Security

Role-Based Access Control

JWT Token Authentication

Protected Routes

Secure API Endpoints

📊 Expected Outcomes

Increased farmer income

Reduced dependency on intermediaries

Transparent pricing system

Stronger farmer-buyer relationships

Improved digital adoption in agriculture

🌍 Future Enhancements

💳 Online Payment Integration

📦 Logistics / Delivery Tracking

📈 Sales Analytics Dashboard

🌤 Weather API Integration

📍 Location-Based Product Discovery

📱 Native Android / iOS App Deployment

👨‍💻 Developer

Name: Devkaran Patidar
Project Type: Academic / Minor Project
Year: 2026

📄 License

This project is developed for educational purposes.