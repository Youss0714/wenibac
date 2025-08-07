// Translations for tracking page
const trackingTranslations = {
    fr: {
        // Page metadata
        page_title: "Suivi de Cargaison - Wenibac Advanced Shipping Ltd.",
        page_description: "Suivez vos cargaisons avec les principaux transporteurs maritimes - Maersk, CMA CGM, MSC, Hapag-Lloyd et plus encore.",
        
        // Header
        back_to_home: "Retour à l'accueil",
        
        // Main content
        main_title: "Suivi de Cargaison",
        main_subtitle: "Accédez directement aux plateformes de suivi des principaux transporteurs maritimes mondiaux. Suivez vos conteneurs en temps réel avec précision et simplicité.",
        
        // Search
        search_placeholder: "Rechercher un transporteur...",
        
        // Carrier information
        market_share: "Part de marché:",
        teus_capacity: "TEUs Capacité",
        ships: "Navires",
        track_button: "Suivre votre cargaison",
        
        // Carrier descriptions
        maersk: {
            name: "Maersk",
            description: "Leader mondial en logistique intégrée, Maersk offre un suivi avancé avec géolocalisation en temps réel, notifications automatiques et gestion complète de votre chaîne d'approvisionnement.",
            tooltip: "Leader mondial du transport maritime depuis 1904. L'étoile à 7 branches est utilisée depuis 1886."
        },
        cma_cgm: {
            name: "CMA CGM",
            description: "Compagnie française leader, CMA CGM propose un suivi détaillé avec position des navires sur carte interactive, documents centralisés et gestion en ligne des factures et paiements.",
            tooltip: "3ème transporteur mondial. Compagnie française fondée en 1978, spécialisée dans tous types de cargaisons."
        },
        msc: {
            name: "MSC",
            description: "Plus grande flotte de conteneurs au monde, MSC offre un réseau global incomparable avec un suivi précis et des solutions de transport intégrées pour tous types de marchandises.",
            tooltip: "Plus grande compagnie de transport maritime au monde. Basée en Suisse, dessert 520 ports dans 230 pays."
        },
        hapag_lloyd: {
            name: "Hapag-Lloyd",
            description: "Compagnie allemande de référence offrant un service de qualité avec suivi détaillé des mouvements planifiés et réels, interface intuitive et notifications proactives.",
            tooltip: "Compagnie allemande historique fondée en 1970. Spécialisée dans les services liner et la logistique."
        },
        cosco: {
            name: "COSCO Shipping",
            description: "Leader chinois du transport maritime, COSCO Shipping offre des solutions globales avec un suivi avancé, particulièrement efficace sur les routes commerciales Asie-Europe et transpacifiques.",
            tooltip: "Géant chinois du shipping. 4ème transporteur mondial avec une forte présence sur les routes Asie-Europe."
        },
        one: {
            name: "Ocean Network Express",
            description: "Alliance japonaise moderne alliant tradition et innovation, ONE propose un suivi de haute précision avec interface digitale avancée et service client d'excellence japonaise.",
            tooltip: "Alliance japonaise créée en 2018. Fusion de K Line, MOL et NYK. Excellence du service japonais."
        },
        grimaldi_group: {
            name: "Grimaldi Group",
            description: "Leader européen du transport ferry et cargo, Grimaldi Group offre des services de suivi efficaces pour les routes méditerranéennes avec une expertise dans le transport de passagers et marchandises.",
            tooltip: "Leader européen du transport maritime ferry et cargo. Spécialisé dans les routes méditerranéennes."
        },
        supermaritime: {
            name: "Supermaritime",
            description: "Spécialiste des routes d'Afrique de l'Ouest, Supermaritime offre un service de suivi personnalisé avec une connaissance approfondie des ports africains et des réglementations locales.",
            tooltip: "Compagnie spécialisée dans les routes d'Afrique de l'Ouest avec une expertise régionale approfondie."
        },
        oocl: {
            name: "OOCL",
            description: "Orient Overseas Container Line, basée à Hong Kong, offre un suivi avancé avec technologie de pointe et excellence dans le service client sur les routes transpacifiques et asiatiques.",
            tooltip: "Compagnie de Hong Kong, membre du groupe COSCO. Forte présence sur les routes transpacifiques."
        },
        pil: {
            name: "PIL",
            description: "Pacific International Lines, leader singapourien, offre un suivi précis avec une expertise unique des routes intra-asiatiques et des services personnalisés pour le marché asiatique.",
            tooltip: "Compagnie singapourienne leader en Asie-Pacifique. Expertise dans les routes intra-asiatiques."
        },
        arkas_line: {
            name: "Arkas Line",
            description: "Compagnie turque de référence, Arkas Line propose un suivi efficace avec une spécialisation en Méditerranée orientale et une expertise approfondie des routes régionales.",
            tooltip: "Compagnie turque leader en Méditerranée orientale avec une expertise dans les routes régionales."
        }
    },
    
    en: {
        // Page metadata
        page_title: "Cargo Tracking - Wenibac Advanced Shipping Ltd.",
        page_description: "Track your cargo with major shipping lines - Maersk, CMA CGM, MSC, Hapag-Lloyd and more.",
        
        // Header
        back_to_home: "Back to home",
        
        // Main content
        main_title: "Cargo Tracking",
        main_subtitle: "Access direct tracking platforms of the world's leading maritime carriers. Track your containers in real-time with precision and simplicity.",
        
        // Search
        search_placeholder: "Search for a carrier...",
        
        // Carrier information
        market_share: "Market share:",
        teus_capacity: "TEUs Capacity",
        ships: "Ships",
        track_button: "Track your cargo",
        
        // Carrier descriptions
        maersk: {
            name: "Maersk",
            description: "Global leader in integrated logistics, Maersk offers advanced tracking with real-time geolocation, automatic notifications and complete supply chain management.",
            tooltip: "Global shipping leader since 1904. The 7-pointed star has been used since 1886."
        },
        cma_cgm: {
            name: "CMA CGM",
            description: "Leading French company, CMA CGM provides detailed tracking with interactive vessel positioning maps, centralized documents and online invoice and payment management.",
            tooltip: "3rd largest global carrier. French company founded in 1978, specialized in all types of cargo."
        },
        msc: {
            name: "MSC",
            description: "World's largest container fleet, MSC offers an unmatched global network with precise tracking and integrated transport solutions for all types of goods.",
            tooltip: "World's largest shipping company. Based in Switzerland, serves 520 ports in 230 countries."
        },
        hapag_lloyd: {
            name: "Hapag-Lloyd",
            description: "Reference German company offering quality service with detailed tracking of planned and actual movements, intuitive interface and proactive notifications.",
            tooltip: "Historic German company founded in 1970. Specialized in liner services and logistics."
        },
        cosco: {
            name: "COSCO Shipping",
            description: "Chinese shipping leader, COSCO Shipping offers global solutions with advanced tracking, particularly effective on Asia-Europe and transpacific trade routes.",
            tooltip: "Chinese shipping giant. 4th largest global carrier with strong presence on Asia-Europe routes."
        },
        one: {
            name: "Ocean Network Express",
            description: "Modern Japanese alliance combining tradition and innovation, ONE offers high-precision tracking with advanced digital interface and Japanese service excellence.",
            tooltip: "Japanese alliance created in 2018. Merger of K Line, MOL and NYK. Japanese service excellence."
        },
        grimaldi_group: {
            name: "Grimaldi Group",
            description: "European leader in ferry and cargo transport, Grimaldi Group offers efficient tracking services for Mediterranean routes with expertise in passenger and freight transport.",
            tooltip: "European leader in maritime ferry and cargo transport. Specialized in Mediterranean routes."
        },
        supermaritime: {
            name: "Supermaritime",
            description: "West Africa routes specialist, Supermaritime offers personalized tracking service with deep knowledge of African ports and local regulations.",
            tooltip: "Company specialized in West Africa routes with deep regional expertise."
        },
        oocl: {
            name: "OOCL",
            description: "Orient Overseas Container Line, based in Hong Kong, offers advanced tracking with cutting-edge technology and service excellence on transpacific and Asian routes.",
            tooltip: "Hong Kong company, member of COSCO group. Strong presence on transpacific routes."
        },
        pil: {
            name: "PIL",
            description: "Pacific International Lines, Singaporean leader, offers precise tracking with unique expertise in intra-Asian routes and personalized services for the Asian market.",
            tooltip: "Singaporean leader in Asia-Pacific. Expertise in intra-Asian routes."
        },
        arkas_line: {
            name: "Arkas Line",
            description: "Reference Turkish company, Arkas Line offers efficient tracking with specialization in Eastern Mediterranean and deep expertise in regional routes.",
            tooltip: "Turkish leader in Eastern Mediterranean with expertise in regional routes."
        }
    }
};

