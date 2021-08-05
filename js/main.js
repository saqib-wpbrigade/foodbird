const nav = document.querySelector('.sidebar')
const btn = document.querySelectorAll('.toogle-btn')



for(var i=0; i<btn.length; i++){
    btn[i].addEventListener('click', () => {
        nav.classList.toggle('active')
    })
}

