# Dream of Dance (DOD) Studio Website

A premium, magazine-style web application for the "Dream of Dance" studio. This project transitions away from robotic UI templates to a high-end fashion and lifestyle aesthetic using charcoal, gold, and ivory palettes.

## ✨ Features

- **Cinematic Experience**: Wide-screen visuals with asymmetric typography for a boutique feel.
- **Magazine-Style Academy**: Interactive class cards that reveal details on hover, styled like high-end editorial covers.
- **Pro-Services Boutique**: Dedicated sections for Wedding Sangeet and Corporate choreography with elegant iconography.
- **Floating Callback Hub**: A persistent gold-gradient interaction button for lead generation.
- **Responsive Magazine UI**: Fully optimized for mobile with a custom-built side drawer.
- **Micro-interactions**: Fluid page transitions and scroll-reveals powered by Framer Motion.

## 🛠️ Tech Stack

- **React 18**: Frontend framework
- **Tailwind CSS**: Utility-first styling with custom gold/charcoal theme
- **Framer Motion**: State-of-the-art animations
- **Lucide React**: Clean, modern iconography
- **React Router 6**: Client-side navigation

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1.  **Clone or create a new React project**:
    If you are starting from scratch, create the folder and navigate into it.

2.  **Verify dependencies**:
    Make sure you have the provided `package.json` in your project root.

3.  **Install dependencies**:
    Run the following command in your terminal:
    `npm install`

4.  **Tailwind Setup**:
    Ensure `tailwind.config.js` and `postcss.config.js` (standard) are in your root. The provided `tailwind.config.js` includes the custom color palette.

### Running the Application

To start the development server:
`npm start`

The application will be available at `http://localhost:3000`.

## 📁 Project Structure

- `src/App.js`: Main router and animation wrapper.
- `src/components/`: Reusable high-end UI components (Navbar, Footer, FloatingButton).
- `src/pages/`:
  - `Home.js`: Hero landing and artistic narrative.
  - `Academy.js`: Class catalog (Kids, Teens, Adults & Ladies Empowerment).
  - `ProServices.js`: Wedding & Corporate event details.
  - `Story.js`: Studio history and vision.
  - `Connect.js`: Contact hub with inquiry form.
- `src/index.css`: Global typography and gold-gradient utility classes.

## 🎨 Aesthetic Guidelines

- **Typography**: 
  - Headings: 'Cinzel' (Serif)
  - Body: 'Montserrat' (Sans-serif)
- **Colors**:
  - Deep Charcoal: `#121212`
  - Burnished Gold: `#D4AF37`
  - Earthy Bronze: `#A67C00`
  - Ivory: `#F5F5F0`

## 💬 Troubleshooting

- **Fonts not loading**: Ensure you are connected to the internet as the fonts are imported via Google Fonts CDN in `index.css`.
- **Animations lagging**: Framer Motion is highly performant, but ensure your browser hardware acceleration is enabled for the smoothest experience.
