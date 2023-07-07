const menuActive = document.querySelector('.btn')
const nav = document.querySelector('.navigator_responsive-nav')
const home = document.querySelector('.body')

menuActive.addEventListener('click', () => {
    home.classList.toggle('home-active')
    nav.classList.toggle('navigator_responsive-nav--active')
})
nav.addEventListener('click', () => {
    home.classList.toggle('home-active')
    nav.classList.toggle('navigator_responsive-nav--active')
})


// menuActive.addEventListener('click', () => {
//     console.warn('cagon')
//     home.classList.toggle('home-active')
//     menuActive.classList.toggle('navigator_responsive-nav--active')
//     if (menuActive == true){
//         home.addEventListener('click', () =>{
//             home.classList.toggle('home-active')
//             menuActive.classList.toggle('navigator_responsive-nav--active')
//         })
//     }
//     console.log('Esa mierda tiene que salir')
// })
// console.log(menuActive)
