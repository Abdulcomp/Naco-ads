# NACOads - Business Advertising Platform

A modern, responsive single-page website for showcasing business advertisements with photos, audio jingles, and promotional videos.

## Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Navigation**: Seamless scrolling between sections
- **Gallery Section**: 3x2 responsive grid with hover effects
- **Media Players**: Built-in audio and video players
- **Contact Form**: Integrated with Formspree for email submissions
- **Social Links**: Direct links to social media platforms
- **Modern UI**: Clean, minimal design with professional aesthetics

## Sections

1. **Home** - Hero banner with brand introduction and CTA button
2. **Gallery** - 6 advertisement cards with descriptions
3. **Media** - Audio jingle and promotional video players
4. **Contact** - Contact information and inquiry form
5. **Footer** - Copyright information

## File Structure

\`\`\`
nacoads/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # JavaScript functionality
├── images/             # Advertisement images (6 files)
├── audio/              # Audio jingle
├── videos/             # Promotional video
└── README.md           # This file
\`\`\`

## Setup for GitHub Pages

1. Create a new repository on GitHub named `nacoads`
2. Clone the repository to your local machine
3. Copy all files into the repository folder
4. Commit and push to GitHub
5. Go to repository Settings → Pages
6. Select "Deploy from a branch" and choose "main" branch
7. Your site will be live at `https://yourusername.github.io/nacoads`

## Customization

### Update Contact Information
Edit the contact section in `index.html`:
- Email: Change `ads@nacoads.com`
- Phone: Change `+234 800 000 0000`
- Social links: Update URLs

### Update Formspree Form
1. Go to [formspree.io](https://formspree.io)
2. Create a new form and get your form ID
3. Replace `xyzabc123` in `script.js` with your form ID

### Change Colors
Edit the CSS variables in `styles.css`:
\`\`\`css
:root {
    --primary-color: #0b74de;  /* Change this to your brand color */
    --primary-dark: #0a5fb8;
    /* ... other colors ... */
}
\`\`\`

### Replace Images and Media
- Replace images in the `images/` folder
- Replace audio in `audio/jingle.mp3`
- Replace video in `videos/promo.mp4`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

© 2025 NACOads. All rights reserved.
