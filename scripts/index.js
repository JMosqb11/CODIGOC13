// menu de navegacion de la pagina

const navToggle = document.querySelector('.nav-toggle')
const navMenu = document.querySelector('.navbar-menu')

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('navbar-menu_visible')
});


// menu de inico de sesion de la pagina


let login = document.querySelector(".ph-user");

login.addEventListener("click", () => {
  mostrarLogin();
});

const mostrarLogin = () => {
  Swal.fire({
    html: ` <div class="content-dv-4x">
        <img  class="img-lg-ln" src="../assets/Logo.png" alt="logo de la pagina" />

        <h3 class="ln-txt-9">INICIO DE SECCIÓN</h3>

        <div class="ipt-lg">

            <input type="email" title="number of document"  class="ouput" name="document-identify" id="login" value="" placeholder="Email" />
            <input type="password" title="password"  class="ouput" name="password" id="password" value="" placeholder="password" />
        </div>
        </div>`,

    confirmButtonText: "Sign in",
    focusConfirm: false,
    preConfirm: () => {
      const login = Swal.getPopup().querySelector("#login").value;
      const password = Swal.getPopup().querySelector("#password").value;
      if (!login || !password) {
        Swal.showValidationMessage(`Por favor ingrese correo y contraseña`);
      }
      return { login: login, password: password };
    },
  }).then((result) => {
      let usuario = localStorage.getItem (result.value.login)
      usuario = JSON.parse(usuario)
      const correo = document. querySelector('#correo')

      if(correo === result.value.login && usuario.contrasena === Number(result.value.password)){

        alert('INGRESA')

      }else{

        alert('LOS DATOS INGRESADOS NO SON CORRECTOS')

      }
  });
};


// este es el botón totop de la pagina

let basicScrollTop = function () {
  let btnTop = document.querySelector("#goTop");

  let btnReveal = function () {
    if (window.scrollY >= 100) {
      btnTop.classList.add("is-visible");
    } else {
      btnTop.classList.remove("is-visible");
    }
  };

  let TopscrollTo = function () {
    if (window.scrollY != 0) {
      setTimeout(function () {
        window.scrollTo(0, window.scrollY - 30);
        TopscrollTo();
      }, 5);
    }
  };

  window.addEventListener("scroll", btnReveal);
  btnTop.addEventListener("click", TopscrollTo);
};

basicScrollTop();

// Js del banner principal de la pagina

// botón prev

const images = document.querySelectorAll('.image-noticias')
const prev = document.querySelector('.prev')
const next = document.querySelector ('.next')
const w = window.innerwidth
let visible = 0

images.forEach((item, i) => {
  if(i == 0){
    return
  }
  
anime({
  targets: item,
  left: `${w}px`,
  easing: 'aeseInOutExpo',
  duration: 500

});
})

prev.addEventListener('click', () => { 
  if (visible <= 0) {
      return
}
visible--
images[visible].classList.add('active')
anime({  
  targets: `.image-noticias-${visible + 1}`,
  left: `${w}px'`, 
  easing: 'easeInOutExpo',
  duration: 500

});
anime({
  targets: `.image-noticias-${visible}`,
  left: '0px',
  easing: 'easeInOutExpo',
  duration: 500
})
})

// botón next

next.addEventListener('click', () => {

  if (visible + 1 == images.length) {
  return
  };

  visible++ 
  
  images[visible].classList.add('active') 
  anime({ 
    targets: `.image-noticias-${visible - 1}`, 
    left: `-${w}px`,
    easing: 'easeInOutExpo',
    duration: 500
  
  }) 
  anime({
  
  targets: `.image-noticias-${visible}`,
  left: '0px', 
  easing: 'easeInOutExpo',
  duration: 500
  
  })
})