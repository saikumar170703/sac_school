# 🏫 SAC English Medium School — Official Homepage & Web Application

[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![React](https://img.shields.io/badge/React-19.0-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

An interactive, responsive homepage web application built for **SAC English Medium School** (Vijayawada, Andhra Pradesh). Recognized by the Government of Andhra Pradesh and affiliated to CBSE, SAC English Medium School provides holistic education from Class 1 through 12, featuring integrated IIT-JEE, NEET, and Olympiad academies.

---

## 📄 Project Summary & Key Requirements Achieved

- **Brand Name**: SAC English Medium School (AP State Board & CBSE Affiliated).
- **Location**: Vijayawada, Andhra Pradesh, India.
- **Design Philosophy**: High-energy, professional light theme optimized for students and parents.
- **Output**: Fully working interactive web application (not a static image/mockup).
- **Deployment**: Automated GitHub Actions workflow (`.github/workflows/deploy.yml`) for seamless deployment to GitHub Pages.

---

## 🛠️ Technology Stack & Architecture

| Component | Technology | Purpose & Rationale |
| :--- | :--- | :--- |
| **Frontend Core** | **React 19** + **Vite 8** | Fast component rendering, virtual DOM state management, and instant HMR development. |
| **Styling Engine** | **Tailwind CSS v4** + **Custom CSS** | Utility-first styling with custom CSS design tokens (`src/index.css`) for high-contrast cards, glassmorphic panels, and smooth micro-animations. |
| **Icons** | **Lucide React** (`lucide-react`) | Crisp vector iconography for controls, navigation, badges, and status feedback. |
| **Animations** | **Canvas Confetti** (`canvas-confetti`) | Festive particle animations upon application submission. |
| **CI/CD Deployment**| **GitHub Actions** (`deploy.yml`) | Automated build & deployment workflow targeting GitHub Pages. |

---

## ✨ Features & Functional Components

### 🏛️ 1. Navigation & Announcement Header
- **Urgent Notification Bar**: Highlights priority admissions for 2026-2027 and the upcoming Open House in Vijayawada.
- **Universal Navigation**: Anchor navigation, quick-access portal login button, and online application triggers.

### 🌟 2. Dynamic Hero Section & Live Stats
- **Animated Text Rotator**: Slogans rotate dynamically (*"Excellence in IIT-JEE, NEET & Global Education"*, *"Nurturing Future Leaders of Andhra Pradesh"*).
- **Live Performance Metrics**: Displays 99.8% Board Pass Rate, 142+ IIT/NEET ranks, and 15:1 Student-Teacher ratio.
- **Video Documentary Modal**: Interactive popup trailer showcasing campus life.

### 📚 3. Academic Program Explorer
- **Category Filter Tabs**: Filter by *STEM & IIT-JEE*, *Pre-Med NEET*, *Classes 6-10 CBSE Foundation*, *MEC/CEC Commerce*, *Robotics & Space Lab*, and *Arts & Sports Academy*.
- **Real-Time Search Bar**: Live search filtering by course keywords or career outcomes (e.g., *"Robotics"*, *"Pre-Med"*).
- **Syllabus & Career Modal**: Detailed modal window showing course highlights, fee estimates, and career pathways.

### 🗺️ 4. 360° Virtual Campus Tour & Hotspot Map
- **Interactive Hotspot Pins**: Clickable map nodes for 5 primary campus centers:
  - *SAC Srinivasa Ramanujan Math & AI Wing*
  - *SAC Sir C.V. Raman Science Complex*
  - *SAC Dr. A.P.J. Abdul Kalam Digital Library*
  - *SAC Kalpana Chawla Space Observatory*
  - *SAC Sports & Athletics Complex*
- **360° View Toggle**: Switch between standard photography and 360° visual panorama mode.

### 💰 5. Admissions & Fee Estimator (INR ₹)
- **Dynamic Fee Calculator**:
  - **Course Selection** (MPC, BiPC, MEC, Foundation)
  - **Transport & Boarding** (Day Scholar with AC Bus, 5-Day Hostel, Full Boarding)
  - **SAC Talent Exam / Pratibha Scholarship Slider** (0% to 75% fee grant match)
  - **Elective Specialization Academies** (Robotics, Kuchipudi Dance, Cricket Academy, Abacus)
- **Real-Time Fee Output**: Calculates net annual tuition and 3-term installment breakdowns in Indian Rupees (`₹`).

### 📅 6. Campus Events Calendar & Live Countdown Clock
- **Countdown Clock**: Real-time timer targeting the upcoming Vijayawada Open House.
- **Category Filter & RSVP System**: Event listings with an interactive **"RSVP / Remind Me"** button that displays instant toast notifications.

### 🎓 7. Toppers & Alumni Hall of Fame
- Profiles of SAC toppers achieving All India Ranks in IIT-JEE (AIR 42), NEET AP State Rank 1 (AIIMS Medical), and Civil Services (IAS 2025).
- Modal viewer to read detailed student success stories.

### 🤖 8. 24/7 SAC Smart AI Admissions Assistant
- Floating interactive chatbot widget with question chips (*"How do I apply for 2026?"*, *"Tuition fee & aid"*, *"IIT-JEE & NEET coaching"*) and real-time response generation.

### 🔐 9. Student/Parent Portal & Multi-Step Online Registration Modals
- **Student & Parent Portal Modal**: Interactive tabbed login preview for Student, Parent, and Faculty demo accounts.
- **Multi-Step Application Modal**: 3-step registration form with input validation and celebratory confetti particle animation upon submission.

---

## 📂 Project Directory Structure

```
school/
├── .github/
│   └── workflows/
│       └── deploy.yml               # GitHub Actions CI/CD deployment to GitHub Pages
├── src/
│   ├── components/
│   │   ├── Navbar.jsx               # Header, logo & announcement bar
│   │   ├── Hero.jsx                 # Dynamic text rotator, stats & video trigger
│   │   ├── ProgramExplorer.jsx      # Filterable courses, search & syllabus modal
│   │   ├── VirtualTour.jsx          # Interactive 360° hotspot map & facility specs
│   │   ├── AdmissionsCalculator.jsx # Dynamic fee & scholarship calculator (₹)
│   │   ├── EventsSection.jsx        # Events timeline, countdown clock & RSVP toast
│   │   ├── AlumniShowcase.jsx       # IIT-JEE / NEET Toppers Hall of Fame
│   │   ├── NewsSection.jsx          # Press releases & modal reader
│   │   ├── SacAiBot.jsx             # 24/7 AI Admissions Chatbot drawer widget
│   │   ├── PortalModal.jsx          # Student, Parent & Faculty login preview
│   │   ├── ApplicationModal.jsx     # 3-step registration form with confetti
│   │   ├── VideoModal.jsx           # Campus documentary video preview
│   │   └── Footer.jsx               # Newsletter signup & AP contact info
│   ├── data/
│   │   └── sacData.js               # Centralized data repository for AP school context
│   ├── App.jsx                      # Main Layout & Modal state manager
│   ├── index.css                    # Design tokens, glassmorphic utilities & animations
│   └── main.jsx                     # React entry point
├── index.html                       # SEO meta tags & Google Fonts (Cinzel / Plus Jakarta Sans)
├── package.json                     # Dependencies and npm scripts
├── vite.config.js                   # Vite configuration with relative base deployment path
└── README.md                        # Documentation
```

---

## 🚀 Local Development Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/saikumar170703/sac_school.git
   cd sac_school
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173/` in your browser.

4. **Build for Production**:
   ```bash
   npm run build
   ```

---

## 🌐 Deploying to GitHub Pages

1. **Push your code to GitHub**:
   ```bash
   git add .
   git commit -m "Update homepage code & deployment workflow"
   git push origin main
   ```

2. **Enable GitHub Actions Source**:
   - Go to **[https://github.com/saikumar170703/sac_school/settings/pages](https://github.com/saikumar170703/sac_school/settings/pages)**
   - Under **Build and deployment** → **Source**, select **`GitHub Actions`**.

3. Your website will automatically build and deploy!

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).
