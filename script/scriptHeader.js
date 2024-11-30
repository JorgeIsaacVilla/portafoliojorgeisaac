// Datos de navegación y redes sociales
const menuItems = [
  { name: 'Inicio', link: '#inicio' },
  { name: 'Proyectos', link: '#proyectos' },
  { name: 'Referencias', link: '#referencias' },
  { 
    name: 'Perfiles', 
    link: '', 
    isDropdown: true, // Indicamos que este es un menú desplegable
    subMenu: [
      { name: 'Desarollador web', link: './index.html' },
      { name: 'Ingeniero Eléctrico', link: './ing.html' },
      { name: 'Docente', link: './master.html' }
    ]
  },
  { name: 'Contáctame', link: 'https://wa.me/573218828546?text=Vi%20tu%20perfil%20en%20tu%20página%20web%20y%20estoy%20interesado%20en%20contactar%20contigo', isButton: true }
];

const socialMediaLinks = [
  { name: 'Facebook', linkImg: './public/Facebook.svg', link: 'https://www.facebook.com/jorge.villalopez?locale=es_LA' },
  { name: 'LinkedIn', linkImg: './public/linkeding.svg', link: 'https://www.linkedin.com/in/jorge-villa-l%C3%B3pez-742647b5/' },
  { name: 'GitHub', linkImg: './public/github.svg', link: 'https://github.com/JorgeIsaacVilla' }
];

// Obtener elementos del DOM
const menuList = document.querySelector('.menu-list');
const menuListMovil = document.querySelector('.menu-list-movil');
const socialMediaBox = document.querySelectorAll('.box-social-midia');
const socialMediaBoxMenu = document.querySelector('.box-social-midia-menu');

// Crear menú principal
menuItems.forEach(item => {
  const li = document.createElement('li');
  
  if (item.isButton) {
    const a = document.createElement('a');
    a.href = item.link;
    a.textContent = item.name;
    li.appendChild(a);
    li.classList.add('button-contact');
  } else if (item.isDropdown) {
    const a = document.createElement('a');
    a.href = item.link;
    a.textContent = item.name;
    li.appendChild(a);
    
    // Crear el submenú
    const subMenu = document.createElement('ul');
    subMenu.classList.add('dropdown-menu');
    item.subMenu.forEach(subItem => {
      const subLi = document.createElement('li');
      const subA = document.createElement('a');
      subA.href = subItem.link;
      subA.textContent = subItem.name;
      subLi.appendChild(subA);
      subMenu.appendChild(subLi);
    });
    li.appendChild(subMenu);
    li.classList.add('dropdown');
  } else {
    const a = document.createElement('a');
    a.href = item.link;
    a.textContent = item.name;
    li.appendChild(a);
  }

  menuList.appendChild(li);
});

// Crear menú móvil
menuItems.forEach(item => {
  const li = document.createElement('li');
  const a = document.createElement('a');
  a.href = item.link;
  a.textContent = item.name;
  li.appendChild(a);

  // Si es un menú desplegable, crear el submenú
  if (item.isDropdown) {
    // Usar solo un enlace para "Perfiles" y manejar el submenú
    const subMenu = document.createElement('ul');
    subMenu.classList.add('dropdown-menu-movil');
    item.subMenu.forEach(subItem => {
      const subLi = document.createElement('li');
      const subA = document.createElement('a');
      subA.href = subItem.link;  // Asignamos la ruta correspondiente aquí
      subA.textContent = subItem.name;
      subLi.appendChild(subA);
      subMenu.appendChild(subLi);

      // Asegurarse de que el submenú se abra al hacer clic en un enlace
      subA.addEventListener('click', function (e) {
        // Redirigir al hacer clic en el submenú
        window.location.href = subA.href;
      });
    });
    li.appendChild(subMenu);
    
    // Manejar la interacción de los submenús en el móvil
    li.addEventListener('click', function(e) {
      e.preventDefault(); // Evitar comportamiento por defecto para "Perfiles"
      e.stopPropagation(); // Evitar que el clic se propague
      const currentSubMenu = subMenu;
      
      // Alternar la visibilidad del submenú
      if (currentSubMenu.style.display === 'block') {
        currentSubMenu.style.display = 'none';
      } else {
        currentSubMenu.style.display = 'block';
      }
    });
  }

  menuListMovil.appendChild(li);
});

// Crear redes sociales
socialMediaLinks.forEach(link => {
  const a = document.createElement('a');
  a.href = link.link;
  const img = document.createElement('img');
  img.src = link.linkImg;
  img.alt = `boton de ${link.name}`;
  a.appendChild(img);

  // Agregar el enlace a todas las instancias de .box-social-midia
  socialMediaBox.forEach(box => {
    box.appendChild(a.cloneNode(true)); // Clonar el nodo para cada instancia
  });

  // Agregar el enlace a .box-social-midia-menu (si es necesario)
  if (socialMediaBoxMenu) {
    socialMediaBoxMenu.appendChild(a.cloneNode(true));
  }
});

// Despliegue de menú en responsivo
const buttonMenuHamburquesaOppen = document.querySelector('.button-menu-hamburquesa-oppen');
const menuHamburquesa = document.querySelector('.menu-hamburquesa');
const buttonMenuHamburquesaClose = document.querySelector('.button-menu-hamburquesa-close');

buttonMenuHamburquesaOppen.addEventListener('click', function () {
  menuHamburquesa.style.marginLeft = '0px';
});

buttonMenuHamburquesaClose.addEventListener('click', function () {
  menuHamburquesa.style.marginLeft = '-300px';
});

// Manejo de la interacción de los menús desplegables
document.querySelectorAll('.dropdown > a').forEach(profileButton => {
  profileButton.addEventListener('click', function (e) {
    e.preventDefault(); // Evitar comportamiento por defecto
    const dropdownMenu = this.nextElementSibling;
    
    if (dropdownMenu.style.display === 'block') {
      // Cambiar a 'none' con !important
      dropdownMenu.style.setProperty('display', 'none', 'important');
    } else {
      // Cambiar a 'block' con !important
      dropdownMenu.style.setProperty('display', 'block', 'important');
    }
  });
});

// Cerrar menú si se hace clic fuera
document.addEventListener('click', function (e) {
  const dropdownMenus = document.querySelectorAll('.dropdown-menu, .dropdown-menu-movil');
  dropdownMenus.forEach(dropdownMenu => {
    if (!dropdownMenu.contains(e.target) && !dropdownMenu.previousElementSibling.contains(e.target)) {
      dropdownMenu.style.display = 'none';
    }
  });
});
