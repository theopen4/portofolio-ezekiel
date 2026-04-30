/* ═══════════════════════════════════════════════════════════════════
   Portfolio Ezekiel Soh — main.js
   Multilingual FR / EN + all interactions
   ═══════════════════════════════════════════════════════════════════ */

/* ─── TRANSLATIONS ──────────────────────────────────────────────── */
const i18n = {
  fr: {
    'nav.role':       'Cloud & DevOps',
    'nav.about':      'À propos',
    'nav.skills':     'Compétences',
    'nav.exp':        'Expérience',
    'nav.projects':   'Projets',
    'nav.contact':    'Contact',
    'nav.hire':       'Me contacter',

    'hero.available': 'Disponible pour de nouveaux projets',
    'hero.title1':    'Cloud & DevOps Engineer',
    'hero.title2':    'AWS Certified',
    'hero.title3':    'DevSecOps Specialist',
    'hero.desc':      "Ingénieur DevSecOps & Cloud avec 5+ ans d'expérience. Je conçois, sécurise et opère des infrastructures critiques sur AWS et Kubernetes. Réduction des coûts cloud de 60% (1 500$ → 600$/mois), SLA 99,95%, pics à 1M+ requêtes absorbés sans incident.",
    'hero.cta1':      'Voir mes projets',
    'hero.cta2':      'Me contacter',
    'hero.cv':        'Télécharger CV',
    'hero.stats':     '/ Métriques clés',
    'hero.live':      'production live',

    'stat.exp':       'Expérience',
    'stat.k8s':       'Clusters K8s prod',
    'stat.cost':      'Réduction coûts',
    'stat.uptime':    'Uptime garanti',
    'stat.req':       'Requêtes/jour',
    'stat.apis':      'APIs en production',
    'stat.deploy':    '50+ déploiements/semaine',
    'stat.aws':       'AWS Certified',

    'about.label':    'À propos',
    'about.title':    'Double expertise.\nDevOps & Backend.',
    'about.lead':     "Ingénieur DevSecOps & Cloud avec 5 ans d'expérience — 2,5 ans en DevSecOps & Cloud chez Kaeyros Analytics et 2,5 ans en développement Backend & conseil Cloud freelance.",
    'about.body1':    "J'ai travaillé chez Kaeyros Analytics où j'ai piloté les opérations DevSecOps sur 5+ projets clients simultanés, gérant une infrastructure critique sur 8+ clusters Kubernetes et assurant l'observabilité de 30+ applications. Mon approche intègre la sécurité à chaque étape du pipeline, pas en fin de cycle.",
    'about.body2':    "Ma double compétence en développement backend (Node.js, NestJS, Python) et en infrastructure me permet de comprendre les enjeux des deux côtés — et de construire des systèmes qui fonctionnent vraiment en production.",
    'about.remote':   'Remote available',
    'about.languages':'FR · EN',

    'tl.present':     'Présent',
    'tl.job0':        'Consultant DevSecOps',
    'tl.job0desc':    'AWS Zero Trust, SOC 2, OPA Gatekeeper, pipelines GitOps, -40% coûts cloud.',
    'tl.job1':        'Ingénieur DevSecOps & Cloud',
    'tl.job1desc':    '8 clusters K8s, CI/CD GitOps, DevSecOps, SAST/DAST, -60% coûts cloud, 5+ projets simultanés.',
    'tl.job2':        'Backend Developer & Cloud Consultant',
    'tl.job2desc':    '10+ APIs RESTful/GraphQL, 50K+ utilisateurs/jour, plateformes gouvernementales allemandes.',
    'tl.edu1':        'ALX Software Engineering',
    'tl.edu2':        'Licence Génie Logiciel',

    'skills.label':   'Compétences',
    'skills.title':   'Stack technique complet.',
    'sk1.title':      'Kubernetes & Containers',
    'sk2.title':      'Cloud & Infrastructure',
    'sk3.title':      'CI/CD & DevOps',
    'sk4.title':      'Cybersecurity & DevSecOps',
    'sk5.title':      'Backend Development',
    'sk6.title':      'Monitoring & Observabilité',

    'exp.label':      'Expérience',
    'exp.title':      'Parcours professionnel.',

    'exp3.title':     'Consultant DevSecOps',
    'exp3.badge':     'Poste actuel',
    'exp3.sub':       'Cabinet spécialisé en infrastructure cloud et cybersécurité pour startups et fintechs',
    'exp3.l1':        "Conception et déploiement d'architectures AWS Zero Trust pour startups fintech en phase de certification SOC 2 Type II : IAM least-privilege, network policies inter-pods, chiffrement bout en bout et gestion des secrets via HashiCorp Vault.",
    'exp3.l2':        "Intégration de pipelines DevSecOps complets (SAST, DAST, scan d'images Trivy, OPA Gatekeeper) pour automatiser les contrôles de conformité à chaque release — réduction des findings critiques à zéro avant audit.",
    'exp3.l3':        "Durcissement post-incident d'environnements Kubernetes en urgence : reconstruction avec OPA Gatekeeper, network policies, détection des menaces en temps réel et playbook de réponse aux incidents.",
    'exp3.l4':        "Pipelines GitOps complets (GitHub Actions, ArgoCD) avec déploiements Blue-Green, PR previews, gates de tests et rollback sur incident — temps de déploiement réduit de 45 min à moins de 2 min.",
    'exp3.l5':        "Audit et optimisation des coûts AWS : right-sizing, réservations et élimination des ressources inutilisées — réduction moyenne de 40 % des dépenses cloud chez les clients accompagnés.",

    'exp1.title':     'Ingénieur DevSecOps & Cloud',
    'exp1.sub':       'Yaoundé, Cameroun · Hybride · 5+ projets clients simultanés, 30+ applications supervisées',
    'exp1.duration':  '2 ans 5 mois',
    'exp1.badge':     'Poste récent',
    'exp1.s1':        'Opérations DevSecOps',
    'exp1.s1l1':      'Pipelines CI/CD GitOps (ArgoCD) — 50+ déploiements automatisés/semaine, temps de production réduit de 2h à 15min (−87%)',
    'exp1.s1l2':      'Sécurité complète : RBAC, chiffrement repos/transit, HashiCorp Vault, scans automatisés (Snyk, SonarQube, Gitleaks)',
    'exp1.s1l3':      "Collaboration avec équipes de 5–10 développeurs via méthodologie Agile/Scrum",
    'exp1.s2':        'Infrastructure & Coûts',
    'exp1.s2l1':      "Conception et gestion de 8 clusters Kubernetes multi-environnements — 1M+ requêtes/jour, 99,9% uptime",
    'exp1.s2l2':      "Réduction de 60% des coûts cloud (1 500$ → 600$/mois) par redimensionnement, instances réservées et nettoyage d'infrastructure inutilisée.",
    'exp1.s2l3':      'Architecture backup & disaster recovery — backups chiffrés quotidiens S3, RTO 1h / RPO 15min',
    'exp1.s3':        'MLOps & Monitoring',
    'exp1.s3l1':      'Environnements Data Science scalables avec pipelines ETL et clusters K8s dédiés',
    'exp1.s3l2':      'Stack monitoring complet (Prometheus, Grafana, Uptime Kuma) pour 30+ applications avec alertes proactives et runbooks.',
    'exp1.s3l3':      'Auto-healing : remédiation automatique couplée aux alertes Prometheus',

    'exp2.title':     'Backend Developer & Cloud Consultant',
    'exp2.company':   'Freelance · Remote',
    'exp2.sub':       '10+ APIs RESTful en production, migrations cloud IaC, plateformes gouvernementales allemandes',
    'exp2.duration':  '2 ans 8 mois',
    'exp2.s1':        'Architecture & Développement',
    'exp2.s1l1':      '10+ APIs RESTful et GraphQL servant 50K+ utilisateurs actifs quotidiens, temps de réponse < 200ms',
    'exp2.s1l2':      '4 plateformes gouvernementales allemandes (MIQ, DINA, MIRA, MEDAR) — données sensibles, conformité RGPD',
    'exp2.s1l3':      'Architecture event-driven avec queues de messages et systèmes pub/sub temps-réel (Socket.io, Redis)',
    'exp2.s2':        'Bases de données & Performance',
    'exp2.s2l1':      'Optimisation PostgreSQL — réduction de la latence de 30% par indexation ciblée, cache Redis (−75% temps de requête) et connection pooling.',
    'exp2.s2l2':      "Pipelines ETL pour migration de millions d'enregistrements",
    'exp2.s2l3':      'Couverture de tests 85%+ — JWT/OAuth2/RBAC, documentation Swagger/OpenAPI',
    'exp.cv.desc':    'Détails complets : missions, métriques, stack technique.',

    'proj.label':     'Projets',
    'proj.title':     'Systèmes en production.',
    'proj.sub':       'Pas des démos. Des systèmes réels, actifs, en production.',
    'p1.tag':         'Gouvernemental · NRW Allemagne',
    'p1.title':       'Projet Anti-D — Plateformes Gouvernementales (NRW)',
    'p1.desc':        "4 plateformes publiques pour signalement de discrimination. Infrastructure Kubernetes RKE2 multi-clusters avec architecture zero-trust : network policies inter-pods, rotation automatique des secrets, scans SAST/DAST, gestion via Vault et pistes d'audit — conformité RGPD stricte.",
    'p1.m1':          'clusters K8s', 'p1.m2': 'coûts réduits', 'p1.m3': 'uptime',
    'p2.tag':         'Plateforme éducative · SaaS',
    'p2.title':       'EZE Platform — SaaS Éducatif Cloud-Native',
    'p2.desc':        "Plateforme scientifique et éducative pour chercheurs et étudiants africains (réseau social, bibliothèque numérique, e-learning). Architecture AWS multi-tenant (EKS, RDS Multi-AZ, S3, CloudFront) avec isolation stricte des données par tenant et blue-green deployments.",
    'p2.m1':          'users simultanés', 'p2.m2': 'disponibilité', 'p2.m3': 'downtime deploy',
    'p3.tag':         'Campagne nationale · B2B',
    'p3.title':       'SEMA — Campagne Nationale Boissons du Cameroun (SABC)',
    'p3.desc':        "Infrastructure cloud d'un écosystème B2B multi-services (SEMA Travel, Chatbot WhatsApp, suivi des présences) pour la campagne nationale de 6 mois de Boissons du Cameroun (SABC). Architecture AWS auto-scalable absorbant des pics à 1M+ requêtes sans rupture de SLA.",
    'p3.m1':          'requêtes/campagne', 'p3.m2': '0 incident SLA',
    'p4.tag':         'Freelance · E-commerce',
    'p4.title':       'Plateforme E-commerce — Backend NestJS',
    'p4.desc':        "Backend complet avec NestJS et PostgreSQL. Intégration passerelles de paiement (Stripe, PayPal), gestion d'inventaire, traitement de commandes. Système de chat temps-réel via Socket.io et Redis pub/sub.",
    'p4.m1':          'transactions/mois', 'p4.m2': 'connexions simultanées',

    'certs.label':    'Certifications',
    'certs.title':    'Certifié. Vérifié.',
    'certs.inprogress':'En cours · CNCF',
    'certs.soon':     'Bientôt',
    'certs.degree':   'Licence Génie Logiciel (Bac+3)',

    'contact.label':  'Contact',
    'contact.title':  'Travaillons ensemble.',
    'contact.desc':   'Disponible pour des projets freelance, des missions de consulting Cloud/DevOps, ou des opportunités full-time. Réponse sous 24h.',
    'contact.email':  'Email',
    'contact.phone':  'Téléphone',
    'form.name':      'Nom complet',
    'form.email':     'Email',
    'form.subject':   'Sujet',
    'form.subject_ph':'Type de mission...',
    'form.s1':        'Mission DevOps / Cloud',
    'form.s2':        'Architecture & Conseil',
    'form.s3':        'Cybersecurity / DevSecOps',
    'form.s4':        'Développement Backend',
    'form.s5':        'Opportunité full-time',
    'form.s6':        'Autre',
    'form.message':   'Message',
    'form.send':      'Envoyer le message',
    'form.note':      'Réponse sous 24h · Disponible pour missions remote',
    'form.success_title': 'Message reçu.',
    'form.success_body':  'Je vous réponds dans les 24 heures.',

    'footer.desc':    'kielze86@gmail.com · Yaoundé, Cameroun',
    'footer.contact': 'Contact',
    'footer.copy':    '© 2026 Dombissi Soh Kamte Ezekiel · Tous droits réservés',
  },

  en: {
    'nav.role':       'Cloud & DevOps',
    'nav.about':      'About',
    'nav.skills':     'Skills',
    'nav.exp':        'Experience',
    'nav.projects':   'Projects',
    'nav.contact':    'Contact',
    'nav.hire':       'Hire me',

    'hero.available': 'Available for new projects',
    'hero.title1':    'Cloud & DevOps Engineer',
    'hero.title2':    'AWS Certified',
    'hero.title3':    'DevSecOps Specialist',
    'hero.desc':      'DevSecOps & Cloud Engineer with 5+ years of experience. I design, secure, and operate critical infrastructure on AWS and Kubernetes. 60% cloud cost reduction ($1,500 → $600/month), 99.95% SLA, 1M+ request peaks absorbed without incident.',
    'hero.cta1':      'View my projects',
    'hero.cta2':      'Contact me',
    'hero.cv':        'Download CV',
    'hero.stats':     '/ Key metrics',
    'hero.live':      'production live',

    'stat.exp':       'Experience',
    'stat.k8s':       'K8s clusters prod',
    'stat.cost':      'Cost reduction',
    'stat.uptime':    'Guaranteed uptime',
    'stat.req':       'Requests/day',
    'stat.apis':      'APIs in production',
    'stat.deploy':    '50+ deployments/week',
    'stat.aws':       'AWS Certified',

    'about.label':    'About',
    'about.title':    'Dual expertise.\nDevOps & Backend.',
    'about.lead':     'DevSecOps & Cloud Engineer with 5 years of experience — 2.5 years in DevSecOps & Cloud at Kaeyros Analytics and 2.5 years in Backend development & Cloud consulting.',
    'about.body1':    'I worked at Kaeyros Analytics where I led DevSecOps operations across 5+ simultaneous client projects, managing critical infrastructure on 8+ Kubernetes clusters with observability across 30+ applications. My approach embeds security at every pipeline stage, not at the end.',
    'about.body2':    'My dual expertise in backend development (Node.js, NestJS, Python) and infrastructure gives me a full-stack understanding — letting me build systems that truly work in production.',
    'about.remote':   'Remote available',
    'about.languages':'FR · EN',

    'tl.present':     'Present',
    'tl.job0':        'DevSecOps Consultant',
    'tl.job0desc':    'AWS Zero Trust, SOC 2, OPA Gatekeeper, GitOps pipelines, -40% cloud costs.',
    'tl.job1':        'DevSecOps & Cloud Engineer',
    'tl.job1desc':    '8 K8s clusters, GitOps CI/CD, DevSecOps, SAST/DAST, -60% cloud costs, 5+ simultaneous projects.',
    'tl.job2':        'Backend Developer & Cloud Consultant',
    'tl.job2desc':    '10+ RESTful/GraphQL APIs, 50K+ users/day, German government platforms.',
    'tl.edu1':        'ALX Software Engineering',
    'tl.edu2':        'Bachelor\'s in Software Engineering',

    'skills.label':   'Skills',
    'skills.title':   'Full technical stack.',
    'sk1.title':      'Kubernetes & Containers',
    'sk2.title':      'Cloud & Infrastructure',
    'sk3.title':      'CI/CD & DevOps',
    'sk4.title':      'Cybersecurity & DevSecOps',
    'sk5.title':      'Backend Development',
    'sk6.title':      'Monitoring & Observability',

    'exp.label':      'Experience',
    'exp.title':      'Professional background.',

    'exp3.title':     'DevSecOps Consultant',
    'exp3.badge':     'Current role',
    'exp3.sub':       'Specialized firm in cloud infrastructure and cybersecurity for startups and fintechs',
    'exp3.l1':        "Design and deployment of AWS Zero Trust architectures for fintech startups in SOC 2 Type II certification: IAM least-privilege, inter-pod network policies, end-to-end encryption and secret management via HashiCorp Vault.",
    'exp3.l2':        "Integration of full DevSecOps pipelines (SAST, DAST, Trivy image scanning, OPA Gatekeeper) to automate compliance checks at every release — critical findings reduced to zero before audit.",
    'exp3.l3':        "Post-incident hardening of Kubernetes environments under emergency conditions: reconstruction with OPA Gatekeeper, network policies, real-time threat detection and incident response playbook.",
    'exp3.l4':        "Full GitOps pipelines (GitHub Actions, ArgoCD) with Blue-Green deployments, PR previews, automated test gates and incident rollback — deployment time reduced from 45 min to under 2 min.",
    'exp3.l5':        "AWS cost audit and optimization: right-sizing, reservations and unused resource cleanup — average 40% cloud spend reduction for accompanied clients.",

    'exp1.title':     'DevSecOps & Cloud Engineer',
    'exp1.sub':       'Yaoundé, Cameroon · Hybrid · 5+ simultaneous client projects, 30+ monitored applications',
    'exp1.duration':  '2 years 5 months',
    'exp1.badge':     'Recent role',
    'exp1.s1':        'DevSecOps Operations',
    'exp1.s1l1':      'GitOps CI/CD pipelines (ArgoCD) — 50+ automated deployments/week, production time reduced from 2h to 15min (−87%)',
    'exp1.s1l2':      'Full security stack: RBAC, encryption at rest/transit, HashiCorp Vault, automated scanning (Snyk, SonarQube, Gitleaks)',
    'exp1.s1l3':      'Collaboration with 5–10 developer teams via Agile/Scrum methodology',
    'exp1.s2':        'Infrastructure & Cost',
    'exp1.s2l1':      '8 multi-environment Kubernetes clusters — 1M+ requests/day, 99.9% uptime',
    'exp1.s2l2':      '60% cloud cost reduction ($1,500 → $600/month) through right-sizing, reserved instances and unused infrastructure cleanup.',
    'exp1.s2l3':      'Backup & disaster recovery architecture — daily encrypted S3 backups, RTO 1h / RPO 15min',
    'exp1.s3':        'MLOps & Monitoring',
    'exp1.s3l1':      'Scalable Data Science environments with ETL pipelines and dedicated K8s clusters',
    'exp1.s3l2':      'Full monitoring stack (Prometheus, Grafana, Uptime Kuma) for 30+ applications with proactive alerts and runbooks.',
    'exp1.s3l3':      'Auto-healing: automatic remediation coupled with Prometheus alerts',

    'exp2.title':     'Backend Developer & Cloud Consultant',
    'exp2.company':   'Freelance · Remote',
    'exp2.sub':       '10+ RESTful APIs in production, IaC cloud migrations, German government platforms',
    'exp2.duration':  '2 years 8 months',
    'exp2.s1':        'Architecture & Development',
    'exp2.s1l1':      '10+ RESTful and GraphQL APIs serving 50K+ daily active users, response time < 200ms',
    'exp2.s1l2':      '4 German government platforms (MIQ, DINA, MIRA, MEDAR) — sensitive data, strict GDPR compliance',
    'exp2.s1l3':      'Event-driven architecture with message queues and real-time pub/sub systems (Socket.io, Redis)',
    'exp2.s2':        'Database & Performance',
    'exp2.s2l1':      'PostgreSQL optimization — 30% latency reduction through targeted indexing, Redis cache (−75% query times) and connection pooling.',
    'exp2.s2l2':      'ETL pipelines for migrating millions of records',
    'exp2.s2l3':      '85%+ test coverage — JWT/OAuth2/RBAC, Swagger/OpenAPI documentation',
    'exp.cv.desc':    'Full details: responsibilities, metrics, tech stack.',

    'proj.label':     'Projects',
    'proj.title':     'Systems in production.',
    'proj.sub':       'Not demos. Real systems, live, in production.',
    'p1.tag':         'Government · NRW Germany',
    'p1.title':       'Anti-D Project — Government Platforms (NRW)',
    'p1.desc':        '4 public platforms for discrimination reporting. Multi-cluster Kubernetes RKE2 infrastructure with zero-trust architecture: inter-pod network policies, automatic secret rotation, SAST/DAST scanning, Vault management and audit trail logging — strict GDPR compliance.',
    'p1.m1':          'K8s clusters', 'p1.m2': 'cost reduced', 'p1.m3': 'uptime',
    'p2.tag':         'Educational platform · SaaS',
    'p2.title':       'EZE Platform — Cloud-Native Educational SaaS',
    'p2.desc':        'Scientific and educational platform for African researchers and students (social network, digital library, e-learning). Multi-tenant AWS architecture (EKS, RDS Multi-AZ, S3, CloudFront) with strict per-tenant data isolation and blue-green deployments.',
    'p2.m1':          'simultaneous users', 'p2.m2': 'availability', 'p2.m3': 'deploy downtime',
    'p3.tag':         'National campaign · B2B',
    'p3.title':       'SEMA — Boissons du Cameroun (SABC) National Campaign',
    'p3.desc':        'Cloud infrastructure for a multi-service B2B ecosystem (SEMA Travel, WhatsApp Chatbot, attendance tracking) for the 6-month national campaign of Boissons du Cameroun (SABC). Auto-scalable AWS architecture absorbing peaks of 1M+ requests without SLA breach.',
    'p3.m1':          'requests/campaign', 'p3.m2': '0 SLA incident',
    'p4.tag':         'Freelance · E-commerce',
    'p4.title':       'E-commerce Platform — NestJS Backend',
    'p4.desc':        'Full backend with NestJS and PostgreSQL. Payment gateway integration (Stripe, PayPal), inventory management, order processing. Real-time chat via Socket.io and Redis pub/sub.',
    'p4.m1':          'transactions/month', 'p4.m2': 'simultaneous connections',

    'certs.label':    'Certifications',
    'certs.title':    'Certified. Verified.',
    'certs.inprogress':'In progress · CNCF',
    'certs.soon':     'Soon',
    'certs.degree':   'Bachelor\'s Degree in Software Engineering',

    'contact.label':  'Contact',
    'contact.title':  'Let\'s work together.',
    'contact.desc':   'Available for freelance projects, Cloud/DevOps consulting missions, or full-time opportunities. Response within 24h.',
    'contact.email':  'Email',
    'contact.phone':  'Phone',
    'form.name':      'Full Name',
    'form.email':     'Email',
    'form.subject':   'Subject',
    'form.subject_ph':'Type of engagement...',
    'form.s1':        'DevOps / Cloud Mission',
    'form.s2':        'Architecture & Consulting',
    'form.s3':        'Cybersecurity / DevSecOps',
    'form.s4':        'Backend Development',
    'form.s5':        'Full-time Opportunity',
    'form.s6':        'Other',
    'form.message':   'Message',
    'form.send':      'Send Message',
    'form.note':      'Response within 24h · Available for remote work',
    'form.success_title': 'Message received.',
    'form.success_body':  'I\'ll get back to you within 24 hours.',

    'footer.desc':    'kielze86@gmail.com · Yaoundé, Cameroon',
    'footer.contact': 'Contact',
    'footer.copy':    '© 2026 Dombissi Soh Kamte Ezekiel · All rights reserved',
  }
};

