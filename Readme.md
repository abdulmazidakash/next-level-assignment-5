# 🚀 Planora – Event Management Platform

**Planora** is a modern, full-stack event management platform where users can **create, discover, join, and manage events** seamlessly.
It supports **public & private events**, **free & paid registrations**, and includes **role-based access control** with a complete dashboard system.

---

## 🔗 Live Links

* 🌐 **Frontend Live**: https://planora-frontend-5.vercel.app
* 🔧 **Backend Live**: https://planora-backend-assignment.vercel.app
* 🎥 **Demo Video**: https://drive.google.com/file/d/1mWIMvEDnTR_V5U85ROd8iJONuze6-wZM/view?usp=sharing

---

## 👤 Admin Credentials

```
Email    : admin@planora.com
Password : admin123
```

---

## 📌 Project Overview

Planora is designed to simplify event management by providing:

* Easy event creation and management
* Secure authentication system
* Payment integration for paid events
* Invitation and approval system
* Role-based access (Admin & User)

---

## 🛠️ Technology Stack

### 🎨 Frontend

* Next.js
* Tailwind CSS
* React Query
* Framer Motion
* ShadCN UI
* React Icons

### ⚙️ Backend

* Node.js
* Express.js
* Prisma ORM
* Zod Validation

### 🗄️ Database

* PostgreSQL (NeonDB)

### 🔐 Authentication

* JWT (JSON Web Token)

### 💳 Payment

* Stripe Integration

### 🚀 Deployment

* Frontend: Vercel
* Backend: Vercel

---

## ✨ Features

### 🔐 Authentication

* User Registration & Login
* Secure JWT-based authentication

### 📅 Event Management

* Create, Update, Delete events
* Public / Private events
* Free / Paid events

### 🎯 Event Participation

* Instant join (Free Public)
* Payment required (Paid Public)
* Request system (Private events)
* Approval system by organizer

### 📨 Invitation System

* Send invitations
* Accept / Decline invitations
* Paid invitation support

### ⭐ Reviews & Ratings

* Add reviews
* Edit & delete reviews

### 🧑‍💻 Dashboard

* My Events
* Invitations
* Reviews
* Profile Settings

### 🛡️ Admin Control

* Monitor all events
* Manage users
* Delete inappropriate content

---

## 🏠 Homepage Sections

* Navbar
* Hero Section (Featured Event)
* Upcoming Events Slider
* Event Categories
* Call To Action
* Footer

---

## 🔎 Events Page

* Search by title or organizer
* Filter:

  * Public Free
  * Public Paid
  * Private Free
  * Private Paid

---

## 📄 Event Details Page

Includes:

* Event title, date, time
* Venue / online link
* Organizer details
* Fee information

### Actions:

* Free Public → Join
* Paid Public → Pay & Join
* Private Free → Request
* Private Paid → Pay & Request

---

## 📊 Dashboard Features

### My Events

* Create / Edit / Delete events
* Manage participants
* Approve / Reject requests

### Invitations

* Accept / Decline
* Pay & Accept

### Reviews

* Add / Edit / Delete

### Settings

* Update profile
* Notification preferences

---

## 🧠 Core Functionalities

* Authentication system
* Event CRUD operations
* Role-based access control (RBAC)
* Payment workflow
* Invitation system
* Review system

---

## ⚠️ Error Handling

* Form validation (Zod)
* API error handling
* Loading states
* User-friendly error messages

---

## 🎨 UI/UX Highlights

* Fully responsive design
* Clean and modern UI
* Reusable components
* Smooth animations

---

## 📂 Project Structure (Simplified)

```
client/
 ├── components/
 ├── pages/
 ├── hooks/
 ├── utils/

server/
 ├── modules/
 ├── routes/
 ├── controllers/
 ├── services/
 ├── prisma/
```

---

## ⚙️ Environment Variables

### Frontend `.env`

```
NEXT_PUBLIC_API_URL=https://planora-backend-assignment.vercel.app
NEXT_PUBLIC_APP_URL=https://planora-frontend-5.vercel.app
```

---

### Backend `.env`

```
DATABASE_URL=your_database_url
JWT_SECRET=your_secret_key
FRONTEND_URL=https://planora-frontend-5.vercel.app
STRIPE_SECRET_KEY=your_stripe_key
STRIPE_WEBHOOK_SECRET=your_webhook_secret
RESEND_API_KEY=your_resend_key
PORT=5001
```

---

## 🧪 Installation & Setup

### 1️⃣ Clone Repository

```
git clone https://github.com/your-username/planora.git
```

---

### 2️⃣ Frontend Setup

```
cd client
npm install
npm run dev
```

---

### 3️⃣ Backend Setup

```
cd server
npm install
npm run dev
```

---

### 4️⃣ Prisma Setup

```
npx prisma generate
npx prisma migrate dev
```

---

## 📊 Assignment Coverage

| Criteria        | Status      |
| --------------- | ----------- |
| Homepage Design | ✅ Completed |
| UI/UX Quality   | ✅ Completed |
| Commit History  | ✅ Completed |
| Error Handling  | ✅ Completed |
| Core Features   | ✅ Completed |
| Video Demo      | ✅ Included  |

---

## 🎥 Demo Video

👉 Watch here:
https://drive.google.com/file/d/1mWIMvEDnTR_V5U85ROd8iJONuze6-wZM/view?usp=sharing

---

---

## 🙌 Conclusion

Planora is a **complete full-stack event management system** that demonstrates:

* Real-world application architecture
* Clean code practices
* Professional UI/UX
* Advanced features like payments & RBAC

---

### ⭐ If you like this project, give it a star!
