fetch('../layouts/header.html').then(response => {

    if(!response.ok){
       return  console.log('Error', response.status);
    }
return response.text()
}
).then(header => {
    const body = document.body
    body.insertAdjacentHTML('afterbegin', header)
    hamburgerMenuFunctionality()
    setActiveLink()

}) 

function hamburgerMenuFunctionality(){
    const hambugerButton = document.querySelector('.hamburger-menu')
    const navbar = document.querySelector('.main-header__navigation__nav')
    hambugerButton.addEventListener('click', () => {
        navbar.classList.toggle('show')
    })
}

function setActiveLink(){
    const links = document.querySelectorAll('header nav a')
    const currentTab = document.title.split('| ')[1].trim()
    links.forEach(link  => {
        if(link.textContent === currentTab){
            link.classList.add('navbar-active-link')
        }else{
            link.classList.remove('navbar-active-link')
        }
    })
}