/* ─── LANGUAGE SWITCHER ─────────────────────────────────────────── */
let currentLang = localStorage.getItem('portfolio-lang') || 'fr';

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('portfolio-lang', lang);
  document.documentElement.lang = lang;
  document.documentElement.dataset.lang = lang;

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    const val = i18n[lang][key];
    if (val === undefined) return;
    // Handle select options differently
    if (el.tagName === 'OPTION') {
      el.textContent = val;
    } else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = val;
    } else {
      el.textContent = val;
    }
  });

  // Update lang buttons
  const isEN = lang === 'en';
  document.getElementById('langLabel').textContent  = isEN ? 'EN' : 'FR';
  document.getElementById('langOther').textContent  = isEN ? 'FR' : 'EN';
  document.getElementById('langLabelM').textContent = isEN ? 'EN' : 'FR';
  document.getElementById('langOtherM').textContent = isEN ? 'FR' : 'EN';

  // Update page title
  document.title = lang === 'en'
    ? 'Ezekiel Soh — Cloud & DevOps Engineer'
    : 'Ezekiel Soh — Ingénieur Cloud & DevOps';

  // Update meta description
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.content = lang === 'en'
    ? 'Ezekiel Soh — Cloud & DevOps Engineer. AWS Certified. Kubernetes. DevSecOps.'
    : 'Ezekiel Soh — Ingénieur Cloud & DevOps. AWS Certifié. Kubernetes. DevSecOps.';
}

