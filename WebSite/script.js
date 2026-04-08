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
});

const translations = {
    nl: {
        topbar_hours: 'Maandag - Zaterdag: 9:00 - 19:00',
        topbar_contact: 'Contact',
        nav_home: 'Home',
        nav_services: 'Diensten',
        nav_tyres: 'Banden',
        nav_about: 'Over Ons',
        nav_contact: 'Contact',
        hero_title: 'GoPneus: Uw betrouwbare bandenpartner',
        hero_text: 'Professionele bandenservice in Schaerbeek met snelle montage, persoonlijk advies en onderhoud voor elk type wagen.',
        hero_btn_whatsapp: 'Maak afspraak via WhatsApp',
        hero_btn_call: 'Bel +32 483 42 95 06',
        services_title: 'Onze Diensten',
        why_title: 'Waarom kiezen voor GoPneus?',
        trusted_title: 'Topbandmerken die wij voeren',
        reviews_title: 'Echte Google Reviews',
        reviews_message: 'Hier zijn echte reviews van klanten die GoPneus beoordeeld hebben op Google.',
        reviews_btn: 'Bekijk alle Google Reviews',
        tyres_title: 'Onze Banden',
        appointment_title: 'Maak uw afspraak via WhatsApp',
        appointment_text1: 'Voor snelle en directe afspraakafhandeling kunt u ons een WhatsApp-bericht sturen.',
        appointment_text2: 'Wij reageren zo snel mogelijk en plannen uw bandenservice of onderhoud in.',
        whatsapp_appointment: 'WhatsApp afspraak',
        contact_title: 'Contact',
        contact_data_title: 'Onze gegevens',
        opening_hours_title: 'Openingstijden:'
    },
    fr: {
        topbar_hours: 'Lundi - Samedi : 9h00 - 19h00',
        topbar_contact: 'Contact',
        nav_home: 'Accueil',
        nav_services: 'Services',
        nav_tyres: 'Pneus',
        nav_about: 'À propos',
        nav_contact: 'Contact',
        hero_title: 'GoPneus : Votre spécialiste pneus de confiance',
        hero_text: 'Service pneus professionnel à Schaerbeek avec montage rapide, conseils personnalisés et entretien pour tous les véhicules.',
        hero_btn_whatsapp: 'Prendre rendez-vous via WhatsApp',
        hero_btn_call: 'Appeler +32 483 42 95 06',
        services_title: 'Nos Services',
        why_title: 'Pourquoi choisir GoPneus ?',
        trusted_title: 'Marques de pneus que nous proposons',
        reviews_title: 'Avis Google réels',
        reviews_message: 'Voici de vrais avis de clients qui ont évalué GoPneus sur Google.',
        reviews_btn: 'Voir tous les avis Google',
        tyres_title: 'Nos Pneus',
        appointment_title: 'Prenez rendez-vous via WhatsApp',
        appointment_text1: 'Pour une prise de rendez-vous rapide et directe, envoyez-nous un message WhatsApp.',
        appointment_text2: 'Nous répondons dès que possible et planifions votre service pneus ou entretien.',
        whatsapp_appointment: 'Rendez-vous WhatsApp',
        contact_title: 'Contact',
        contact_data_title: 'Nos coordonnées',
        opening_hours_title: 'Horaires :'
    },
    en: {
        topbar_hours: 'Monday - Saturday: 9:00 - 19:00',
        topbar_contact: 'Contact',
        nav_home: 'Home',
        nav_services: 'Services',
        nav_tyres: 'Tyres',
        nav_about: 'About',
        nav_contact: 'Contact',
        hero_title: 'GoPneus: Your trusted tyre partner',
        hero_text: 'Professional tyre service in Schaerbeek with fast fitting, personal advice and maintenance for every vehicle.',
        hero_btn_whatsapp: 'Book via WhatsApp',
        hero_btn_call: 'Call +32 483 42 95 06',
        services_title: 'Our Services',
        why_title: 'Why choose GoPneus?',
        trusted_title: 'Top tyre brands we carry',
        reviews_title: 'Real Google Reviews',
        reviews_message: 'These are real reviews from customers who rated GoPneus on Google.',
        reviews_btn: 'View all Google Reviews',
        tyres_title: 'Our Tyres',
        appointment_title: 'Book your appointment via WhatsApp',
        appointment_text1: 'For quick and direct booking, send us a WhatsApp message.',
        appointment_text2: 'We respond as soon as possible and schedule your tyre service or maintenance.',
        whatsapp_appointment: 'WhatsApp appointment',
        contact_title: 'Contact',
        contact_data_title: 'Our details',
        opening_hours_title: 'Opening hours:'
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
