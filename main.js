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