function toggleLang() {
  applyLanguage(currentLang === 'fr' ? 'en' : 'fr');
}

document.getElementById('langToggle').addEventListener('click', toggleLang);
document.getElementById('langToggleMobile').addEventListener('click', toggleLang);

// Init
applyLanguage(currentLang);

/* ─── NAV SCROLL ────────────────────────────────────────────────── */
(function () {
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 48);
  }, { passive: true });
})();

/* ─── MOBILE BURGER ─────────────────────────────────────────────── */
(function () {
  const btn  = document.getElementById('burger');
  const menu = document.getElementById('mobileMenu');

  btn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    const spans = btn.querySelectorAll('span');
    if (open) {
      spans[0].style.cssText = 'transform:translateY(7px) rotate(45deg)';
      spans[1].style.opacity = '0';
      spans[2].style.cssText = 'transform:translateY(-7px) rotate(-45deg)';
    } else {
      spans.forEach(s => { s.style.cssText = ''; });
    }
  });

  menu.querySelectorAll('a.ml').forEach(a => {
    a.addEventListener('click', () => {
      menu.classList.remove('open');
      btn.querySelectorAll('span').forEach(s => { s.style.cssText = ''; });
    });
  });
})();

/* ─── REVEAL ────────────────────────────────────────────────────── */
(function () {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
})();