// Language management for tracking page
let currentTrackingLanguage = 'fr';

function initTrackingPage() {
    // Detect language from URL parameter or use default
    const urlParams = new URLSearchParams(window.location.search);
    const lang = urlParams.get('lang') || 'fr';
    setTrackingLanguage(lang);
    
    // Set up language toggle if present
    setupTrackingLanguageToggle();
}

function setTrackingLanguage(lang) {
    currentTrackingLanguage = lang;
    updateTrackingPageContent();
    updateDocumentMeta();
}

function updateTrackingPageContent() {
    const translations = trackingTranslations[currentTrackingLanguage];
    
    // Update page title and subtitle
    updateElementContent('.page-title', translations.main_title);
    updateElementContent('.page-subtitle', translations.main_subtitle);
    
    // Update search placeholder
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.placeholder = translations.search_placeholder;
    }
    
    // Update back link
    updateElementContent('.back-link', translations.back_to_home);
    
    // Update carrier cards
    updateCarrierCards(translations);
}

function updateCarrierCards(translations) {
    const carriers = ['maersk', 'cma_cgm', 'msc', 'hapag_lloyd', 'cosco', 'one', 'grimaldi_group', 'supermaritime', 'oocl', 'pil', 'arkas_line'];
    
    carriers.forEach(carrier => {
        const card = document.querySelector(`[data-name*="${carrier}"]`);
        if (!card) return;
        
        const carrierData = translations[carrier];
        if (!carrierData) return;
        
        // Update description
        const description = card.querySelector('.carrier-description');
        if (description) description.textContent = carrierData.description;
        
        // Update tooltip
        const tooltip = card.querySelector('.tooltip');
        if (tooltip) tooltip.textContent = carrierData.tooltip;
        
        // Update button text
        const button = card.querySelector('.track-button');
        if (button) {
            const buttonText = button.querySelector('span:last-child') || button;
            if (buttonText && !buttonText.querySelector('i')) {
                buttonText.textContent = translations.track_button;
            }
        }
        
        // Update stats labels
        const statLabels = card.querySelectorAll('.stat-label');
        if (statLabels[0]) statLabels[0].textContent = translations.teus_capacity;
        if (statLabels[1]) statLabels[1].textContent = translations.ships;
    });
    
    // Update market share labels
    document.querySelectorAll('.market-share').forEach(element => {
        const text = element.textContent;
        const percentage = text.match(/\d+\.?\d*%/);
        if (percentage) {
            element.textContent = `${translations.market_share} ${percentage[0]}`;
        }
    });
}

