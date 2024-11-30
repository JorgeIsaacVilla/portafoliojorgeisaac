const experiencias = document.querySelector("#experiencias");

/*   <div  class="canva-experiencia">
          <div class="portafolio_izquierda">
               <img class="imagen_web_portafolio" src="./img/drawable-hdpi/Prueb1.PNG"/>
               <img class="imagen_web_Codigo" src="./img/drawable-hdpi/Prueb1_Cod.PNG"/>
          </div>

          <div class="text_portafolio_derecho">
               <p>Replica de prueba plantilla de Freepek. Esta es una de las primeras plantillas que programé en mis comienzos para aprender los conceptos de HTML, y CSS, acompañado de Git y GitHub. La página presentada a continuación no es responsive. Adjunto link de pagina original: <a class="link_referent" href="https://nicepage.com/es/html-templates/preview/estrategias-comerciales-efectivas-1593500?device=desktop">https://nicepage.com/es/html-templates/preview/estrategias-comerciales</a></p>

               <div class="image_portafolio_boton">
                    <a href="https://github.com/JorgeIsaacVilla/Prueba1"  style="margin-left: 10%;" class="image_boton1"><img src="./img/Trazado 8131.png" alt=""></a>
                    <a href="https://jorgeisaacvilla.github.io/Prueba1/"  style="margin-left: 3%;" class="image_boton1"><img src="./img/Trazado 8141.png" alt=""></a>
               </div>
          </div>
     </di>
*/
const trabajosRealizados = [];

/*trabajosRealizados.push({
     imageWebPort:"./img/Exp/Monastery.PNG",
     imageWebCod:"./img/Exp/Monastery_Cod.PNG",
     text:"Texto ejemplo que explica el proyecto (Maximo 60 Palabras)",
     enlaceGit:"https://github.com/JorgeIsaacVilla/Prueba1",
     enlaceWeb:"https://jorgeisaacvilla.github.io/Prueba1/",
});*/

trabajosRealizados.push({
     imageWebPort:"./img/Exp-maestro/Imagen7.jpg",
     imageWebCod:"./img/Exp-maestro/Imagen8.jpg",
     text:"Como profesor aprovecho todo mis recursos y conocimiento en desarrollo de tecnologías para crear material interactivo para que los estudiantes tengan una experiencia de aprendizaje más inmersiva, y ser de ejemplo para mis estudiantes desde la práctica. BIN es un Bot avanzado que desarrolle como asistente virtual para dar clases de informática, y a los estudiantes les encanta.",
});
trabajosRealizados.push({
     imageWebPort:"./img/Exp-maestro/imagen1.jpg",
     imageWebCod:"./img/Exp-maestro/Imagen2.jpg",
     text:"Como profesor, he tenido el privilegio de ser una influencia positiva para muchos padres y niños, ofreciendo servicios de clases personalizadas y grupales de manera presencial. Mi enfoque comienza por conocer a los estudiantes, comprender su temperamento, sueños y anhelos, y valorar su creatividad. A partir de ahí, adapto mi enseñanza para ayudarles a alcanzar esas metas. Acompaño a mis alumnos no solo durante las clases, sino también fuera de ellas, asegurándome de que comprendan completamente la materia.",
});
trabajosRealizados.push({
     imageWebPort:"./img/Exp-maestro/Imagen5.jpg",
     imageWebCod:"./img/Exp-maestro/Imagen6.jpg",
     text:"Desde siempre, he mantenido la convicción de que cualquier persona, independientemente de su edad o limitaciones, tiene el potencial para aprender cosas nuevas y alcanzar sus sueños. Es por eso que me dedico con empeño a crear materiales personalizados, diseñados para facilitar la comprensión de la materia. Mi objetivo es eliminar juicios y desvanecer los tabúes que puedan estar arraigados en su mente, alentándolos a comprender que la valentía radica en el intento de aprender, incluso cuando algo parezca desafiante y único. ",
});
trabajosRealizados.push({
     imageWebPort:"./img/Exp-maestro/Imagen3.jpg",
     imageWebCod:"./img/Exp-maestro/Imagen4.jpg",
     text:"Aprovecho mi conocimiento en tecnología e innovación para organizar, gestionar y crear plataformas y recursos tanto para la enseñanza virtual como presencial. Asimismo, utilizo de manera efectiva las tecnologías comerciales conocidas.",
});

function renderExperiencia(arr){
     for(experiencia of arr){
          const canvaExperiencia = document.createElement("div");
          canvaExperiencia.classList.add("canva-experiencia");

         const portafolioIzquierda = document.createElement("div");
         portafolioIzquierda.classList.add("portafolio_izquierda");
 
         /*const cuadradoTramsparente = document.createElement("div");
         cuadradoTramsparente.classList.add("cuadrado_tramsparente");*/
 
         /*const cuadradoGris = document.createElement("div");
         cuadradoGris.classList.add("cuadrado_gris");*/
 
         const imagenWebPortafolio = document.createElement("img");
         imagenWebPortafolio.classList.add("imagen_web_portafolio");
         imagenWebPortafolio.setAttribute("src", experiencia.imageWebPort);
 
         const imagenWebCode = document.createElement("img");
         imagenWebCode.classList.add("imagen_web_Codigo");
         imagenWebCode.setAttribute("src", experiencia.imageWebCod);
 
         const textPortafolioDerecho = document.createElement("div");
         textPortafolioDerecho.classList.add("text_portafolio_derecho");
 
         const textExperiencia = document.createElement("p");
         textExperiencia.innerText = experiencia.text;
 
         const imagePortafolioBoton = document.createElement("div");
         imagePortafolioBoton.classList.add("image_portafolio_boton");
 
         /*const enlacGit = document.createElement("a");
         enlacGit.classList.add("image_boton1");
         enlacGit.setAttribute("href", experiencia.enlaceGit);
 
         const enlacWeb = document.createElement("a");
         enlacWeb.classList.add("image_boton1");
         enlacWeb.setAttribute("href", experiencia.enlaceWeb);*/

         /*imagenes enlaces (inico) */
         const imageCat = document.createElement("img");
         imageCat.setAttribute("src", "./img/Trazado 8131.png");
         const imageAccet = document.createElement("img");
         imageAccet.setAttribute("src", "./img/Trazado 8141.png");
         /*imagenes enlaces (fin) */
         
         canvaExperiencia.appendChild(portafolioIzquierda)
         canvaExperiencia.appendChild(textPortafolioDerecho)
 
        /* portafolioIzquierda.appendChild(cuadradoTramsparente);
         cuadradoTramsparente.appendChild(cuadradoGris);*/
         portafolioIzquierda.appendChild(imagenWebPortafolio);
         portafolioIzquierda.appendChild(imagenWebCode);
 
         textPortafolioDerecho.appendChild(textExperiencia);
         textPortafolioDerecho.appendChild(imagePortafolioBoton);
 
         /*imagePortafolioBoton.appendChild(enlacGit);
         imagePortafolioBoton.appendChild(enlacWeb);

         enlacGit.appendChild(imageCat);
         enlacWeb.appendChild(imageAccet);*/
 
         canvaExperiencia.appendChild(textPortafolioDerecho);
 
         experiencias.appendChild(canvaExperiencia);
     }
 }
 
 renderExperiencia(trabajosRealizados);
 