/* ─── COUNTERS ──────────────────────────────────────────────────── */
(function () {
  const easeOut = t => 1 - Math.pow(1 - t, 4);
  const animate = el => {
    const target = parseInt(el.dataset.target, 10);
    const duration = 1400;
    let start = null;
    const tick = ts => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      el.textContent = Math.floor(easeOut(p) * target);
      if (p < 1) requestAnimationFrame(tick);
      else el.textContent = target;
    };
    requestAnimationFrame(tick);
  };
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { animate(e.target); io.unobserve(e.target); }
    });
  }, { threshold: 0.5 });
  document.querySelectorAll('[data-target]').forEach(el => io.observe(el));
})();

/* ─── CONTACT FORM ──────────────────────────────────────────────── */
(function () {
  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    let valid = true;
    ['name', 'email', 'message'].forEach(id => {
      const el = document.getElementById(id);
      if (!el.value.trim()) {
        el.style.borderColor = '#f87171';
        valid = false;
        setTimeout(() => { el.style.borderColor = ''; }, 2500);
      }
    });
    if (!valid) return;

    const btn = form.querySelector('.cf-btn');
    btn.disabled = true;
    const label = currentLang === 'fr' ? 'Envoi...' : 'Sending...';
    btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg> ${label}`;

    // → Replace with real backend: Formspree, EmailJS, your API
    setTimeout(() => {
      form.style.display = 'none';
      success.classList.add('visible');
    }, 1200);
  });
})();

/* ─── SMOOTH SCROLL ─────────────────────────────────────────────── */
(function () {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.scrollY - 70;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
})();
