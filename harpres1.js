burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
items = document.querySelector('.items')
searchbar = document.querySelector('.searchbar')

burger.addEventListener('click', () => {
    navbar.classList.toggle('h-nav-resp');
    items.classList.toggle('v-class-resp');
    searchbar.classList.toggle('v-class-resp');
})