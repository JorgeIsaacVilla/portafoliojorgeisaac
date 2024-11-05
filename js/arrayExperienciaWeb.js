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
     imageWebPort:"./img/Exp/Enycosmic_Cod.PNG",
     imageWebCod:"./img/Exp/Enycosmic.PNG",
     text:"Enycosmic Metavers es un proyecto emprendedor que combina múltiples tecnologías para crear un metaverso cósmico interactivo y educativo. En el frontend, utilizamos React y JavaScript, mientras que en el backend implementamos Node.js, Python y PHP. Además, empleamos WordPress como CMS para funciones específicas. Nuestro metaverso funciona como un juego multijugador que integra gráficos 3D y 2D, y elementos de realidad aumentada para ofrecer una experiencia de interacción y aprendizaje inmersiva.",
     enlaceGit:"https://www.linkedin.com/in/jorge-villa-l%C3%B3pez-742647b5/",
     enlaceWeb:"https://www.enycosmic.site/",
});

trabajosRealizados.push({
     imageWebPort:"./img/Exp/weInversiones.PNG",
     imageWebCod:"./img/Exp/weInversiones_Cod.PNG",
     text:"En este proyecto diseñé en Figma y desarrollé la interfaz en WordPress con Elementor Pro, añadiendo interacciones con JavaScript en cada sección. Es un sitio para una inmobiliaria de terrenos en la playa, donde busqué capturar y reflejar la belleza de la naturaleza en la web.",
     enlaceGit:"https://weinversiones.com/",
     enlaceWeb:"https://weinversiones.com/",
});

trabajosRealizados.push({
     imageWebPort:"./img/Exp/DisalvoTruck.PNG",
     imageWebCod:"./img/Exp/DisalvoTruck_Cod.PNG",
     text:"Quiero compartirles la primera Página web que desarrolle con Wordpress trabajando para la empresa QA digital ADS. Esta página web está desarrollada con elementor Pro y CSS, con altos estándares de calidad en diseño, buenas practicas y ciber seguridad, utilizando los plugins correspondientes, y desarrollo SEO. Esta página fue desarrollada en ingles ",
     enlaceGit:"https://qadigitalads.com/",
     enlaceWeb:"https://veronicascleaningsolutions.com/",
});

trabajosRealizados.push({
     imageWebPort:"./img/Exp/veronicasCleaning.PNG",
     imageWebCod:"./img/Exp/veronicasCleaning_Cod.PNG",
     text:"Quiero compartirles la primera Página web que desarrolle con Wordpress trabajando para la empresa QA digital ADS. Esta página web está desarrollada con elementor Pro y CSS, con altos estándares de calidad en diseño, buenas practicas y ciber seguridad, utilizando los plugins correspondientes, y desarrollo SEO. Esta página fue desarrollada en ingles ",
     enlaceGit:"https://qadigitalads.com/",
     enlaceWeb:"https://disalvocourierservice.com/",
});

trabajosRealizados.push({
     imageWebPort:"./img/Exp/Monastery.PNG",
     imageWebCod:"./img/Exp/Monastery_Cod.PNG",
     text:"Proyecto de Monastery. Esta página web responsiva cuenta con una experiencia audiovisual, interacciones con 3D en realidad aumentada, disponibilidad de idiomas (inglés y español). Este proyecto fue construido en HTML, CSS, JS ya que al ser una página muy visual y con interacciones puntuales, esto me permitiría tener un mayor control del código.",
     enlaceGit:"https://www.linkedin.com/company/monastery-couture/",
     enlaceWeb:"https://www.monasterynft.com/",
});
trabajosRealizados.push({
     imageWebPort:"./img/Exp/MenuRestaurante.PNG",
     imageWebCod:"./img/Exp/MenuRestaurante_Cod.PNG",
     text:"App móvil web desarrollado con React.js funciones de Pago con código QR, enlazamiento con redes sociales. Enlazamiento interno con HTML puro, y arreglo de listas para cada menú separado por componentes.",
     enlaceGit:"https://github.com/JorgeIsaacVilla/menu-restaurante/tree/master/src",
     enlaceWeb:"https://jorgeisaacvilla.github.io/menu-restaurante/",
});
trabajosRealizados.push({
     imageWebPort:"./img/Exp/Marvel.PNG",
     imageWebCod:"./img/Exp/Marvel_Cod.PNG",
     text:"Quiero compartir mi proyecto autodidacta desarrollado con React.Esto fue una oportunidad para poner a prueba y fortalecer mis habilidades en React, especialmente en el consumo de APIs y la maquetación web. Pero también le di un toque personal gamer, incorporando elementos como la integración de gráficos 3D y videojuegos.",
     enlaceGit:"https://github.com/JorgeIsaacVilla/prueb-tec-dcorp",
     enlaceWeb:"https://jorgeisaacvilla.github.io/prueb-tec-dcorp/",
});
trabajosRealizados.push({
     imageWebPort:"./img/Exp/todoListReact.PNG",
     imageWebCod:"./img/Exp/todoListReact_Cod.PNG",
     text:"En mi proyecto de estudio con PLATZI, creé una lista de tareas interactiva en 3D como Frontend. Implementé componentes dinámicos y una base de datos de almacenamiento en la memoria del dispositivo para mantener las tareas visibles hasta su culminación. Descubre más en mi portafolio web.",
     enlaceGit:"https://github.com/JorgeIsaacVilla/Todo-list-react",
     enlaceWeb:"https://jorgeisaacvilla.github.io/Todo-list-react/",
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
 
         const enlacGit = document.createElement("a");
         enlacGit.classList.add("image_boton1");
         enlacGit.setAttribute("href", experiencia.enlaceGit);
 
         const enlacWeb = document.createElement("a");
         enlacWeb.classList.add("image_boton1");
         enlacWeb.setAttribute("href", experiencia.enlaceWeb);

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
 
         imagePortafolioBoton.appendChild(enlacGit);
         imagePortafolioBoton.appendChild(enlacWeb);

         enlacGit.appendChild(imageCat);
         enlacWeb.appendChild(imageAccet);
 
         canvaExperiencia.appendChild(textPortafolioDerecho);
 
         experiencias.appendChild(canvaExperiencia);
     }
 }
 
 renderExperiencia(trabajosRealizados);
 