function updateElementContent(selector, content) {
    const element = document.querySelector(selector);
    if (element) element.textContent = content;
}

function updateDocumentMeta() {
    const translations = trackingTranslations[currentTrackingLanguage];
    
    // Update document title
    document.title = translations.page_title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.content = translations.page_description;
    }
    
    // Update html lang attribute
    document.documentElement.lang = currentTrackingLanguage;
}

function setupTrackingLanguageToggle() {
    // Create language toggle if it doesn't exist
    let langToggle = document.querySelector('.tracking-lang-toggle');
    if (!langToggle) {
        const header = document.querySelector('.header-content');
        if (header) {
            langToggle = document.createElement('div');
            langToggle.className = 'tracking-lang-toggle';
            langToggle.innerHTML = `
                <button class="lang-btn" onclick="toggleTrackingLanguage()">
                    <span id="currentTrackingLang">${currentTrackingLanguage.toUpperCase()}</span>
                    <i class="fas fa-globe"></i>
                </button>
            `;
            header.appendChild(langToggle);
        }
    }
}

function toggleTrackingLanguage() {
    const newLang = currentTrackingLanguage === 'fr' ? 'en' : 'fr';
    setTrackingLanguage(newLang);
    
    // Update toggle button
    const langButton = document.querySelector('#currentTrackingLang');
    if (langButton) {
        langButton.textContent = newLang.toUpperCase();
    }
    
    // Update URL parameter
    const url = new URL(window.location);
    url.searchParams.set('lang', newLang);
    window.history.replaceState({}, '', url);
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', initTrackingPage);