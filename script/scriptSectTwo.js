const transitionTime = 500; // Tiempo de transición

const proyectos = [
  {
    titulo: "Enycosmic </br><strong>Metaverse</strong>",
    descripcion1:
      "Enycosmic Metavers es un proyecto emprendedor que combina múltiples tecnologías como React, Wordpress, JavasScript Node.js y Phyton para crear un metaverso cósmico interactivo y educativo.",
    descripcion2:
      "Funciona como un juego multijugador que integra gráficos 3D y 2D, y elementos de realidad aumentada para ofrecer una experiencia de interacción y aprendizaje inmersiva.",
    url: "https://enycosmic.site/",
    imgMovil: "./src/img_develoment/enycosmic-resp.webp",
    imgDesktop: "./src/img_develoment/enycosmic-desk.webp",
    altMovil: "vista dispositivo proyecto enycosmic",
    altDesktop: "vista escritorio proyecto enycosmic",
  },

  {
    titulo: "Universal Tree </br><strong>Expert</strong>",
    descripcion1:
      "Proyecto web SEO en ingles de nivel 3. Desarrollado con wordpress, elementor, JavaScript y Css.",
    descripcion2:
      "Teniendo en cuenta Buenas practicas de desarrollo para hacerlo escalable, fácil de entender, y cuidando el rendimiento.",
    url: "http://universaltreeexpert.com",
    imgMovil: "./src/img_develoment/universal-resp.webp",
    imgDesktop: "./src/img_develoment/universal-desk.webp",
    altMovil: "vista dispositivo proyecto universal",
    altDesktop: "vista escritorio proyecto universal",
  },

  {
    titulo: "veronicas Cleaning </br><strong>Solutions</strong>",
    descripcion1:
      "Proyecto web SEO en ingles de nivel 1. Desarrollado con wordpress, elementor Pro y Css, con alto enfoque al detalle.",
    descripcion2:
      "con altos estándares de calidad en diseño, buenas practicas de desarrollo y ciber seguridad,",
    url: "https://veronicascleaningsolutions.com/",
    imgMovil: "./src/img_develoment/clean-resp.webp",
    imgDesktop: "./src/img_develoment/clean-desk.webp",
    altMovil: "vista dispositivo proyecto clean",
    altDesktop: "vista escritorio proyecto clean",
  },

  {
    titulo: "Disalvo Courier </br><strong>Service</strong>",
    descripcion1:
      "Proyecto web SEO en ingles de nivel 1. Desarrollado con wordpress, elementor Pro y Css, con alto enfoque en la calidad.",
    descripcion2:
      "con altos estándares de calidad en diseño, sobrio y limpio buenas practicas de desarrollo y ciber seguridad,",
    url: "https://disalvocourierservice.com/",
    imgMovil: "./src/img_develoment/disalvo-resp.webp",
    imgDesktop: "./src/img_develoment/disalvo-desk.webp",
    altMovil: "vista dispositivo proyecto disalvo",
    altDesktop: "vista escritorio proyecto disalvo",
  },

  {
    titulo: "Modern Electrical </br><strong>systems</strong>",
    descripcion1:
      "Proyecto web SEO en ingles de nivel 2. Desarrollado con wordpress, elementor Pro, JavaScript y Css, con alto enfoque en la calidad.",
    descripcion2:
      "con altos estándares de calidad en diseño, sobrio y limpio buenas practicas de desarrollo y ciber seguridad,",
    url: "https://modernelectricalsystems.com/",
    imgMovil: "./src/img_develoment/electrical-resp.webp",
    imgDesktop: "./src/img_develoment/electrical-desk.webp",
    altMovil: "vista dispositivo proyecto electrical",
    altDesktop: "vista escritorio proyecto electrical",
  },

  {
    titulo: "Monastery </br><strong>NFT</strong>",
    descripcion1:
      "Proyecto desarrollado con HTML, CSS, JS con alto enfoque en la calidad, diseño y la experiencia de Usuario.",
    descripcion2:
      "Incorporando tecnologías para interacciónes en 3D y realidad aúmentada",
    url: "https://www.monasterynft.com/Es",
    imgMovil: "./src/img_develoment/monastery-resp.webp",
    imgDesktop: "./src/img_develoment/monastery-desk.webp",
    altMovil: "vista dispositivo proyecto monastery",
    altDesktop: "vista escritorio proyecto monastery",
  },
  
  {
    titulo: "Proyecto 2 </br><strong>Tecnología</strong>",
    descripcion1:
      "Este proyecto combina innovación y tecnología para resolver problemas del mundo real de manera eficiente.",
    descripcion2:
      "Incorpora herramientas avanzadas para la creación de soluciones prácticas y escalables.",
    url: "https://weinversiones.com/",
    imgMovil: "./src/img_develoment/we-resp.webp",
    imgDesktop: "./src/img_develoment/we-desk.webp",
    altMovil: "vista dispositivo proyecto we",
    altDesktop: "vista escritorio proyecto we",
  },

];

