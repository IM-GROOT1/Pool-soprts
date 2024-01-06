
const bd = document.querySelector('nav')
const btnOpen = document.querySelector('#open')
const btnClose = document.querySelector('#close')


function addNav(){
bd.classList.add('active')
}

function removeNav(){
bd.classList.remove('active')
}

btnOpen.addEventListener('click', addNav)
btnClose.addEventListener('click', removeNav)