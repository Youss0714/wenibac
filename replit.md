# Wenibac Advanced Shipping Ltd. Website

## Overview

This is a bilingual (French/English) responsive website for Wenibac Advanced Shipping Ltd., a transit and logistics company operating at the Tema port in Ghana. The website is built with vanilla HTML, CSS, and JavaScript, focusing on modern design principles and professional presentation of shipping and logistics services.

## Recent Changes

**July 30-31, 2025:**
- Enhanced website with professional shipping imagery
- Created 5 custom SVG illustrations: cargo ship, port operations, warehouse, team work, truck transport
- Updated gallery section with realistic shipping images and hover overlay effects
- Replaced hero background with authentic Tema Port photo showing real containers and port facilities
- Added Google Maps integration with precise GIFF Complex location and direction buttons
- Updated contact information with correct email: wenibac67@gmail.com
- Updated phone number to +233303214304 throughout website including WhatsApp integration
- Improved visual appeal and professional appearance across all sections
- **Migration to Replit Environment**: Successfully migrated from Replit Agent to standard Replit environment
- Fixed CSS syntax errors that were causing display issues
- Installed Python 3.11 to support the HTTP server workflow
- Added new container handling image to cargo gallery section, replacing original SVG cargo image
- Added second cargo image showing cargo loading operations on ship deck
- Implemented automatic image carousel rotation for cargo section with indicators and hover controls
- Replaced SVG port illustration with authentic aerial photo of Tema Port showing cranes and container operations
- Updated hero section background images with new spectacular photos of container ships at Tema Port with blue cranes
- Replaced operations section SVG with authentic photo of port crane handling MSC containers
- Updated testimonials to use generic professional titles (Commerçant, Entrepreneur, Importateur) and simplified names (Kwame A., Aisha M., Omar K.) for privacy
- **Added Cargo Tracking System**: Complete cargo tracking functionality with timeline visualization, sample tracking data, and bilingual support
- Added tracking navigation link and hero button for easy access to tracking functionality
- Implemented responsive design for tracking section with mobile-optimized layout
- **Improved Button Visibility**: Enhanced contrast and visual appearance of hero section buttons for better readability
- **Updated Button Navigation**: All "En savoir plus" buttons now redirect to contact section for lead generation
- **Enhanced Company Story**: Updated "Notre Histoire" section with detailed founder background and 30+ years company history, including M. Yacubu Dawuda's vision and Wenibac's evolution as an officially approved transit agency at Tema Port
- **Focus on Transit**: Repositioned messaging throughout the site to emphasize "Transit" over "Logistics" as the primary service focus, updating hero subtitle, about section, services descriptions, and footer content
- **Default Language Changed to English**: Updated default language from French to English across the website, including HTML meta tags, navigation, hero section, services, and all static content
- **Updated Gallery Images**: Replaced transport fleet image with professional white trucks photo and warehouse section with authentic warehouse facility showing blue/orange racking systems and forklift operations
- **Added Welcome Chatbot**: Implemented an interactive welcome chatbot that appears 3 seconds after page load, featuring bilingual support (French/English), navigation shortcuts to services and contact sections, WhatsApp integration, and professional maritime-themed design with ship icons
- Verified all website functionality works correctly in Replit environment
- **August 2, 2025**: Enhanced contact form with professional shipping quote fields including departure/arrival countries, addresses, incoterms, shipping dates, and cargo descriptions - matching modern shipping industry standards
- **August 2, 2025**: Created dedicated cargo tracking page (suivi.html) featuring major shipping carriers (Maersk, CMA CGM, MSC, Hapag-Lloyd, COSCO, ONE) with official logos, real tracking URLs, search functionality, hover effects, tooltips, and full bilingual support
- **August 2, 2025**: Removed old tracking section from main page to avoid duplication, now redirecting all tracking functionality to dedicated suivi.html page
- **August 2, 2025**: Enhanced chatbot appearance with modern design improvements including gradient backgrounds, animated elements, improved hover effects, custom scrollbars, glassmorphism effects, and advanced CSS animations for a premium user experience
- **August 2, 2025**: Successfully migrated project from Replit Agent to standard Replit environment with full Node.js server functionality
- **August 2, 2025**: Created custom bot logo SVG and replaced ship icons in chatbot with professional bot avatar
- **August 2, 2025**: Adjusted chatbot positioning higher on screen (moved from bottom: 20px to bottom: 60px for trigger, bottom: 100px to bottom: 140px for container) for better user experience
- **August 2, 2025**: Fixed all missing translation keys for footer sections and chatbot in both French and English languages
- **August 2, 2025**: Reduced chatbot size for more compact display (320px width, 450px max height) with smaller fonts (13px messages, 13px buttons) to ensure all text is visible and less screen intrusion
- **August 2, 2025**: Comprehensive SEO optimization including enhanced meta tags, structured data (Schema.org), sitemap.xml, robots.txt, geo-tagging, Open Graph tags, Twitter Cards, hreflang attributes, and semantic HTML improvements for better search engine visibility
- **August 2, 2025**: Updated all domain references from replit.app to wenibac.com for production deployment including canonical URLs, Open Graph tags, sitemap, and structured data
- **August 2, 2025**: Added prominent statistics section highlighting "1,200+ clients satisfied across Africa" with animated counters displaying company achievements including 30+ years experience, 15+ African countries served, and 10,000+ containers processed
- **August 2, 2025**: Removed hero trust badge per user request while keeping the main statistics section
- **August 3, 2025**: Successfully completed migration from Replit Agent to standard Replit environment with Node.js Express server running on port 5000
- **August 3, 2025**: Updated client statistics from 1,200+ to 5,500+ satisfied clients across Africa per user request

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Single Page Application (SPA)**: Built with vanilla HTML, CSS, and JavaScript
- **Component-based Structure**: Modular sections for navigation, hero, services, testimonials, contact, etc.
- **Responsive Design**: Mobile-first approach using CSS Grid and Flexbox
- **Progressive Enhancement**: Core functionality works without JavaScript, enhanced features added progressively