let currentIndex = 0;
let autoChangeInterval;

const sectionContainer = document.querySelector(".box-section-two");

function cargarProyecto(index) {
  const proyecto = proyectos[index];

  // Contenido principal del proyecto
  const contenido = `
    <div class="section-two-top">
      <div class="section-two-top-left">
        <img src="${proyecto.imgMovil}" alt="${proyecto.altMovil}" class="imgMovil">
      </div>
      <div class="section-two-top-right">
        <div class="tittle-section-box">
          <h2>Proyectos</h2>
        </div>
        <h3>${proyecto.titulo}</h3>
        <p>${proyecto.descripcion1}</p>
        <div class="box-controler">
          <div class="span-pagination">
            ${proyectos
              .map((_, i) => `<span class="circle ${i === index ? "active" : ""}"></span>`)
              .join("")}
          </div>
          <div class="button-controler">
            <button id="prevBtn">&lt;</button>
            <button id="nextBtn">&gt;</button>
          </div>
        </div>
      </div>
    </div>
    <div class="section-two-button">
      <div class="section-two-button-left">
        <a href="${proyecto.url}" class="buttons-section-two">
          Ir a sitio web
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.203 11.9514C9.87155 11.6308 9.80431 11.2224 9.81085 10.7824C9.8475 8.31544 9.88117 5.84912 9.91484 3.38281C9.91903 3.074 9.77089 2.92182 9.47042 2.92629C7.00346 2.96294 4.53708 3.00138 2.07076 3.03505C1.39769 3.04445 0.907033 2.73167 0.70186 2.17921C0.403846 1.3766 0.920784 0.48261 1.77543 0.326861C1.89616 0.304802 2.02143 0.298173 2.14424 0.296348C5.13823 0.250668 8.13158 0.207977 11.125 0.160517C11.7242 0.151018 12.2279 0.308637 12.5283 0.864448C12.6583 1.1057 12.6943 1.36921 12.6896 1.64167C12.6442 4.70241 12.6052 7.76365 12.549 10.8246C12.5277 11.9758 11.4677 12.674 10.528 12.1784C10.4121 12.1169 10.3115 12.0284 10.2041 11.9525L10.203 11.9514Z" fill="white"/>
          </svg>
        </a>
        <p>${proyecto.descripcion2}</p>
      </div>
      <div class="section-two-button-right">
        <img src="${proyecto.imgDesktop}" alt="${proyecto.altDesktop}" class="imgDesktop">
      </div>
    </div>
  `;

  const imgMovil = new Image();
  const imgDesktop = new Image();

  imgMovil.src = proyecto.imgMovil;
  imgDesktop.src = proyecto.imgDesktop;

  Promise.all([
    new Promise(resolve => imgMovil.onload = resolve),
    new Promise(resolve => imgDesktop.onload = resolve)
  ]).then(() => {
    sectionContainer.style.opacity = 0; // Ocultar la sección antes del cambio
    setTimeout(() => {
      sectionContainer.innerHTML = contenido; // Actualizar el contenido
      sectionContainer.style.opacity = 1; // Mostrar la sección después del cambio
      agregarEventosBotones();
    }, transitionTime);
  });
}

function agregarEventosBotones() {
  document.getElementById("prevBtn").addEventListener("click", () => {
    clearInterval(autoChangeInterval); // Detener el cambio automático
    currentIndex = (currentIndex - 1 + proyectos.length) % proyectos.length;
    cargarProyecto(currentIndex);
    startAutoChange();
  });

  document.getElementById("nextBtn").addEventListener("click", () => {
    clearInterval(autoChangeInterval); // Detener el cambio automático
    currentIndex = (currentIndex + 1) % proyectos.length;
    cargarProyecto(currentIndex);
    startAutoChange();
  });
}

// Función para cambiar de proyecto automáticamente cada 15 segundos
function startAutoChange() {
  autoChangeInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % proyectos.length;
    cargarProyecto(currentIndex);
  }, 15000);
}

// Cargar el primer proyecto al iniciar
cargarProyecto(currentIndex);
startAutoChange();