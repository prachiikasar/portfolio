# Prachi Kasar - Personal Portfolio

A modern, professional, and responsive personal portfolio website built with **React** and **Tailwind CSS**.

## 🚀 Tech Stack
- **Frontend**: React (Vite)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Scrolling**: React Scroll

## 📁 Folder Structure
```
/src
  /components
    Navbar.jsx       # Navigation bar with mobile menu
    Hero.jsx         # Hero section with CTA
    About.jsx        # About me summary
    Skills.jsx       # Technical skills display
    Projects.jsx     # Project showcase
    Experience.jsx   # Internship/Work experience
    Education.jsx    # Education & Certifications
    Contact.jsx      # Contact form & details
    Footer.jsx       # Copyright & social links
  App.jsx            # Main application component
  index.css          # Tailwind directives & global styles
  main.jsx           # Entry point
```

## 🛠️ Setup & Installation

1. **Clone the repository** (if using git):
   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 🚀 Deployment Instructions

### 1. GitHub Pages

1.  **Update `vite.config.js`**:
    Add `base: "/<repository-name>/"` to the config object.
    ```javascript
    export default defineConfig({
      plugins: [react()],
      base: "/your-repo-name/", 
    })
    ```

2.  **Install `gh-pages`**:
    ```bash
    npm install gh-pages --save-dev
    ```

3.  **Update `package.json`**:
    Add these scripts:
    ```json
    "scripts": {
      "predeploy": "npm run build",
      "deploy": "gh-pages -d dist"
    }
    ```

4.  **Deploy**:
    ```bash
    npm run deploy
    ```

### 2. Netlify

1.  **Login to Netlify** and select "Add new site" > "Import an existing project".
2.  **Connect to GitHub** and select your repository.
3.  **Configure Build Settings**:
    -   **Build Command**: `npm run build`
    -   **Publish directory**: `dist`
4.  **Deploy**: Click "Deploy site". Netlify will handle the rest.

### 3. Vercel

1.  **Login to Vercel** and click "Add New..." > "Project".
2.  **Import Git Repository**.
3.  **Configure Project**:
    -   **Framework Preset**: Vite
    -   **Build Command**: `npm run build`
    -   **Output Directory**: `dist`
4.  **Deploy**: Click "Deploy".

---

## 📝 How to Update Portfolio

1.  **Update Content**:
    -   Go to `src/components/` and edit the respective file (e.g., `Projects.jsx` to add a new project).
    -   Data is often stored in arrays at the top of the component files for easy editing.

2.  **Update Styles**:
    -   Use Tailwind CSS classes directly in the components.
    -   Global styles are in `src/index.css`.

3.  **Re-deploy**:
    -   After changes, commit and push to GitHub.
    -   If using Netlify/Vercel connected to GitHub, it will auto-deploy.
    -   If using GitHub Pages, run `npm run deploy` again.
