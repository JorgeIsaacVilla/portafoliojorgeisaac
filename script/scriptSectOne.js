const codeText = `
<span>/*listas menu hamburquesa (inicio)*/</span>
<strong>const</strong> menuItems = [
  { name: <a>'Inicio'</a>, link: <a>'#'</a> },
  { name: <a>'Proyectos'</a>, link: <a>'#'</a> },
  { name: <a>'Referencias'</a>, link: <a>'#'</a> },
  { name: <a>'Perfiles'</a>, link: <a>'#'</a> },
  { name: <a>'Contáctame'</a>, link: <a>'#'</a>, isButton: <span>true</span> }
];

<strong>const</strong> socialMediaLinks = [
  { name: <a>'Facebook'</a>, linkImg: <a>'./public/Facebook.svg'</a>, link: <a>'https://www.facebook.com/jorge.villalopez?locale=es_LA'</a> },
  { name: <a>'LinkedIn'</a>, linkImg: <a>'./public/linkeding.svg'</a>, link: <a>'https://www.linkedin.com/in/jorge-villa-l%C3%B3pez-742647b5/'</a> },
  { name: <a>'GitHub'</a>, linkImg: <a>'./public/github.svg'</a>, link: <a>'https://github.com/JorgeIsaacVilla'</a> }
];

<span>// Generar elementos del menú de navegación</span>
<strong>const</strong> menuList = document.querySelector(<a>'.menu-list'</a>);
<strong>const</strong> menuListMovil = document.querySelector(<a>'.menu-list-movil'</a>);
<strong>const</strong> socialMediaBox = document.querySelector(<a>'.box-social-midia'</a>);
<strong>const</strong> socialMediaBoxMenu = document.querySelector(<a>'.box-social-midia-menu'</a>);

<span>// Crear menú principal</span>
menuItems.forEach(item => {
  <strong>const</strong> li = document.createElement(<a>'li'</a>);
  <strong>if</strong> (item.isButton) {
    <strong>const</strong> a = document.createElement(<a>'a'</a>);
    a.textContent = item.name;
    li.appendChild(a);
    li.classList.add(<a>'button-contact'</a>);
  } <strong>else</strong> {
    <strong>const</strong> a = document.createElement(<a>'a'</a>);
    a.textContent = item.name;
    li.appendChild(a);
  }
  menuList.appendChild(li);
});

<span>// Crear menú móvil</span>
menuItems.forEach(item => {
  <strong>const</strong> li = document.createElement(<a>'li'</a>);
  <strong>const</strong> a = document.createElement(<a>'a'</a>);
  a.textContent = item.name;
  li.appendChild(a);
  menuListMovil.appendChild(li);
});

<span>// Crear redes sociales</span>
socialMediaLinks.forEach(link => {
  <strong>const</strong> a = document.createElement(<a>'a'</a>);
  <strong>const</strong> img = document.createElement(<a>'img'</a>);
  img.src = link.linkImg;
  img.alt = <a>'boton de $(link.name)'</a>;
  a.appendChild(img);
  socialMediaBox.appendChild(a);
  socialMediaBoxMenu.appendChild(a.cloneNode(<span>true</span>));
});

<span>/*listas menu hamburquesa (fin)*/</span>

<span>/*despliegue de menu en responsivo (inicio)*/</span>
<strong>const</strong> buttonMenuHamburquesaOppen = document.querySelector(<a>'.button-menu-hamburquesa-oppen'</a>);
<strong>const</strong> menuHamburquesa = document.querySelector(<a>'.menu-hamburquesa'</a>);
<strong>const</strong> buttonMenuHamburquesaClose = document.querySelector(<a>'.button-menu-hamburquesa-close'</a>);

buttonMenuHamburquesaOppen.addEventListener(<a>'click'</a>, <strong>function</strong>() {
  menuHamburquesa.style.marginLeft = <a>'0px'</a>;
});

buttonMenuHamburquesaClose.addEventListener(<a>'click'</a>, <strong>function</strong>() {
  menuHamburquesa.style.marginLeft = <a>'-300px'</a>;
});
<span>/*Despliegue de menu en responsivo (fin)*/</span>
`;

const container = document.getElementById("codeContainer");

// Función para resaltar sintaxis dinámicamente
const syntaxHighlight = (code) => {
  return code
    .replace(/(\/\*[\s\S]*?\*\/)/g, '<span class="comment">$1</span>') // Comentarios
    .replace(/\b(const|let|var|function|return|if|else|for|foreach)\b/g, '<span class="keyword">$1</span>') // Palabras clave
    .replace(/(['"`][^'"`]*['"`])/g, '<span class="string">$1</span>') // Strings
    .replace(/(\b\d+\b)/g, '<span class="number">$1</span>') // Números
    .replace(/(\b[A-Za-z_]\w*\b)(?=\()/g, '<span class="function">$1</span>'); // Funciones
};

// Mostrar texto con efecto de escritura
let index = 0;

function typeCode() {
  if (index <= codeText.length) {
    const currentCode = codeText.slice(0, index);
    const highlightedCode = syntaxHighlight(currentCode);
    container.innerHTML = highlightedCode.replace(/\n/g, "<br>").replace(/ /g, "&nbsp;");
    container.scrollTop = container.scrollHeight; // Auto-scroll
    index++;
    setTimeout(typeCode, 100); // Ajusta la velocidad
  }
}

typeCode();