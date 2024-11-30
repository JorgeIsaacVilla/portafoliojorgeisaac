const proyectos = [
  {
    titulo: "Maestro de </br><strong>música</strong>",
    descripcion1:
      "Como profesor, he tenido el privilegio de ser una influencia positiva para muchos padres y niños, ofreciendo servicios de clases personalizadas y grupales de manera presencial. ",
    descripcion2:
      "Mi enfoque comienza por conocer a los estudiantes, comprender su temperamento, sueños y anhelos, y valorar su creatividad. A partir de ahí, adapto mi enseñanza para ayudarles a alcanzar esas metas. Acompaño a mis alumnos no solo durante las clases, sino también fuera de ellas, asegurándome de que comprendan completamente la materia.",
    imgMovil: "./src/img_master/imagen1.jpg",
    imgDesktop: "./src/img_master/imagen1.1.jpg",
    altMovil: "vista dispositivo proyecto enycosmic",
    altDesktop: "vista escritorio proyecto enycosmic",
  },
  {
    titulo: "Profesor </br><strong>Freelance</strong>",
    descripcion1:
      "Aprovecho mi conocimiento en tecnología e innovación para organizar, gestionar y crear plataformas y recursos tanto para la enseñanza virtual como presencial.",
    descripcion2:
      "Asimismo, utilizo de manera efectiva las tecnologías comerciales conocidas.",
    imgMovil: "./src/img_master/imagen2.jpg",
    imgDesktop: "./src/img_master/imagen2.2.jpg",
    altMovil: "vista dispositivo proyecto enycosmic",
    altDesktop: "vista escritorio proyecto enycosmic",
  },
  {
    titulo: "Metodologías </br><strong>Aprendizaje</strong>",
    descripcion1:
      "Desde siempre, he mantenido la convicción de que cualquier persona, independientemente de su edad o limitaciones, tiene el potencial para aprender cosas nuevas y alcanzar sus sueños.",
    descripcion2:
      "Es por eso que me dedico con empeño a crear materiales personalizados, diseñados para facilitar la comprensión de la materia. Mi objetivo es eliminar juicios y desvanecer los tabúes que puedan estar arraigados en su mente, alentándolos a comprender que la valentía radica en el intento de aprender, incluso cuando algo parezca desafiante y único.",
    imgMovil: "./src/img_master/imagen3.jpg",
    imgDesktop: "./src/img_master/imagen3.3.jpg",
    altMovil: "vista dispositivo proyecto enycosmic",
    altDesktop: "vista escritorio proyecto enycosmic",
  },

  {
    titulo: "Maestro de </br><strong>ciencias</strong>",
    descripcion1:
    "BIN es un Bot avanzado que desarrolle como asistente virtual para dar clases de informática, y a los estudiantes les encanta.",
    descripcion2:
      "Como profesor aprovecho todo mis recursos y conocimiento en desarrollo de tecnologías para crear material interactivo para que los estudiantes tengan una experiencia de aprendizaje más inmersiva, y ser de ejemplo para mis estudiantes desde la práctica.",
    imgMovil: "./src/img_master/imagen4.jpg",
    imgDesktop: "./src/img_master/imagen4.4.jpg",
    altMovil: "vista dispositivo proyecto enycosmic",
    altDesktop: "vista escritorio proyecto enycosmic",
  },
];

const sectionContainer = document.querySelector(".box-section-two");

function renderizarProyectos() {
  const contenido = proyectos
    .map(
      (proyecto) => `
    <div class="">
      <div class="section-two-top">
        <div class="section-two-top-left">
          <img src="${proyecto.imgMovil}" alt="${proyecto.altMovil}" class="imgMovil img-section-alternative margin-alternative">
        </div>
        <div class="section-two-top-right">
          <div class="tittle-section-box">
            <h2>Proyecto</h2>
          </div>
          <h3>${proyecto.titulo}</h3>
          <p>${proyecto.descripcion1}</p>
        </div>
      </div>
      <div class="section-two-button">
        <div class="section-two-button-left">
          <p>${proyecto.descripcion2}</p>
        </div>
        <div class="section-two-button-right">
          <img src="${proyecto.imgDesktop}" alt="${proyecto.altDesktop}" class="imgDesktop img-section-alternative">
        </div>
      </div>
    </div>
  `
    )
    .join("");

  sectionContainer.innerHTML = contenido;
}

// Renderizar todos los proyectos al cargar la página
renderizarProyectos();