### Internationalization (i18n)
- **Language System**: Custom translation system with French and English support
- **Dynamic Content Switching**: JavaScript-based language toggle without page reload
- **Translation Management**: Centralized translation objects in `translations.js`

### Styling Architecture
- **CSS Custom Properties**: Extensive use of CSS variables for consistent theming
- **Design System**: Standardized color palette, typography scale, and spacing system
- **Component-based CSS**: Modular styles organized by functionality
- **Animation Framework**: CSS transitions and keyframe animations for smooth UX

## Key Components

### 1. Navigation System
- **Sticky Navigation**: Fixed header with scroll-based styling changes
- **Mobile Menu**: Hamburger menu for mobile devices
- **Language Switcher**: Toggle between French (FR) and English (EN)
- **Active State Management**: Highlights current section during scroll

### 2. Content Management
- **Translation Engine**: Dynamic content replacement based on selected language
- **Testimonials Carousel**: Auto-rotating customer testimonials with manual controls
- **Lazy Loading**: Performance optimization for images and media content
- **Form Handling**: Contact form with validation and submission handling

### 3. User Interface Components
- **Hero Section**: Animated banner with call-to-action buttons
- **Services Grid**: Interactive service cards with hover effects
- **Gallery System**: Image carousel with lightbox functionality
- **Contact Integration**: WhatsApp API integration for direct messaging

### 4. Performance Features
- **Optimized Loading**: Lazy loading for images and non-critical resources
- **Smooth Scrolling**: Enhanced navigation experience
- **Animation System**: CSS-based animations with JavaScript triggers
- **SEO Optimization**: Meta tags, structured data, and semantic HTML

### 5. Cargo Tracking System
- **Dedicated Tracking Page**: Standalone suivi.html page with comprehensive carrier directory
- **Major Shipping Lines**: Integration with Maersk, CMA CGM, MSC, Hapag-Lloyd, COSCO, and ONE
- **Official Branding**: Custom SVG logos based on official brand guidelines
- **Real Tracking URLs**: Direct links to official carrier tracking platforms
- **Interactive Features**: Search functionality, hover effects, tooltips with carrier information
- **Bilingual Support**: Complete French/English translation system with dedicated translation file
- **Responsive Design**: Mobile-optimized layout with animated card reveals

## Data Flow

### Client-Side State Management
1. **Language State**: Current language preference stored and managed globally
2. **Navigation State**: Active section tracking and menu state management
3. **Component State**: Individual component states (carousel position, form data, etc.)
4. **User Interactions**: Event-driven updates to UI components

### Content Delivery Flow
1. **Initial Load**: HTML structure with default French content
2. **Language Detection**: Check for saved language preference
3. **Content Translation**: Apply appropriate translations based on selected language
4. **Dynamic Updates**: Real-time content updates on language switch

## External Dependencies

### Third-Party Services
- **Google Fonts**: Inter font family for typography
- **Font Awesome**: Icon library for UI elements
- **Google Maps**: Location mapping for business address
- **WhatsApp API**: Direct messaging integration

### CDN Resources
- **Font Awesome CDN**: Icon delivery
- **Google Fonts CDN**: Web font delivery
- **Performance**: Leverages CDN caching for improved load times

### Optional Integrations
- **Google Analytics**: Website traffic and user behavior tracking
- **Contact Form Backend**: Email service integration for form submissions

## Deployment Strategy

### Static Website Hosting
- **Platform**: Suitable for any static hosting service (Netlify, Vercel, GitHub Pages, etc.)
- **Build Process**: No build step required - direct file deployment
- **Asset Organization**: Structured file hierarchy for easy maintenance

### File Structure
```
/
├── index.html              # Main HTML structure
├── suivi.html             # Dedicated cargo tracking page
├── styles.css             # Complete styling system
├── script.js              # Application logic and interactions
├── translations.js        # Main language translation data
├── translations-suivi.js  # Tracking page translations
├── server.js              # Node.js Express server for form handling
└── assets/                # Images, favicon, and media files
```

### Performance Considerations
- **Minification**: CSS and JavaScript can be minified for production
- **Image Optimization**: Compress images for web delivery
- **Caching Strategy**: Leverage browser caching for static assets
- **CDN Integration**: External resources served via CDN

### SEO and Marketing
- **Meta Tags**: Comprehensive Open Graph and meta tag implementation
- **Structured Data**: JSON-LD markup for better search engine understanding
- **Sitemap**: XML sitemap generation for search engine indexing
- **Analytics**: Google Analytics integration for performance tracking

### Maintenance and Updates
- **Content Updates**: Easy modification through translation files
- **Design Changes**: CSS custom properties enable quick theme adjustments
- **Feature Additions**: Modular architecture supports easy feature expansion
- **Multi-language Content**: Centralized translation management system