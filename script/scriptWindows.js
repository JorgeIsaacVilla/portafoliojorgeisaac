// Esperar a que el DOM se cargue completamente
document.addEventListener('DOMContentLoaded', () => {
  
    // Función para crear la sección emergente dinámica
    const createPopupSection = (title, description, iframeSrc) => {
      // Crear el contenedor principal <section>
      const section = document.createElement('section');
      section.className = 'ventana-emergente';
  
      // Crear el div con clase "box-ventana-emergente"
      const boxDiv = document.createElement('div');
      boxDiv.className = 'box-ventana-emergente';
  
      // Crear el div del header con clase "header-ventana-emegente"
      const headerDiv = document.createElement('div');
      headerDiv.className = 'header-ventana-emegente';
  
      // Crear el título <h2>
      const titleElement = document.createElement('h2');
      titleElement.className = 'title-ventana-emergente';
      titleElement.textContent = title;
  
      // Crear el botón de cierre <button>
      const closeButton = document.createElement('button');
      closeButton.textContent = 'X'; // Botón para cerrar
  
      // Añadir título y botón al header
      headerDiv.appendChild(titleElement);
      headerDiv.appendChild(closeButton);
  
      // Crear el párrafo <p> con clase "description-emergente"
      const descriptionElement = document.createElement('p');
      descriptionElement.className = 'description-emergente';
      descriptionElement.innerHTML = description;
  
      // Crear el iframe
      const iframe = document.createElement('iframe');
      iframe.className = 'iframe-ventana-emergente';
      iframe.setAttribute('frameborder', '0'); // Agregar atributo frameborder
      iframe.setAttribute('src', iframeSrc); // src dinámico
  
      // Ensamblar la estructura
      boxDiv.appendChild(headerDiv); // Añadir header al contenedor principal
      boxDiv.appendChild(descriptionElement); // Añadir descripción
      boxDiv.appendChild(iframe); // Añadir iframe
  
      section.appendChild(boxDiv); // Añadir boxDiv a la sección
  
      // Agregar la sección al body
      document.body.appendChild(section);
  
      // Función para cerrar la ventana emergente
      closeButton.addEventListener('click', () => {
        section.remove();
      });
    };
  
    // Evento para el botón "bin" (Asistente Virtual)
    const binButton = document.getElementById('bin');
    binButton.addEventListener('click', () => {
      createPopupSection(
        'Asistente Virtual', 
        `Chatea con <strong>Bin, mi asistente virtual,</strong> puedes preguntarle lo que necesites 😁 sé que será de mucha ayuda para tus consultas 🚀`,
        'https://jorgeisaacvilla.pythonanywhere.com/'
      );
    });
  
    // Evento para el botón "game" (Juega mis Juegos)
    const gameButton = document.getElementById('game');
    gameButton.addEventListener('click', () => {
      createPopupSection(
        'Juega mis Juegos', 
        `Estos juegos los desarrollé para <strong>potenciar</strong> y demostrar mis habilidades con las tecnologías web 😁🚀`,
        'https://enycosmic-games.vercel.app/'
      );
    });
  
  });