# Neat & Clean Laundry Web App

A modern laundry and dry cleaning services website built with **React**, **Vite**, **TypeScript**, and **Tailwind CSS**.

---

## 🚀 Features

- Beautiful, responsive single-page application (SPA)  
- Interactive service cards and carousel  
- Customer reviews/testimonials  
- Locations and service areas with search/filter  
- Contact section with WhatsApp integration  
- Service request form with address and pickup scheduling (9 AM to 9 PM, 1-hour intervals)  
- Optimized for fast load times and modern browsers  

---

## 📦 Tech Stack

- [React](https://react.dev/) (with hooks)  
- [Vite](https://vitejs.dev/) (build tool and dev server)  
- [TypeScript](https://www.typescriptlang.org/)  
- [Tailwind CSS](https://tailwindcss.com/)  
- [Lucide React](https://lucide.dev/) (icons)  
- [React Router DOM](https://reactrouter.com/) (SPA navigation)  
- Backend: Node.js, Express, Nodemailer for email  
- Deployment: Vercel  

---

## 🛠️ Getting Started  

### Prerequisites  

- Node.js 20+ and npm 8+ installed

### Installation  

#### Backend  
1. Navigate to backend folder:  
    cd backend
2. Install dependencies:  
    npm install
3. Create `.env` file with:
    GMAIL_USER=your_gmail_address@gmail.com
    GMAIL_PASS=your_gmail_app_password
    PORT=5000
4. Start backend server:  
    node server.js

#### Frontend  
1. Navigate to frontend folder:  
    cd frontend
2. Install dependencies: 
    npm install
3. Start frontend dev server:  
    npm run dev
4. Open your browser at `http://localhost:5173` to view the app.

---

## 🎯 Usage

- Fill in the service request form including address and pickup time (between 9 AM and 9 PM, hourly slots only)
- Submit the form to send a service request
- Confirmation emails sent to user and service provider via Nodemailer
- Monitor backend console for email sending logs

---

## 🚀 Deployment

- The project is deployed on [Vercel](https://vercel.com)
- GitHub integration enables automatic deployments on push to `main`
- Set environment variables (`GMAIL_USER`, `GMAIL_PASS`) securely in Vercel dashboard

---

## 📌 Notes  

- Use a Gmail **App Password** with 2FA enabled for email sending authentication  
- Never commit `.env` files to source control  
- Backend is CORS enabled to allow API requests from frontend during development

---

## 🔮 Future Improvements

- User authentication & profiles  
- Real-time order tracking  
- Online payment integration  
- Admin dashboard for request management  
- Customer reviews & feedback system  
- Chatbot for customer support  

---

## 🔗 Contact

Anuj Shandilya — anujshandilya3@gmail.com

---

Thank you for using the Neat & Clean Laundry Web App!  


