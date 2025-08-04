# Wenibac Advanced Shipping Ltd. Website

## Overview
This project delivers a bilingual (French/English) and responsive website for Wenibac Advanced Shipping Ltd., a transit and logistics company based at the Tema port in Ghana. The site's primary purpose is to professionally present shipping and logistics services, with a strong emphasis on "Transit" operations. Key capabilities include comprehensive service descriptions, an interactive cargo tracking system, a detailed company history, and lead generation through an enhanced contact form. The website aims to establish Wenibac as a leading and officially approved transit agency at Tema Port, expanding its market reach across Africa.

## Recent Changes (August 2025)
- **August 4, 2025**: Fixed mobile hero section title visibility by adjusting padding to 120px (tablets) and 140px (smartphones)
- **August 4, 2025**: Enhanced chatbot mobile display with increased container height (400px), improved message area (220px), better text wrapping, and responsive font sizing for optimal readability on smartphones
- **August 4, 2025**: Added pleasant notification sound to chatbot using Web Audio API - plays a two-tone chime when chatbot appears (automatically after 3 seconds or when manually opened) with fallback audio support for better user engagement
- **August 3, 2025**: Comprehensive SEO optimization enhancement with 150+ targeted keywords including logistics terminology, Ghana-specific terms, industry-specific vocabulary (FCL/LCL, ECOWAS, customs clearance, freight forwarding, supply chain, etc.), advanced technology terms (AI logistics, IoT tracking, blockchain), and West Africa regional focus
- **August 3, 2025**: Enhanced structured data with FAQ schema, service catalog, area served information, and detailed business knowledge for better search engine understanding
- **August 3, 2025**: Enriched service descriptions in both French and English with comprehensive SEO keywords covering customs clearance, multimodal transport, warehouse management, trade finance, and specialized logistics services

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture
### Frontend Architecture
The website is built as a Single Page Application (SPA) using vanilla HTML, CSS, and JavaScript, following a component-based structure. It adopts a mobile-first responsive design approach utilizing CSS Grid and Flexbox, with progressive enhancement ensuring core functionality is available even without JavaScript.

### Internationalization (i18n)
A custom translation system supports both French and English, featuring JavaScript-based dynamic content switching without page reloads. Translation data is centralized in dedicated JavaScript files (`translations.js`, `translations-suivi.js`).

### Styling Architecture
A robust design system is implemented using CSS Custom Properties for consistent theming (color palette, typography, spacing). Styles are modular and component-based, with CSS transitions and keyframe animations providing smooth user experience.

### Key Features and Components
- **Navigation System**: Sticky navigation with mobile hamburger menu, language switcher, and active state management. Includes a live visitor counter with bilingual support.
- **Content Management**: Features a dynamic translation engine, an auto-rotating testimonials carousel, lazy loading for performance, and robust form handling.
- **User Interface Components**: Includes an animated hero section, interactive service cards, an image gallery with lightbox functionality, and WhatsApp API integration.
- **Cargo Tracking System**: A dedicated `suivi.html` page offers a comprehensive directory of major shipping carriers (Maersk, CMA CGM, MSC, Hapag-Lloyd, COSCO, ONE) with official logos, real tracking URLs, search functionality, and interactive elements, all fully bilingual and responsive.
- **Chatbot**: An interactive, bilingual welcome chatbot with navigation shortcuts and WhatsApp integration, featuring modern design enhancements and professional maritime-themed aesthetics.
- **Contact Form**: Enhanced to include professional shipping quote fields (departure/arrival countries, incoterms, shipping dates, cargo descriptions).
- **SEO Optimization**: Comprehensive on-page SEO including enhanced meta tags, structured data (Schema.org, FAQ schema, service catalog), sitemap.xml, robots.txt, geo-tagging, Open Graph tags, Twitter Cards, hreflang attributes, and semantic HTML for improved search visibility and targeting over 150 keywords related to logistics and Ghana.
- **Statistics Section**: Prominently displays company achievements with animated counters, highlighting client satisfaction, years of experience, countries served, and containers processed.

### Technical Implementation
The project runs on a Node.js Express server on port 5000, serving static files. Client-side state management handles language preferences, navigation, and component states.

## External Dependencies
### Third-Party Services
- **Google Fonts**: Used for typography (Inter font family).
- **Font Awesome**: Provides an icon library for UI elements.
- **Google Maps**: Integrated for location mapping of the business address.
- **WhatsApp API**: Used for direct messaging integration.

### CDN Resources
- **Font Awesome CDN**: For icon delivery.
- **Google Fonts CDN**: For web font delivery.

### Optional Integrations
- **Google Analytics**: For website traffic and user behavior tracking.
- **Contact Form Backend**: Placeholder for an email service integration for form submissions.