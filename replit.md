# Wenibac Advanced Shipping Ltd. Website

## Overview
This project delivers a bilingual (French/English) and responsive website for Wenibac Advanced Shipping Ltd., a transit and logistics company based at the Tema port in Ghana. The site's primary purpose is to professionally present shipping and logistics services, with a strong emphasis on "Transit" operations. Key capabilities include comprehensive service descriptions, an interactive cargo tracking system, a detailed company history, and lead generation through an enhanced contact form. The website aims to establish Wenibac as a leading and officially approved transit agency at Tema Port, expanding its market reach across Africa.

## Recent Changes (August 2025)
- **August 8, 2025**: Added comprehensive FAQ section with 6 frequently asked questions covering services, pricing, customs procedures, delivery countries, cargo tracking, and required documents - features interactive accordion design with smooth animations, bilingual support (English/French), modern gradient styling, and integrated contact section with WhatsApp and contact form links
- **August 8, 2025**: Successfully completed migration from Replit Agent to standard Replit environment - installed all required Node.js dependencies (express, cors, @sendgrid/mail, xlsx), verified server running on port 5000, and enhanced cargo tracking system with 5 new shipping companies: Grimaldi Group, Supermaritime, OOCL, PIL, and Arkas Line with complete bilingual support including proper tracking URLs
- **August 5, 2025**: Completed migration from Replit Agent to standard Replit environment - fixed hero section "priority" text visibility by ensuring white color display, resolved translation system console warnings by adding missing footer/chatbot translations, verified all dependencies properly installed and server running successfully on port 5000
- **August 5, 2025**: Fixed critical hero section visibility issue where "priority" text was disappearing - disabled problematic animations and ensured all hero title text displays in white with !important declarations for consistent visibility across all devices
- **August 5, 2025**: Added constant floating animation to hero title "Your cargo, our priority" with enhanced glow effects - increased visibility and brightness of "cargo" text with stronger blue glow and improved contrast
- **August 5, 2025**: Adjusted mobile hero text positioning - fine-tuned vertical placement with reduced padding and moderate negative margins for optimal mobile viewing experience
- **August 7, 2025**: Modernized contact form design with enhanced styling - improved field borders, focus effects, hover states, custom select arrows, gradient background container, and elevated submit button design for better user experience
- **August 7, 2025**: Modernized contact information section design - enhanced contact card with gradient background, improved icon styling with background containers, better typography hierarchy, hover effects, and responsive mobile optimization for professional appearance
- **August 7, 2025**: Implemented ocean wave background for statistics section - created dynamic oceanic effect with multiple animated wave layers, gradient ocean colors (deep blues), flowing animations, and SVG wave patterns that simulate realistic sea movement for maritime theme enhancement
- **August 7, 2025**: Updated WhatsApp contact number across all website sections - changed from +233303214304 to +233265193893 in contact information, footer, schema data, FAQ content, and JavaScript functions for consistent communication channels
- **August 7, 2025**: Updated main phone numbers across all website sections - replaced single phone number with two new numbers: +233244801443 and +233518813480 in contact information, footer, schema data, FAQ content, and about section while maintaining WhatsApp number +233265193893
- **August 5, 2025**: Added professional founder photo section to "Our History" with Mr. Yacubu Dawuda's image, implemented responsive design with circular photo layout, and fixed mobile text display issues to ensure full name visibility on all devices
- **August 5, 2025**: Successfully migrated project from Replit Agent to standard Replit environment - installed Node.js dependencies (express, cors, @sendgrid/mail, xlsx), fixed translation system fallback logic for proper bilingual functionality, and verified server deployment on port 5000
- **August 4, 2025**: Fixed mobile hero section title visibility by adjusting padding to 120px (tablets) and 140px (smartphones)
- **August 4, 2025**: Enhanced chatbot mobile display with increased container height (400px), improved message area (220px), better text wrapping, and responsive font sizing for optimal readability on smartphones
- **August 4, 2025**: Added pleasant notification sound to chatbot using Web Audio API - plays a two-tone chime when chatbot appears (automatically after 3 seconds or when manually opened) with robust fallback system (Web Audio API → HTML5 Audio → Visual pulse) and user interaction detection for browser compatibility
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
- **FAQ Section**: Interactive frequently asked questions section positioned between gallery and contact, featuring 6 key questions about services, pricing, customs procedures, delivery destinations, cargo tracking, and documentation requirements. Includes accordion-style interface with smooth animations, professional gradient design, and integrated contact encouragement.
- **Founder Section**: Professional presentation of company founder Mr. Yacubu Dawuda in the "Our History" section with circular photo, bilingual captions, and fully responsive mobile design ensuring proper text display across all devices.
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