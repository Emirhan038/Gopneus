document.addEventListener("DOMContentLoaded", function () {
    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const mainMenu = document.querySelector('.main-menu');

    hamburger.addEventListener('click', function () {
        mainMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            // Close mobile menu if open
            if (mainMenu.classList.contains('active')) {
                mainMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header scroll effect
    const header = document.querySelector('header');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Add scroll class if page is already scrolled when loaded
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    }

    initLanguageSwitcher();
    initScrollAnimations();
});

function initScrollAnimations() {
    const targets = document.querySelectorAll(
        '.stat-item, .service-card, .why-card, .review-card, .brand-box, .section-title, .banden-info, .over-ons-content, .contact-info, .contact-form, .hero-badge'
    );

    targets.forEach(el => el.classList.add('fade-in'));

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

    targets.forEach(el => observer.observe(el));
}

const translations = {
    nl: {
        // Top bar & nav
        topbar_hours: 'Maandag - Zaterdag: 9:00 - 19:00',
        topbar_contact: 'Contact',
        nav_home: 'Home',
        nav_services: 'Diensten',
        nav_tyres: 'Banden',
        nav_about: 'Over Ons',
        nav_contact: 'Contact',
        // Hero
        hero_badge: 'Uw bandenspecialist in Schaerbeek',
        hero_title: 'GoPneus: Uw betrouwbare bandenpartner',
        hero_text: 'Professionele bandenservice in Schaerbeek met snelle montage, persoonlijk advies en onderhoud voor elk type wagen.',
        hero_btn_whatsapp: 'Maak afspraak via WhatsApp',
        hero_btn_call: 'Bel +32 483 42 95 06',
        // Stats
        stat_customers: 'Tevreden klanten',
        stat_rating: 'Google beoordeling',
        stat_experience: 'Jaar ervaring',
        stat_hours: '9:00 – 19:00 open',
        // Services
        services_title: 'Onze Diensten',
        service1_title: 'Nieuwe & Tweedehands Banden',
        service1_text: 'Breed assortiment aan nieuwe en tweedehands banden voor alle voertuigen en seizoenen.',
        service2_title: 'Remschijven & Remblokken',
        service2_text: 'Wij doen remschijven en remblokken — alles voor optimale veiligheid en remprestaties.',
        service3_title: 'Airco Hervulling',
        service3_text: 'Hervulling van R134A & R1234YF aircosystemen voor een optimaal klimaat in uw auto.',
        service4_title: 'Technische Controle',
        service4_text: 'Voorbereiding voor de technische keuring.',
        service5_title: 'Auto Diagnose',
        service5_text: 'Professionele diagnose van uw voertuig met de nieuwste uitleesapparatuur voor alle merken.',
        service6_title: 'Koplampen Uitlijnen',
        service6_text: 'Nauwkeurige uitlijning van uw koplampen voor optimaal zicht en veiligheid.',
        service7_title: 'Banden Balanceren',
        service7_text: 'Professioneel balanceren van uw banden voor optimaal weggedrag en bandenslijtage.',
        service8_title: 'Vervanging Lampen',
        service8_text: 'Snelle en vakkundige vervanging van alle soorten autoverlichting.',
        service9_title: 'Vervanging van Batterijen',
        service9_text: 'Snelle en vakkundige vervanging van alle soorten autobatterijen.',
        service10_title: 'Onderstel & Kleine Reparatie',
        service10_text: 'Vakkundige reparaties aan het onderstel en andere kleine herstellingen van uw auto.',
        service11_title: 'Seizoenswissel Banden',
        service11_text: 'Professionele wissel van winter- naar zomerbanden en omgekeerd.',
        // Why us
        why_title: 'Waarom kiezen voor GoPneus?',
        why1_title: 'Persoonlijk advies',
        why1_text: 'Onze specialisten helpen u snel bij het kiezen van de beste banden en service voor uw auto.',
        why2_title: 'Snelle service',
        why2_text: 'Efficiënte bandenmontage, uitlijning en onderhoud zodat u snel weer veilig op de baan bent.',
        why3_title: 'Topkwaliteit',
        why3_text: 'Wij werken met betrouwbare bandenmerken en leveren professionele service met aandacht voor details.',
        // Brands
        trusted_title: 'Topbandmerken die wij voeren',
        // Reviews
        reviews_title: 'Echte Google Reviews',
        reviews_message: 'Hier zijn echte reviews van klanten die GoPneus beoordeeld hebben op Google.',
        reviews_btn: 'Bekijk alle Google Reviews',
        review1_time: '2 maanden geleden',
        review2_time: '3 maanden geleden',
        review3_time: '4 maanden geleden',
        review4_time: '4 maanden geleden',
        review5_time: '8 maanden geleden',
        review6_time: '11 maanden geleden',
        // Tyres section
        tyres_title: 'Onze Banden',
        tyres_subtitle: 'Kwaliteitsbanden voor elke auto',
        tyres_intro: 'Bij GoPneus vindt u een ruim assortiment aan banden:',
        tyres_li1: 'Nieuwe banden van topmerken',
        tyres_li2: 'Kwalitatieve tweedehands banden',
        tyres_li3: 'Zomerbanden',
        tyres_li4: 'Winterbanden',
        tyres_li5: 'All-season banden',
        tyres_li6: "Banden voor personenwagens, SUV's en bestelwagens",
        tyres_li7: 'Ook velgen en complete wielen beschikbaar op aanvraag',
        tyres_order: 'Wij bestellen elke band die u wilt, inclusief uw favoriete merk en velgtype.',
        tyres_help: 'Wij helpen u graag bij het kiezen van de juiste banden voor uw auto en rijstijl.',
        tyres_cta: 'Vraag advies',
        // About
        about_title: 'Over GoPneus',
        about_subtitle: 'Uw vertrouwde partner voor alles rond banden en autoservice',
        about_text1: 'GoPneus is een familiebedrijf gespecialiseerd in banden en autoservice in Schaerbeek. Met jarenlange ervaring bieden wij professionele diensten aan voor alle automerken.',
        about_priorities: 'Onze prioriteiten:',
        about_li1: 'Kwaliteit tegen eerlijke prijzen',
        about_li2: 'Snelle service',
        about_li3: 'Persoonlijk advies',
        about_li4: 'Klanttevredenheid',
        about_visit: 'Kom langs in onze garage en ervaar zelf ons vakmanschap en onze service!',
        // Contact
        contact_title: 'Contact',
        contact_data_title: 'Onze gegevens',
        opening_hours_title: 'Openingstijden:',
        opening_mon_sat: 'Maandag - Zaterdag:',
        opening_sunday: 'Zondag:',
        opening_closed: 'Gesloten',
        appointment_title: 'Maak uw afspraak via WhatsApp',
        appointment_text1: 'Voor snelle en directe afspraakafhandeling kunt u ons een WhatsApp-bericht sturen.',
        appointment_text2: 'Wij reageren zo snel mogelijk en plannen uw bandenservice of onderhoud in.',
        whatsapp_appointment: 'WhatsApp afspraak',
        contact_location: 'Onze locatie',
        // Footer
        footer_tagline: 'Uw specialist in banden en autoservice in Schaerbeek. Snelle service, eerlijke prijzen en persoonlijk advies.',
        footer_links_title: 'Snelle links',
        footer_contact_title: 'Contact ons',
        footer_schedule: 'Ma–Za: 9:00 – 19:00',
        footer_copyright: '© 2026 GoPneus. Alle rechten voorbehouden.'
    },
    fr: {
        // Top bar & nav
        topbar_hours: 'Lundi - Samedi : 9h00 - 19h00',
        topbar_contact: 'Contact',
        nav_home: 'Accueil',
        nav_services: 'Services',
        nav_tyres: 'Pneus',
        nav_about: 'À propos',
        nav_contact: 'Contact',
        // Hero
        hero_badge: 'Votre spécialiste pneus à Schaerbeek',
        hero_title: 'GoPneus : Votre spécialiste pneus de confiance',
        hero_text: 'Service pneus professionnel à Schaerbeek avec montage rapide, conseils personnalisés et entretien pour tous les véhicules.',
        hero_btn_whatsapp: 'Prendre rendez-vous via WhatsApp',
        hero_btn_call: 'Appeler +32 483 42 95 06',
        // Stats
        stat_customers: 'Clients satisfaits',
        stat_rating: 'Avis Google',
        stat_experience: "Ans d'expérience",
        stat_hours: '9h00 – 19h00 ouvert',
        // Services
        services_title: 'Nos Services',
        service1_title: 'Pneus Neufs & Occasion',
        service1_text: "Large gamme de pneus neufs et d'occasion pour tous les véhicules et saisons.",
        service2_title: 'Disques & Plaquettes de Frein',
        service2_text: 'Nous faisons les disques et plaquettes de frein — tout pour une sécurité et des performances de freinage optimales.',
        service3_title: 'Recharge Climatisation',
        service3_text: 'Recharge des systèmes de climatisation R134A et R1234YF pour un confort thermique optimal dans votre voiture.',
        service4_title: 'Contrôle Technique',
        service4_text: 'Préparation pour le contrôle technique.',
        service5_title: 'Diagnostic Auto',
        service5_text: 'Diagnostic professionnel de votre véhicule avec les derniers équipements de lecture pour toutes les marques.',
        service6_title: 'Réglage des Phares',
        service6_text: 'Alignement précis de vos phares pour une visibilité et une sécurité optimales.',
        service7_title: 'Équilibrage des Pneus',
        service7_text: 'Équilibrage professionnel de vos pneus pour un comportement routier optimal et une usure minimale.',
        service8_title: "Remplacement d'Ampoules",
        service8_text: "Remplacement rapide et professionnel de tous types d'éclairage automobile.",
        service9_title: 'Remplacement de Batteries',
        service9_text: 'Remplacement rapide et professionnel de tous types de batteries automobiles.',
        service10_title: 'Châssis & Petites Réparations',
        service10_text: 'Réparations professionnelles du châssis et autres petites réparations de votre voiture.',
        service11_title: 'Changement Saisonnier de Pneus',
        service11_text: "Changement professionnel de pneus d'hiver en été et vice versa.",
        // Why us
        why_title: 'Pourquoi choisir GoPneus ?',
        why1_title: 'Conseils personnalisés',
        why1_text: "Nos spécialistes vous aident rapidement à choisir les meilleurs pneus et services pour votre voiture.",
        why2_title: 'Service rapide',
        why2_text: "Montage, alignement et entretien de pneus efficaces pour que vous soyez rapidement en sécurité sur la route.",
        why3_title: 'Qualité supérieure',
        why3_text: "Nous travaillons avec des marques de pneus fiables et offrons un service professionnel avec attention aux détails.",
        // Brands
        trusted_title: 'Marques de pneus que nous proposons',
        // Reviews
        reviews_title: 'Vrais Avis Google',
        reviews_message: 'Voici de vrais avis de clients qui ont évalué GoPneus sur Google.',
        reviews_btn: 'Voir tous les avis Google',
        review1_time: 'il y a 2 mois',
        review2_time: 'il y a 3 mois',
        review3_time: 'il y a 4 mois',
        review4_time: 'il y a 4 mois',
        review5_time: 'il y a 8 mois',
        review6_time: 'il y a 11 mois',
        // Tyres section
        tyres_title: 'Nos Pneus',
        tyres_subtitle: 'Pneus de qualité pour chaque voiture',
        tyres_intro: 'Chez GoPneus vous trouvez un large assortiment de pneus :',
        tyres_li1: 'Pneus neufs de grandes marques',
        tyres_li2: "Pneus d'occasion de qualité",
        tyres_li3: 'Pneus été',
        tyres_li4: 'Pneus hiver',
        tyres_li5: 'Pneus toutes saisons',
        tyres_li6: 'Pneus pour voitures, SUV et utilitaires',
        tyres_li7: 'Jantes et roues complètes disponibles sur demande',
        tyres_order: 'Nous commandons chaque pneu que vous souhaitez, y compris votre marque et type de jante préférés.',
        tyres_help: 'Nous vous aidons volontiers à choisir les bons pneus pour votre voiture et votre style de conduite.',
        tyres_cta: 'Demandez conseil',
        // About
        about_title: 'À propos de GoPneus',
        about_subtitle: "Votre partenaire de confiance pour tout ce qui concerne les pneus et l'entretien automobile",
        about_text1: "GoPneus est une entreprise familiale spécialisée dans les pneus et l'entretien automobile à Schaerbeek. Avec des années d'expérience, nous offrons des services professionnels pour toutes les marques.",
        about_priorities: 'Nos priorités :',
        about_li1: 'Qualité à des prix honnêtes',
        about_li2: 'Service rapide',
        about_li3: 'Conseils personnalisés',
        about_li4: 'Satisfaction client',
        about_visit: 'Venez dans notre garage et découvrez vous-même notre savoir-faire et notre service !',
        // Contact
        contact_title: 'Contact',
        contact_data_title: 'Nos coordonnées',
        opening_hours_title: 'Horaires :',
        opening_mon_sat: 'Lundi - Samedi :',
        opening_sunday: 'Dimanche :',
        opening_closed: 'Fermé',
        appointment_title: 'Prenez rendez-vous via WhatsApp',
        appointment_text1: 'Pour une prise de rendez-vous rapide et directe, envoyez-nous un message WhatsApp.',
        appointment_text2: 'Nous répondons dès que possible et planifions votre service pneus ou entretien.',
        whatsapp_appointment: 'Rendez-vous WhatsApp',
        contact_location: 'Notre emplacement',
        // Footer
        footer_tagline: 'Votre spécialiste en pneus et service automobile à Schaerbeek. Service rapide, prix honnêtes et conseils personnalisés.',
        footer_links_title: 'Liens rapides',
        footer_contact_title: 'Contactez-nous',
        footer_schedule: 'Lu–Sa : 9h00 – 19h00',
        footer_copyright: '© 2026 GoPneus. Tous droits réservés.'
    },
    en: {
        // Top bar & nav
        topbar_hours: 'Monday - Saturday: 9:00 - 19:00',
        topbar_contact: 'Contact',
        nav_home: 'Home',
        nav_services: 'Services',
        nav_tyres: 'Tyres',
        nav_about: 'About',
        nav_contact: 'Contact',
        // Hero
        hero_badge: 'Your tyre specialist in Schaerbeek',
        hero_title: 'GoPneus: Your trusted tyre partner',
        hero_text: 'Professional tyre service in Schaerbeek with fast fitting, personal advice and maintenance for every vehicle.',
        hero_btn_whatsapp: 'Book via WhatsApp',
        hero_btn_call: 'Call +32 483 42 95 06',
        // Stats
        stat_customers: 'Happy customers',
        stat_rating: 'Google rating',
        stat_experience: 'Years experience',
        stat_hours: '9:00 – 19:00 open',
        // Services
        services_title: 'Our Services',
        service1_title: 'New & Used Tyres',
        service1_text: 'Wide range of new and used tyres for all vehicles and seasons.',
        service2_title: 'Brake Discs & Pads',
        service2_text: 'We do brake discs and pads — everything for optimal safety and braking performance.',
        service3_title: 'Air Conditioning Recharge',
        service3_text: 'Recharge of R134A & R1234YF air conditioning systems for optimal comfort in your car.',
        service4_title: 'Technical Inspection',
        service4_text: 'Preparation for the technical inspection.',
        service5_title: 'Car Diagnostics',
        service5_text: 'Professional diagnosis of your vehicle with the latest diagnostic equipment for all brands.',
        service6_title: 'Headlight Alignment',
        service6_text: 'Precise alignment of your headlights for optimal visibility and safety.',
        service7_title: 'Tyre Balancing',
        service7_text: 'Professional balancing of your tyres for optimal road handling and tyre wear.',
        service8_title: 'Bulb Replacement',
        service8_text: 'Fast and professional replacement of all types of car lighting.',
        service9_title: 'Battery Replacement',
        service9_text: 'Fast and professional replacement of all types of car batteries.',
        service10_title: 'Chassis & Small Repairs',
        service10_text: 'Professional repairs to the chassis and other small repairs of your car.',
        service11_title: 'Seasonal Tyre Change',
        service11_text: 'Professional switch from winter to summer tyres and vice versa.',
        // Why us
        why_title: 'Why choose GoPneus?',
        why1_title: 'Personal advice',
        why1_text: 'Our specialists quickly help you choose the best tyres and service for your car.',
        why2_title: 'Fast service',
        why2_text: "Efficient tyre fitting, alignment and maintenance so you're quickly back safely on the road.",
        why3_title: 'Top quality',
        why3_text: 'We work with reliable tyre brands and deliver professional service with attention to detail.',
        // Brands
        trusted_title: 'Top tyre brands we carry',
        // Reviews
        reviews_title: 'Real Google Reviews',
        reviews_message: 'These are real reviews from customers who rated GoPneus on Google.',
        reviews_btn: 'View all Google Reviews',
        review1_time: '2 months ago',
        review2_time: '3 months ago',
        review3_time: '4 months ago',
        review4_time: '4 months ago',
        review5_time: '8 months ago',
        review6_time: '11 months ago',
        // Tyres section
        tyres_title: 'Our Tyres',
        tyres_subtitle: 'Quality tyres for every car',
        tyres_intro: "At GoPneus you'll find a wide range of tyres:",
        tyres_li1: 'New tyres from top brands',
        tyres_li2: 'Quality used tyres',
        tyres_li3: 'Summer tyres',
        tyres_li4: 'Winter tyres',
        tyres_li5: 'All-season tyres',
        tyres_li6: "Tyres for cars, SUVs and vans",
        tyres_li7: 'Also rims and complete wheels available on request',
        tyres_order: 'We order any tyre you want, including your favourite brand and rim type.',
        tyres_help: 'We are happy to help you choose the right tyres for your car and driving style.',
        tyres_cta: 'Ask for advice',
        // About
        about_title: 'About GoPneus',
        about_subtitle: 'Your trusted partner for everything related to tyres and car service',
        about_text1: 'GoPneus is a family business specialising in tyres and car service in Schaerbeek. With years of experience we offer professional services for all car brands.',
        about_priorities: 'Our priorities:',
        about_li1: 'Quality at fair prices',
        about_li2: 'Fast service',
        about_li3: 'Personal advice',
        about_li4: 'Customer satisfaction',
        about_visit: 'Come visit our garage and experience our craftsmanship and service for yourself!',
        // Contact
        contact_title: 'Contact',
        contact_data_title: 'Our details',
        opening_hours_title: 'Opening hours:',
        opening_mon_sat: 'Monday - Saturday:',
        opening_sunday: 'Sunday:',
        opening_closed: 'Closed',
        appointment_title: 'Book your appointment via WhatsApp',
        appointment_text1: 'For quick and direct booking, send us a WhatsApp message.',
        appointment_text2: 'We respond as soon as possible and schedule your tyre service or maintenance.',
        whatsapp_appointment: 'WhatsApp appointment',
        contact_location: 'Our location',
        // Footer
        footer_tagline: 'Your specialist in tyres and car service in Schaerbeek. Fast service, fair prices and personal advice.',
        footer_links_title: 'Quick links',
        footer_contact_title: 'Contact us',
        footer_schedule: 'Mon–Sat: 9:00 – 19:00',
        footer_copyright: '© 2026 GoPneus. All rights reserved.'
    }
};

function initLanguageSwitcher() {
    document.querySelectorAll('.lang-btn').forEach(button => {
        button.addEventListener('click', function () {
            const lang = this.dataset.lang;
            setLanguage(lang);
            document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === lang));
        });
    });

    setLanguage('nl');
}

function setLanguage(lang) {
    document.documentElement.lang = lang;

    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.dataset.i18n;
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}
