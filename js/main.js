const nav = document.querySelector('.sidebar')
const btn = document.querySelector('.main-body .toogle-btn')



btn.addEventListener('click', () => {
    nav.classList.toggle('active')
    
})