# Cappuccino7 - Hosted by Netlify

A modern, responsive website for Cappuccino7 Café, built with React, Vite, and Tailwind CSS.

## Features
-   **Responsive Design**: Optimized for mobile, tablet, and desktop.
-   **Admin Panel**: Manage menu items, gallery images, and café settings (logo).
-   **Firebase Integration**: Real-time updates for menu and gallery.
-   **Dark Mode**: Support for both light and dark themes.

## Deployment to Netlify

To host this website on Netlify via GitHub:

1.  **Push to GitHub**: Push your code to a GitHub repository.
2.  **Connect to Netlify**:
    -   Log in to Netlify and click **Add new site** > **Import an existing project**.
    -   Select **GitHub** and choose your repository.
3.  **Configure Build Settings**:
    -   **Build command**: `npm run build`
    -   **Publish directory**: `dist`
4.  **Environment Variables**:
    -   Go to **Site settings** > **Environment variables**.
    -   Add `GEMINI_API_KEY` if you use Gemini AI features.
    -   Add any other variables from `.env.example`.
5.  **Deploy**: Click **Deploy site**.

### Routing (SPA)
The project includes a `netlify.toml` and `public/_redirects` file to handle client-side routing. This ensures that refreshing the page on any route (like `/about`) will correctly load the app.

### Firebase Configuration
The app uses `firebase-applet-config.json` for its configuration. Ensure this file is included in your repository or manually added to your build environment if you choose to exclude it from version control.
