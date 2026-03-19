# 🛒 ShopSmart

A full-stack e-commerce-style web application built with modern technologies, featuring a RESTful API, database integration, and cloud deployment.

## 🚀 Features

* User-friendly frontend interface
* RESTful API for backend services
* SQLite database with Prisma ORM
* Full CRUD operations
* Deployment on Render (backend) & Vercel (frontend)
* AWS EC2 scripts for server management

## 🛠️ Tech Stack

* Frontend: React (assumed)
* Backend: Node.js, Express
* Database: SQLite3
* ORM: Prisma
* Deployment: Render, Vercel
* Cloud: AWS EC2

## 📂 Project Structure

```
client/   → Frontend code
server/   → Backend API
```

## ⚙️ Setup Instructions

### 1. Clone the repo

```
git clone https://github.com/satya-666/shopsmart.git
cd shopsmart
```

### 2. Backend setup

```
cd server
npm install
npx prisma migrate dev
npm start
```

### 3. Frontend setup

```
cd client
npm install
npm start
```

## 🌐 Deployment

* Backend hosted on Render
* Frontend hosted on Vercel

## 📌 Future Improvements

* Authentication system
* Payment integration
* Product search & filters
* UI enhancements

## 👨‍💻 Author

Satya


# Instructions

1. Use SQLITE3 for database storage implementation
1. Use Prisma for ORM
1. Implement at least one full CRUD RESTful API
1. Deploy it on Render for backend and vercel for frontend
1. Resolve CORS issue if needed after deployment
