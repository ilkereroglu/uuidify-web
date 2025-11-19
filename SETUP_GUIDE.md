# UUIDify Website - Setup & Styling Guide

## CLI Setup Commands

### Initial Project Setup (Already Completed)

The Docusaurus project was manually initialized since the directory already existed. Here are the equivalent commands for reference:

```bash
# Navigate to project directory
cd /Users/ilkereroglu/Workshop/uuidify-web

# Install dependencies
npm install

# Start development server
npm start

# Build for production (when ready to deploy)
npm run build
```

### Development Workflow

```bash
# Start development server (runs at http://localhost:3000)
npm start

# Build production bundle
npm run build

# Serve production build locally
npm run serve

# Clear cache (if needed)
npm run clear
```

---

## Complete `docusaurus.config.js`

The configuration file is located at: [docusaurus.config.js](file:///Users/ilkereroglu/Workshop/uuidify-web/docusaurus.config.js)

**Key Configuration Highlights:**

### Site Metadata
```javascript
title: 'UUIDify: Serverless, Scalable UUID API'
tagline: 'The ultra-fast, reliable, and open-source solution...'
url: 'https://uuidify.io'
organizationName: 'ilkereroglu'
projectName: 'uuidify'
```

### Navbar Configuration
- **Logo:** U-in-circle design (`static/img/logo.svg`)
- **Links:**
  - Documentation (internal)
  - Dashboard → `https://dashboard.uuidify.io`
  - Status → `https://status.uuidify.io`
  - GitHub → `https://github.com/ilkereroglu/uuidify`

### Footer Configuration
Four columns with links:
1. **Docs:** Introduction, API Reference
2. **Community:** GitHub, GitHub Issues
3. **SDKs:** Go SDK, Python SDK
4. **More:** Dashboard, Status

### Theme Configuration
```javascript
colorMode: {
  defaultMode: 'light',
  disableSwitch: false,
  respectPrefersColorScheme: false,
}
```

---

## Styling & Motion Implementation Note

### Custom CSS Variables (Updated Softened Palette)

Located in: [src/css/custom.css](file:///Users/ilkereroglu/Workshop/uuidify-web/src/css/custom.css)

```css
/* Softened Color Palette */
--uuidify-primary: #5F56D9;        /* Primary accent (less saturated indigo) */
--uuidify-text-dark: #374151;      /* Warm slate gray for text */
--uuidify-bg-light: #FAFAFA;       /* Off-white background */
--uuidify-bg-white: #FFFFFF;       /* Pure white */

/* Typography - Inter Font */
--ifm-font-family-base: 'Inter', -apple-system, BlinkMacSystemFont...
--ifm-heading-font-family: 'Inter', -apple-system, BlinkMacSystemFont...

/* Generous Spacing */
--ifm-spacing-horizontal: 1.5rem;
--ifm-spacing-vertical: 1.5rem;
```

### Hero Background Animation Method

**Implementation Approach:** CSS gradient animation with low opacity

**Conceptual Overview:**

1. **Multi-Stop Gradient Background:**
   ```css
   background: linear-gradient(135deg,
     rgba(95, 86, 217, 0.03) 0%,      /* Very low opacity purple */
     rgba(255, 255, 255, 1) 20%,       /* White */
     rgba(95, 86, 217, 0.05) 40%,      /* Slightly higher purple */
     rgba(255, 255, 255, 1) 60%,       /* White */
     rgba(95, 86, 217, 0.03) 80%,      /* Low opacity purple */
     var(--uuidify-bg-light) 100%      /* Off-white */
   );
   ```

2. **Animation Keyframes:**
   ```css
   @keyframes heroBackground {
     0%   { background-position: 0% 50%; }
     50%  { background-position: 100% 50%; }
     100% { background-position: 0% 50%; }
   }
   ```

3. **Application:**
   ```css
   .hero-section {
     background-size: 200% 200%;
     animation: heroBackground 15s ease infinite;
   }
   ```

**Why This Works:**
- ✅ **Performance-friendly:** Pure CSS, GPU-accelerated, no JavaScript
- ✅ **Subtle & Non-distracting:** Very low opacity (3-5%) creates gentle movement
- ✅ **Continuous:** 15-second loop provides subtle, ongoing motion
- ✅ **Lightweight:** No additional assets or libraries required
- ✅ **Accessible:** Can easily add `prefers-reduced-motion` media query

**Alternative Approaches Considered (Not Used):**

| Approach | Pros | Cons | Why Not Used |
|----------|------|------|--------------|
| SVG Morphing Shapes | Very flexible | Larger file size, more complex | Overkill for subtle effect |
| Canvas Animations | Highly customizable | JavaScript overhead, performance | Unnecessary complexity |
| Video Backgrounds | Rich visual | Large file size, autoplay issues | Performance concerns |
| Animated GIFs | Simple | Quality/size trade-off | Limited control, outdated |

### Feature Card Hover Effects

**Implementation:**
```css
.feature-card {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.feature-card:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 12px 28px rgba(95, 86, 217, 0.15);
  border-color: var(--uuidify-primary);
}
```

**Result:** Smooth lift and scale effect with subtle shadow increase

### Primary CTA Pulse Effect

**Implementation:**
```css
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50%      { transform: scale(1.05); }
}

.cta-button.primary:hover {
  background: #5246c7;  /* Darker shade on hover */
  animation: pulse 1s infinite;
  box-shadow: 0 6px 24px rgba(95, 86, 217, 0.35);
}
```

**Result:** Gentle pulsing animation encourages user interaction

---

## Design Philosophy Summary

The UUIDify website follows these design principles:

### 1. Softened, Professional Aesthetic
- Less saturated colors (`#5F56D9` vs `#6C63FF`)
- Warm gray text (`#374151`) instead of pure black
- Off-white background (`#FAFAFA`) for visual comfort

### 2. Generous Spacing
- Increased padding throughout (5-6rem sections)
- Improved line heights (`1.7` vs `1.6`)
- Maximum width constraints for readability

### 3. Subtle Motion
- Low-opacity gradient animation (3-5%)
- Smooth CSS transitions (cubic-bezier easing)
- Hover effects that enhance but don't distract

### 4. Modern Typography
- Inter font family (Google Fonts)
- Optimized letter spacing (`-0.03em`)
- Fallback to system fonts

### 5. Clear Brand Identity
- U-in-circle logo
- Consistent color usage
- Professional, minimal design

---

## Deployment Notes

### Cloudflare Pages Configuration

```yaml
Build command:     npm run build
Build output:      build
Node version:      18 or higher
Environment vars:  None required
```

### Custom Domain Setup
1. Point `uuidify.io` DNS to Cloudflare Pages
2. Enable automatic HTTPS
3. Configure edge caching for static assets

### Performance Optimizations
- Static site generation (no server required)
- Automatic CSS/JS minification
- Image optimization (if added later)
- Inter font loaded with `display=swap`

---

## File Structure Reference

```
uuidify-web/
├── docusaurus.config.js       # Main configuration
├── sidebars.js                 # Documentation navigation
├── package.json                # Dependencies
├── src/
│   ├── css/
│   │   └── custom.css         # Custom styles (UPDATED)
│   ├── components/
│   │   ├── TerminalBlock.js   # Terminal visualization
│   │   └── FeatureCard.js     # Feature card component
│   └── pages/
│       └── index.js           # Homepage
├── docs/
│   ├── intro.md               # Introduction
│   └── api-reference.md       # API reference
├── static/
│   └── img/
│       ├── logo.svg           # U-in-circle logo (UPDATED)
│       └── favicon.ico        # Favicon (UPDATED)
└── README.md                  # Project documentation
```

---

## Summary

The UUIDify website is now complete with:

✅ **Softened color palette** (#5F56D9, #374151, #FAFAFA)  
✅ **Professional U-in-circle branding** (logo + favicon)  
✅ **Inter font integration** (modern, readable typography)  
✅ **Subtle hero background animation** (15s morphing gradient)  
✅ **Generous spacing** (5-6rem padding, increased margins)  
✅ **Performance-friendly** (CSS-only animations, optimized fonts)  
✅ **Production-ready** (all links configured, responsive design)

The website matches the aesthetic of modern developer platforms like Vercel and Tailwind CSS while maintaining the UUIDify brand identity.
