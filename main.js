// Abre e fecha o menu quando clicar no icone: hamburguer e x

const nav = document.querySelector('#header nav') // Pedindo para procurar os seletor nav dentro do header
const toggle = document.querySelectorAll('nav .toggle') // Pedindo para procurar todos os seletores toggle

for (const element of toggle){
    element.addEventListener('click', function(){
        // Element add um evento click, que fará tal função
        nav.classList.toggle('show')
        // No nav olhe as class, e add a class show
    })
}

// Quando click em um item do menu, esconder o menu 
const links = document.querySelectorAll('nav ul li a')

for(const link of links){
    links.addEventListener('click', function(){
        nav.classList.remove('show')
    })
}

/* mudar o header da página quando der scroll */
const header = document.querySelector('#header')
const navHeight = header.offsetHeight

window.addEventListener('scroll', function () {
  if (window.scrollY >= navHeight) {
    // scroll é maior que a altura do header
    header.classList.add('scroll')
  } else {
    // menor que a altura do header
    header.classList.remove('scroll')
  }
})


/* Testimonials carousel slider swiper */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 2,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})



/* ScrollReveal: Mostrar elementos quando der scroll na página */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials
  #contact .text, #contact .links
  `,
  { interval: 100 }
)