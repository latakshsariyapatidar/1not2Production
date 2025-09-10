# 1NOT2 Production - Movie Production House Website

![1NOT2 Production](https://img.shields.io/badge/1NOT2-Production-red?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.0+-blue?style=for-the-badge&logo=react)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.0+-green?style=for-the-badge&logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-Latest-purple?style=for-the-badge&logo=vite)

## 🎬 Overview

**1NOT2 Production** is a modern, responsive movie production house website built with React and TailwindCSS. The website features smooth page transitions, 3D interactive elements, animated loaders, and a comprehensive showcase of the production team and their works.

### 🌟 Key Features

- **🎭 Interactive 3D Clapperboard**: Immersive 3D model viewer using React Three Fiber
- **🎬 Frame Sequence Loader**: Custom 120-frame animation loader with preloading
- **🔄 Smooth Page Transitions**: Hardware-accelerated slide transitions between pages  
- **📱 Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **🎨 Modern UI/UX**: Dark theme with custom fonts and animations
- **🎯 Custom Cursor**: MouseFollower component for enhanced user interaction
- **🌐 Multi-language Support**: LanguageCycler component with international text
- **🎁 Diwali Special**: Interactive gift box with movie release announcement
- **📊 Performance Optimized**: Memoized components and lazy loading

## 🚀 Live Demo

Visit the live website: [1NOT2 Production](https://your-domain.com)

## 📋 Table of Contents

- [Installation](#installation)
- [Project Structure](#project-structure)
- [Components Overview](#components-overview)
- [Pages](#pages)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Development Setup](#development-setup)
- [Build & Deployment](#build--deployment)
- [Team](#team)
- [Social Media](#social-media)
- [Contributing](#contributing)
- [License](#license)

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
