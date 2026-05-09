# 🌞 SunCart — Summer Essentials Store

🚀 Live Demo: https://sun-cart-summer-essentials-store-xi.vercel.app/

SunCart is a modern summer-themed eCommerce web application where users can explore and purchase seasonal products like sunglasses, summer outfits, skincare items, beach accessories, and more.

Built with **Next.js App Router**, SunCart provides a fast, responsive, and user-friendly experience across all devices.

---

## 🚀 Live Features

### 🛍️ Product Browsing

* Explore a variety of summer essentials
* View product details including image, price, rating, and description
* Category-based filtering for better navigation

### 🌅 Hero Section

* Eye-catching summer banners
* Promotional highlights such as:

  * **Summer Sale 50% OFF**
  * **Hot Deals 🔥**

### 🔥 Popular Products

* Displays featured products on homepage
* Each product card includes:

  * Product Image
  * Name
  * Rating
  * Price
  * View Details button

### 💡 Extra Sections

* ☀️ Summer Care Tips (hydration, skincare, sun protection)
* 🏷️ Top Brands (static brand showcase)

---

## 🔐 Authentication System (BetterAuth)

### 🔑 Login Page

* Email & Password authentication
* Google Social Login
* Error handling with toast messages
* Redirect to Home after successful login

### 📝 Register Page

* User registration with:

  * Name
  * Email
  * Photo URL
  * Password
* Google Social Registration
* Redirect to Login page after successful registration

> ⚠️ Note: Email verification and password reset are not included (as per assignment requirements)

---

## 🔒 Protected Routes

### 📄 Product Details Page

* Accessible only for logged-in users
* If not logged in:

  * Redirects to login page
  * After login → returns to the intended page

---

## 👤 My Profile (Bonus Feature)

### 📌 Profile Page

* Displays user information:

  * Name
  * Email
  * Profile Image

### ✏️ Update Profile

* Update user:

  * Name
  * Profile Image
* Integrated with BetterAuth user update system

---

## 🎨 UI & UX Features

* Fully responsive (Mobile, Tablet, Desktop)
* Modern design using Tailwind CSS
* Clean layout with reusable components
* Smooth animations (Animate.css / Lottie / React-Spring)

---

## 🧱 Project Structure

```
app/
 ├── page.js                 # Home Page
 ├── products/page.js       # Products Page
 ├── products/[id]/page.js  # Product Details (Protected)
 ├── login/page.js
 ├── register/page.js
 ├── profile/page.js
 ├── update-profile/page.js

components/
 ├── Navbar.jsx
 ├── Footer.jsx
 ├── ProductCard.jsx
 ├── Hero.jsx
 ├── CareTips.jsx
 ├── TopBrands.jsx

public/
 ├── products.json
 ├── images/

lib/
 ├── auth-client.js
```

---

## 📦 Product Data Example

```json
[
  {
    "id": 1,
    "name": "UV Protection Sunglasses",
    "brand": "SunShade",
    "price": 15,
    "rating": 4.7,
    "stock": 10,
    "description": "Stylish UV protection sunglasses perfect for summer outings.",
    "image": "https://i.postimg.cc/example1.png",
    "category": "Accessories"
  }
]
```

---

## 🛠️ Technologies Used

* ⚡ Next.js (App Router)
* ⚛️ React
* 🎨 Tailwind CSS
* 🌼 DaisyUI / HeroUI
* 🔐 BetterAuth
* 🎞️ Animate.css / Lottie / React-Spring

---

## 📱 Responsive Design

* ✅ Mobile Friendly
* ✅ Tablet Optimized
* ✅ Desktop Ready

---

## 📥 Installation & Setup

### 1️⃣ Clone Repository

```bash
git clone https://github.com/SheikhSabbirAhmad/SunCart-Summer-Essentials-Store.git
```

### 2️⃣ Navigate to Project Directory

```bash
cd suncart
```

### 3️⃣ Install Dependencies

```bash
npm install
```

### 4️⃣ Run Development Server

```bash
npm run dev
```

### 5️⃣ Open in Browser

```
http://localhost:3000
```

---

## 🌟 Key Highlights

* 🔐 Secure Authentication System
* 🛍️ Modern eCommerce Design
* 📦 Dynamic Product Rendering
* ⚡ Fast Performance with Next.js
* 🎯 Clean & Scalable Code Structure

---





## 👨‍💻 Author

**Sheikh Sabbir Ahmad**

CSE Student | Full Stack Web Developer

---

## 📜 License

This project is created for **educational purposes only**.

---

## 💬 Final Note

SunCart demonstrates modern full-stack development using Next.js, authentication systems, and responsive UI design.

Feel free to fork, improve, and expand this project 🚀
