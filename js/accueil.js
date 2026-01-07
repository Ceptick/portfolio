const startBtn = document.getElementById("start-btn");
const introScreen = document.getElementById("intro-screen");
const mainDashboard = document.getElementById("main-dashboard");

if (startBtn) {
  startBtn.addEventListener("click", () => {
    // A. On lance l'animation de disparition (Warp)
    introScreen.classList.add("warp-out");

    // B. On attend la fin de l'animation (0.8s) pour changer d'écran
    setTimeout(() => {
      introScreen.classList.add("hidden"); // On cache l'intro
      mainDashboard.classList.remove("hidden"); // On affiche le dashboard
    }, 800);
  });
}

// Fonction pour ouvrir une fenêtre (VERSION CORRIGÉE pour éviter les superpositions)
function openModal(modalId) {
  // 1. On ferme d'abord TOUTES les modales pour éviter les bugs
  const allModals = document.querySelectorAll(".modal");
  allModals.forEach((modal) => {
    modal.style.display = "none";
  });

  // 2. On ouvre celle demandée
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = "flex";
  }
}

// Fonction pour fermer une fenêtre
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = "none";
  }
}

// Gestion du clic en dehors de la modale (sur le fond noir)
window.onclick = function (event) {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
};

const translations = {
  en: {
    init_quests: "INITIALIZING QUESTS",
    collect_data: "COLLECTING PLAYER'S DATA",
    dev_skills: "DEVELOPPING PLAYER'S SKILLS",
    sys_loading: "SYSTEM LOADING",
    sys_ready: "SYSTEM READY",
    click_launch: "Click here to launch",
    main_menu: "MAIN MENU",
    player_status: "PLAYER'S STATUS",
    who_am_i: "Who am I ?",
    db_h2: "DataBase",
    skills_abilities: "SKILLS & ABILITIES",
    my_skills: "My skills",
    quest_log: "QUEST LOG",
    my_projects: "My projects",
    send_msg: "SEND MESSAGE",
    contact_me: "Contact me",
    char_status: "PLAYER'S STATUS",
    class_role: "Class : Fullstack Developer",
    level: "Level : Beginner",
    bio_text:
      "2nd year student in the Informatique department at the IUT of Lens, I'm currently looking for an 8 to 10 weeks internship from April 13. Passionate about coding, virtual environments and japanese culture, I'm very curious and dynamic, and I'm looking further to learn new languages and softwares and to develop my skills.",
    download_cv: "DOWNLOAD PLAYER'S PERSONAL DATA (CV)",
    cv_path: "docs/CV_Wissem_Nacer_EN.pdf",
    cv_name: "CV_Wissem_Nacer_EN",
    skills_title: "SKILLS & ABILITIES",
    lang_title: "Languages",
    fr_lang: "French (Native)",
    en_lang: "English (Fluent)",
    quest_log_title: "QUEST LOG",
    desc_cinehub:
      "An application for managing films/series with a rating system.",
    access_data: "ACCESS DATA (GITLAB)",
    desc_music: "Creation of a music blog on a Disco theme.",
    desc_pacman: "Recreation of a Pacman game using JavaFX.",
    desc_lens: "Development of a music synthesizer website.",
    contact_title: "CONTACT ME",
    my_links: "MY LINKS",
    send_chat: "SEND A MESSAGE IN THE CHAT",
    label_name: "PSEUDO (Name)",
    label_email: "EMAIL (Private)",
    label_msg: "MESSAGE (Private)",
    btn_send: "INITIATE TRANSMISSION",
    input_id: "Enter your ID",
    input_email: "Enter your email",
    textarea_message: "Input your private message...",
  },
  fr: {
    init_quests: "INITIALISATION DES QUÊTES",
    collect_data: "RÉCUPÉRATION DES DONNÉES",
    dev_skills: "DÉVELOPPEMENT DES COMPÉTENCES",
    sys_loading: "CHARGEMENT SYSTÈME",
    sys_ready: "SYSTÈME PRÊT",
    click_launch: "Cliquer pour lancer",
    db_h2: "Bases De Données",
    main_menu: "MENU PRINCIPAL",
    player_status: "PROFIL DU JOUEUR",
    who_am_i: "Qui suis-je ?",
    skills_abilities: "COMPÉTENCES & CAPACITÉS",
    my_skills: "Mes compétences",
    quest_log: "JOURNAL DE QUÊTES",
    my_projects: "Mes projets",
    send_msg: "ENVOYER MESSAGE",
    contact_me: "Me contacter",
    char_status: "PROFIL DU JOUEUR",
    class_role: "Classe : Développeur Fullstack",
    level: "Niveau : Débutant",
    bio_text:
      "Étudiant en 2ème année au département Informatique de l'IUT de Lens, je suis actuellement à la recherche d'un stage de 8 à 10 semaines à partir du 13 avril. Passionné par le code, les environnements virtuels et la culture japonaise, je suis très curieux et dynamique, et je cherche toujours à apprendre de nouveaux langages et logiciels pour développer mes compétences.",
    download_cv: "TÉLÉCHARGER DONNÉES PERSONNELLES (CV)",
    cv_path: "docs/CV_Wissem_Nacer_FR.pdf",
    cv_name: "CV_Wissem_Nacer_FR",
    skills_title: "COMPÉTENCES & CAPACITÉS",
    lang_title: "Langues",
    fr_lang: "Français (Langue maternelle)",
    en_lang: "Anglais (Courant)",
    quest_log_title: "JOURNAL DE QUÊTES",
    desc_cinehub:
      "Une application de gestion de films/séries avec un système de notation.",
    access_data: "ACCÉDER AUX DONNÉES (GITLAB)",
    desc_music: "Création d'un blog musical sur le thème du Disco.",
    desc_pacman: "Recréation du jeu Pacman en utilisant JavaFX.",
    desc_lens: "Développement d'un site web de synthétiseur musical.",
    contact_title: "ME CONTACTER",
    my_links: "MES LIENS",
    send_chat: "ENVOYER UN MESSAGE DANS LE CHAT",
    label_name: "PSEUDO (Nom)",
    label_email: "EMAIL (Privé)",
    label_msg: "MESSAGE (Privé)",
    btn_send: "INITIER LA TRANSMISSION",
    input_id: "Entrez votre ID",
    input_email: "Entrez votre email",
    textarea_message: "Entrez votre message privé...",
  },
};

function setLanguage(lang) {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.remove("active");
    if (btn.innerText.toLowerCase() === lang) {
      btn.classList.add("active");
    }
  });

  const elementsToTranslate = document.querySelectorAll("[data-lang]");
  elementsToTranslate.forEach((element) => {
    const key = element.getAttribute("data-lang");
    if (translations[lang][key]) {
      if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        element.placeholder = translations[lang][key];
      } else {
        element.innerText = translations[lang][key];
      }
    }
  });

  const linksToTranslate = document.querySelectorAll("[data-link]");
  linksToTranslate.forEach((element) => {
    const key = element.getAttribute("data-link");
    if (translations[lang][key]) {
      element.href = translations[lang][key];
    }
  });

  const filenamesToTranslate = document.querySelectorAll("[data-filename]");
  filenamesToTranslate.forEach((element) => {
    const key = element.getAttribute("data-filename");
    if (translations[lang][key]) {
      element.setAttribute("download", translations[lang][key]);
    }
  });
}
setLanguage("en");
