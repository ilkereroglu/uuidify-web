# UUIDify Official Website

The official website for [UUIDify](https://uuidify.io) - an ultra-fast, serverless UUID generation API.

## Overview

This website is built with [Docusaurus 3](https://docusaurus.io/), a modern static site generator optimized for documentation and content-rich websites. The site features contemporary design with subtle motion effects and is optimized for deployment on Cloudflare Pages.

## Features

- 🎨 **Contemporary Design** - Minimalist, developer-focused aesthetic with brand colors
- ✨ **Subtle Animations** - Smooth hover effects, fade-ins, and transitions for enhanced UX
- 📱 **Fully Responsive** - Optimized for all device sizes
- ⚡ **Lightning Fast** - Static site generation with optimized bundle size
- 📚 **Comprehensive Docs** - API reference and getting started guides
- 🔗 **SDK Integration** - Links to official Go and Python SDKs

## Tech Stack

- **Framework:** Docusaurus v3
- **Styling:** Custom CSS with CSS variables and keyframe animations
- **Components:** React functional components
- **Hosting:** Optimized for Cloudflare Pages (serverless)

## Local Development

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn

### Installation

```bash
# Install dependencies
npm install
```

### Development Server

```bash
# Start the development server
npm start
```

The site will be available at `http://localhost:3000/`.

### Build

```bash
# Create production build
npm run build
```

The static files will be generated in the `build/` directory.

### Serve Production Build Locally

```bash
# Serve the production build
npm run serve
```

## Project Structure

```
uuidify-web/
├── docs/                    # Documentation markdown files
│   ├── intro.md            # Introduction page
│   └── api-reference.md    # API reference
├── src/
│   ├── components/          # React components
│   │   ├── FeatureCard.js  # Feature card component
│   │   └── TerminalBlock.js # Terminal visualization component
│   ├── css/
│   │   └── custom.css      # Custom styles and animations
│   └── pages/
│       └── index.js        # Homepage
├── static/
│   └── img/                # Static images (logo, favicon)
├── docusaurus.config.js    # Docusaurus configuration
├── sidebars.js             # Documentation sidebar configuration
└── package.json            # Dependencies and scripts
```

## Customization

### Color Palette

The primary brand color and other theme colors are defined in `src/css/custom.css`:

```css
--uuidify-primary: #6C63FF;      /* Primary accent color */
--uuidify-text-dark: #333333;    /* Dark text color */
--uuidify-bg-light: #FAFAFA;     /* Light background */
```

### Animations

All animations are implemented using CSS keyframes and transitions in `src/css/custom.css`:

- **Feature Cards:** Lift and scale on hover
- **Primary CTA:** Pulse animation on hover
- **Terminal Block:** Fade-in on page load

### Content

- **Homepage:** Edit `src/pages/index.js`
- **Documentation:** Edit files in `docs/` folder
- **Site Config:** Edit `docusaurus.config.js`

## Deployment

### Cloudflare Pages

1. **Connect Repository:**
   - Log in to Cloudflare Pages
   - Connect your GitHub repository

2. **Configure Build Settings:**
   - **Build command:** `npm run build`
   - **Build output directory:** `build`
   - **Node version:** 20 or higher

3. **Environment Variables:**
   - None required for basic setup

4. **Deploy:**
   - Push to main branch to trigger automatic deployment

### Custom Domain

Configure your custom domain (e.g., `uuidify.io`) in Cloudflare Pages settings.

## Links

- **Live Site:** https://uuidify.io
- **API:** https://api.uuidify.io
- **Dashboard:** https://dashboard.uuidify.io
- **Status:** https://status.uuidify.io
- **GitHub:** https://github.com/ilkereroglu/uuidify
- **Go SDK:** https://github.com/ilkereroglu/uuidify-go
- **Python SDK:** https://github.com/ilkereroglu/uuidify-python

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests.

## License

This project is part of the UUIDify ecosystem. See the main repository for license information.

## Support

For questions or support, please:
- Open an issue on [GitHub](https://github.com/ilkereroglu/uuidify/issues)
- Check our [Status Page](https://status.uuidify.io)

---

Built with ❤️ using [Docusaurus](https://docusaurus.io/)
