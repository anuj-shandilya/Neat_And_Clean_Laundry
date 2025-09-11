# Neat & Clean Laundry Web App

A modern laundry and dry cleaning services website built with **React**, **Vite**, **TypeScript**, and **Tailwind CSS**, deployed on Netlify with serverless functions handling backend email functionality.

---

## 🚀 Features

- Responsive single-page application (SPA) with interactive service cards  
- Customer reviews and location-based services  
- Secure service request form with validation  
- Pickup scheduling restricted to 9 AM - 9 PM hourly slots  
- Email notifications using serverless backend with Nodemailer  
- Deployed on Netlify with seamless full-stack integration

---

## 📦 Tech Stack

- Frontend: React, Vite, TypeScript, Tailwind CSS  
- Backend: Netlify Functions (serverless) with Nodemailer and environment variables  
- Deployment: Netlify

---

## 🛠️ Setup and Installation

### Prerequisites

- Node.js 20+ and npm 8+ installed  
- Netlify CLI for local function testing (optional)

### Clone the repository and install dependencies

git clone https://github.com/your-username/your-repo.git
cd your-repo
npm install

---

### Frontend Development

Start your React development server:

npm run dev

Access the frontend at `http://localhost:5173`.

---

### Serverless Functions Setup

- Serverless functions live in the `netlify/functions/` folder.
- Backend email sending handled by `sendRequest.js` function.
- Env vars for Gmail credentials are loaded securely by Netlify.

---

### Environment Variables on Netlify

1. Login to Netlify dashboard  
2. Navigate to **Site settings > Build & deploy > Environment**  
3. Add the following variables securely:  
   - `GMAIL_USER` = *your Gmail address*  
   - `GMAIL_PASS` = *your Gmail App Password*  
4. Save and redeploy your site.

---

### Deploying

- Push your code to GitHub.  
- Netlify automatically builds the frontend and deploys serverless functions.  
- Monitor deployment status and logs on Netlify dashboard.

---

## 🔧 Usage

- Open the live site URL.  
- Navigate to **Our Services** section.  
- Select a service and open the **Request a Service** form.  
- Fill in all details including pickup date and time.  
- Submit and wait for confirmation emails.

---

## 📝 Notes

- Serverless functions replicate backend Express logic inside Handlers.  
- Netlify Functions endpoints available under `/api/functionName`.  
- Pickup time validation ensures service hours constraint.  
- Do not commit environment variable secrets to repo.

---

## 🛠 Future Improvements

- User authentication and profile management  
- Real-time order tracking with websockets or polling  
- Payment gateway integration  
- Admin dashboard for managing orders  
- Feedback and ratings system

---

## 📞 Contact

Anuj Shandilya  
Email: anujshandilya3@gmail.com

---

Thank you for using the Neat & Clean Laundry Web App!