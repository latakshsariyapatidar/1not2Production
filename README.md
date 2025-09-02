# OneNottwo Production - Official Website

A modern, responsive production house website built with React, featuring smooth page transitions, 3D animations, and multilingual support.

## 🎬 Overview

OneNottwo Production is a cutting-edge film production house website that showcases the company's portfolio, team, and services. The site features a sleek dark theme, animated elements, and an immersive user experience.

## ✨ Features

### 🎨 **Design & UI**
- **Dark Theme**: Elegant black/gray color scheme with red accents
- **Custom Typography**: Heathergreen and Akshar fonts for unique branding
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Custom Cursor**: MouseFollower component for enhanced interactivity

### 🎭 **Interactive Elements**
- **3D Clapperboard**: Interactive Three.js/React Three Fiber 3D model viewer
- **Frame Sequence Loader**: 120-frame animated loader using Canvas API
- **Smooth Page Transitions**: Custom slide animations between pages
- **Language Cycling**: Multilingual text cycling through different languages

### 📱 **Pages & Navigation**
- **Home**: Main landing page with company branding and navigation
- **Works**: Portfolio showcase with movie posters and filtering
- **Contact**: Contact information with social media links
- **About**: Team members and company information

### 🔧 **Technical Features**
- **React 18**: Modern React with hooks and functional components
- **GSAP Animations**: Smooth character and UI animations
- **Three.js Integration**: 3D model rendering and interactions
- **Vite Build System**: Fast development and optimized builds
- **Tailwind CSS**: Utility-first styling with custom configurations

## 🛠 Tech Stack

| Technology | Purpose | Version |
|------------|---------|---------|
| **React** | Frontend Framework | 18.x |
| **Vite** | Build Tool & Dev Server | Latest |
| **Three.js** | 3D Graphics | Latest |
| **React Three Fiber** | React Three.js Integration | Latest |
| **GSAP** | Animation Library | Latest |
| **Tailwind CSS** | Styling Framework | Latest |
| **Canvas API** | Frame Sequence Animation | Native |

## 📁 Project Structure

```
onenottwoproduction/
├── public/
│   ├── moviePoster/          # Movie poster assets
│   ├── frames/               # Loader animation frames
│   ├── Heathergreen-XPPG.ttf # Custom font
│   └── Outfit-VariableFont_wght.ttf
├── src/
│   ├── components/
│   │   ├── AboutUs.jsx       # About page with team info
│   │   ├── App.jsx           # Main app router & transitions
│   │   ├── ClapperBoard.jsx  # 3D clapperboard viewer
│   │   ├── ContactUs.jsx     # Contact page with social links
│   │   ├── Footer.jsx        # Footer navigation component
│   │   ├── Header.jsx        # Header navigation component
│   │   ├── LanguageCycler.jsx # Multilingual text cycling
│   │   ├── Loader.jsx        # Frame sequence loader
│   │   ├── MainContent.jsx   # Home page content
│   │   ├── MouseFollower.jsx # Custom cursor component
│   │   └── Works.jsx         # Portfolio showcase page
│   ├── assets/
│   │   └── DifferentLanguages.json # Language data
│   ├── index.css             # Global styles & animations
│   ├── main.jsx              # React entry point
│   └── App.jsx               # Main application component
├── eslint.config.js          # ESLint configuration
├── package.json              # Dependencies & scripts
├── README.md                 # Project documentation
└── vite.config.js            # Vite configuration
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** or **yarn**
- Modern web browser with WebGL support

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd onenottwoproduction
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
# Build the project
npm run build

# Preview production build
npm run preview
```

## 🎯 Key Components

### **App.jsx** - Main Router
- Handles page transitions with slide animations
- Manages global state for current page and loading states
- Implements smooth CSS animation-based page transitions

### **Loader.jsx** - Frame Sequence Animation
- Renders 120 frames of animation using Canvas API
- Preloads all frames for smooth playback
- Triggers completion callback for app initialization

### **ClapperBoard.jsx** - 3D Viewer
- Interactive Three.js 3D model
- Camera controls and lighting setup
- Responsive canvas sizing

### **LanguageCycler.jsx** - Multilingual Text
- Cycles through text in multiple languages
- Configurable timing and styling
- Used for headings and navigation elements

### **MouseFollower.jsx** - Custom Cursor
- Tracks mouse movement with smooth animation
- Hidden on touch devices
- Enhances desktop user experience

### **Works.jsx** - Portfolio Showcase
- Dynamic movie poster grid
- Category filtering (older/upcoming works)
- Responsive image loading with fallbacks

### **ContactUs.jsx** - Contact Information
- Contact details with social media links
- Responsive layout for all devices
- Multilingual labels using LanguageCycler

### **AboutUs.jsx** - Team & Company Info
- Team member grid with role information
- Company description and vision statement
- Responsive grid layout with centered single items

## 🎨 Styling System

### **Color Palette**
- **Primary Background**: `#1c1c1c` (Dark Gray)
- **Secondary Background**: `#000000` (Black)
- **Text Primary**: `#ffffff` (White)
- **Text Secondary**: `#ffffff/80` (White 80% opacity)
- **Accent Color**: `#ef4444` (Red)
- **Hover States**: `#f87171` (Light Red)

### **Typography**
- **Display Font**: Heathergreen (Custom)
- **Body Font**: Akshar (Google Fonts)
- **Responsive Sizing**: Using `clamp()` for fluid typography

### **Responsive Breakpoints**
- **Mobile**: `< 640px`
- **Tablet**: `640px - 1024px`
- **Desktop**: `> 1024px`

## 📧 Support & Contact

For technical support or inquiries about the OneNottwo Production website:

- **Email**: email@gmail.com
- **Phone**: +91 0000000000
- **YouTube**: [@1not2production](https://www.youtube.com/@1not2production)
- **Instagram**: [@1not2production](https://www.instagram.com/1not2production/)

## 📄 License

This project is proprietary software of OneNottwo Production. All rights reserved.

---

**Built with ❤️ by the OneNottwo Production Team**

*Crafting cinematic experiences that transcend boundaries*
