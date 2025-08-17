# Harshi Jain - Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS, showcasing my skills, projects, and professional experience as a Full Stack Developer.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX**: Clean, professional design with smooth animations and gradient effects
- **Interactive Components**: 
  - Animated hero section with staggered entrance effects
  - Contact form with EmailJS integration
  - Downloadable resume
  - Smooth scrolling navigation
- **Sections**:
  - Hero/Introduction
  - About Me
  - Skills & Technologies
  - Work Experience & Education
  - Projects Portfolio
  - Contact Form

## 🛠️ Technologies Used

- **Frontend Framework**: React 19.1.0
- **Styling**: Tailwind CSS 4.1.7
- **Build Tool**: Vite 6.3.5
- **Icons**: React Icons 5.5.0
- **Email Service**: EmailJS for contact form functionality
- **Development Tools**: ESLint for code quality

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- Node.js (version 16 or higher)
- npm or yarn package manager

## 🚀 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/HarshiJain-Portfolio.git
   cd HarshiJain-Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the website

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🏗️ Project Structure

```
HarshiJain-Portfolio/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and media files
│   ├── components/        # React components
│   │   ├── About.jsx      # About section
│   │   ├── Contact.jsx    # Contact form
│   │   ├── Hero.jsx       # Hero/introduction section
│   │   ├── Navbar.jsx     # Navigation component
│   │   ├── Projects.jsx   # Projects showcase
│   │   ├── Skills.jsx     # Skills section
│   │   └── WorkAndEducation.jsx # Experience section
│   ├── App.jsx            # Main application component
│   ├── main.jsx           # Application entry point
│   └── index.css          # Global styles
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
└── README.md              # Project documentation
```

## 🎨 Customization

### Personal Information
Update the following files to customize your personal information:

- **Hero.jsx**: Update name, title, and description
- **About.jsx**: Modify your bio and personal details
- **Skills.jsx**: Add or remove skills and technologies
- **Projects.jsx**: Showcase your projects
- **WorkAndEducation.jsx**: Update work experience and education
- **Contact.jsx**: Update contact information and EmailJS configuration

### Styling
The project uses Tailwind CSS for styling. You can customize:
- Color scheme by modifying gradient classes
- Typography in the CSS classes
- Layout and spacing using Tailwind utility classes

### EmailJS Configuration
To set up the contact form:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up your email service and template
3. Update the configuration in `Contact.jsx`:
   ```javascript
   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_PUBLIC_KEY');
   ```

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run: `npm run deploy`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Contact

- **Email**: harshi.r.jain2005@gmail.com
- **LinkedIn**: [Your LinkedIn Profile]
- **GitHub**: [Your GitHub Profile]

---

**Built with ❤️ by Harshi Jain**
