const togglebtn = document.querySelector(".toggle")
const menulist = document.querySelector("nav")

togglebtn.addEventListener("click",function(){
    menulist.classList.toggle("active")
})