# 🚀 Arjun.Dev | Futuristic 3D Portfolio

![Arjun.Dev Portfolio](https://images.unsplash.com/photo-1635830312899-2131bdaaa7cb?q=80&w=2070&auto=format&fit=crop)

A high-performance, immersive 3D portfolio showcasing full-stack development expertise with a futuristic cyberpunk aesthetic. Built with React, Three.js, and Framer Motion.

## ✨ Core Features

-   **🌌 Immersive 3D Experiences**: Powered by Three.js and React Three Fiber for interactive background elements and visual depth.
-   **⚡ Cutting-Edge Tech Stack**: Built with Vite, React 18, and TypeScript for maximum performance and type safety.
-   **🎨 Cyberpunk Aesthetic**: A custom-designed UI featuring neon accents, glitch effects, typewriter animations, and HUD-style panels.
-   **📱 Fully Responsive**: Seamless experience across all devices, from high-res monitors to mobile screens.
-   **📈 Dynamic Project Showcases**: Interactive galleries and detailed project descriptions.
-   **📬 Integrated Contact System**: Functional contact form with real-time validation and feedback.

## 🛠️ Technology Stack

### Frontend & UI
-   **Framework**: [React 18](https://reactjs.org/)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Components**: [Shadcn UI](https://ui.shadcn.com/) / [Radix UI](https://www.radix-ui.com/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Icons**: [Lucide React](https://lucide.dev/)

### 3D Graphics
-   **Core**: [Three.js](https://threejs.org/)
-   **React Integration**: [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber)
-   **Utilities**: [@react-three/drei](https://github.com/pmndrs/drei)
-   **Post-processing**: [@react-three/postprocessing](https://github.com/pmndrs/postprocessing)

### Backend & Services
-   **Database/Auth**: [Supabase](https://supabase.com/)
-   **Form Handling**: Web3Forms / React Hook Form
-   **Data Fetching**: [TanStack Query](https://tanstack.com/query/latest)
-   **Validation**: [Zod](https://zod.dev/)

## 🚀 Getting Started

### Prerequisites
-   [Node.js](https://nodejs.org/) (Recommended: v18+)
-   [Bun](https://bun.sh/) or [NPM](https://www.npmjs.com/)

### Installation

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies**:
    ```bash
    bun install
    # or
    npm install
    ```

3.  **Set up environment variables**:
    Create a `.env` file in the root directory and add your credentials:
    ```env
    VITE_SUPABASE_URL=your_supabase_url
    VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
    ```

4.  **Run the development server**:
    ```bash
    bun dev
    # or
    npm run dev
    ```

5.  **Build for production**:
    ```bash
    bun run build
    # or
    npm run build
    ```

## 📂 Project Structure

```bash
src/
├── components/     # Reusable UI & 3D components
│   ├── 3d/         # Three.js scenes and models
│   ├── layout/     # Navigation, Footer, etc.
│   └── ui/         # Shadcn & custom HUD components
├── hooks/          # Custom React hooks
├── lib/            # Utility functions and configurations
├── pages/          # Individual section components
└── types/          # TypeScript definitions
```

## 📜 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<p align="center">
  Built with 💙 by <a href="https://github.com/Arjunmb01">Arjun</a>
</p>
