# 🛡️ Visitor Management System

**Visitor Management System (VMS)** is a web-based application that enables **secure and efficient visitor check-ins** using **QR Code scanning**. It provides an **Admin Dashboard** for tracking visitors, a **QR-based check-in system**, and a modern UI for a seamless user experience.

---

## 📌 Features

### ✅ Visitor Registration
- Visitors can register with their **name, contact, and purpose of visit**.
- Generates a **unique QR Code** for each visitor.

### ✅ QR Code Check-In
- Visitors scan their **QR Code** using the built-in **QR Scanner**.
- The system verifies the visitor and **marks them as checked-in**.

### ✅ Admin Dashboard
- View a **list of all visitors** with real-time updates.
- **Filter and search visitors** based on status or date.
- Enhanced **dark mode support** for better UI experience.

### ✅ Modern UI/UX
- Fully **responsive** and **mobile-friendly** interface.
- Smooth **animations** using **Framer Motion**.
- Clean **TailwindCSS styling** for better usability.

---

## 🛠️ Tech Stack

| **Technology**   | **Usage**          |
|------------------|-------------------|
| **React.js**     | Frontend UI       |
| **Node.js**      | Backend API       |
| **Express.js**   | Server framework  |
| **MongoDB**      | Database storage  |
| **Framer Motion**| UI Animations     |
| **TailwindCSS**  | Modern Styling    |
| **html5-qrcode** | QR Code Scanning  |

---

## 🧵 Folder Structure
```
📺 visitor-management-system
├── 📂 server  # Backend (Node.js, Express, MongoDB)
│   ├── 📂 config  # Database Configurations
│   │   ├── db.js
│   ├── 📂 models  # Mongoose models
│   │   ├── Visitor.js
│   ├── 📂 routes  # API Routes
│   │   ├── visitorRoutes.js
│   ├── 📂 controllers  # Business Logic
│   │   ├── visitorController.js
│   ├── 📂 middleware  # Middleware (Auth, Errors)
│   │   ├── errorMiddleware.js
│   ├── .env  # Environment Variables
│   ├── server.js  # Main Backend File
│   ├── package.json
│   ├── README.md
│
├── 📂 vms-frontend  # Frontend (React.js + TailwindCSS)
│   ├── 📂 public  # Static Assets
│   │   ├── index.html
│   ├── 📂 src  # Main Frontend Code
│   │   ├── 📂 components  # UI Components
│   │   │   ├── Navbar.js
│   │   │   ├── QRScanner.js
│   │   │   ├── QRCodeGenerator.js
│   │   │   ├── VisitorForm.js
│   │   │   ├── VisitorList.js
│   │   ├── 📂 pages  # Main Pages
│   │   │   ├── Home.js
│   │   │   ├── AdminDashboard.js
│   │   │   ├── VisitorRegistration.js
│   │   ├── 📂 styles  # Global Styles
│   │   │   ├── index.css
│   │   ├── 📂 utils  # Helper Functions
│   │   │   ├── api.js
│   │   ├── App.js  # Main React Component
│   │   ├── index.js  # React Entry Point
│   ├── tailwind.config.js  # TailwindCSS Config
│   ├── package.json
│   ├── README.md
│
├── .gitignore
├── README.md
```

---

## 🚀 Installation & Setup

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/utbirla/visitor-management-system.git
cd visitor-management-system
```

### 2️⃣ Install Dependencies
#### Backend Setup:
```sh
cd server
npm install
```
#### Frontend Setup:
```sh
cd ../vms-frontend
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file inside `server/` and add:
```sh
MONGO_URI=your-mongodb-connection-string
PORT=5001
```

### 4️⃣ Run the Application
#### Start Backend:
```sh
cd server
npm start
```
#### Start Frontend:
```sh
cd ../vms-frontend
npm start
```

---

## 🎯 How It Works
1️⃣ **Visitor Registers** → Fills out the form & gets a **QR Code**.  
2️⃣ **Check-In with QR Scanner** → Admin scans the QR to **verify**.  
3️⃣ **Admin Dashboard** → Admin tracks all **visitor details**.

