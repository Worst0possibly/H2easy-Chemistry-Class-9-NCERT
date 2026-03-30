const toggleButton = document.getElementById("open-close-btn");
const sidebar = document.getElementById("sidebar");
function toggleSide() {
    sidebar.classList.toggle("close");
    Array.from(sidebar.getElementsByClassName("show")).forEach(ul =>{
        ul.classList.remove("show");
    })
}
function toggleSubMenu(button) {
    button.nextElementSibling.classList.toggle("show");
    button.classList.toggle("rotate");
    if(sidebar.classList.contains("close")){
        sidebar.classList.toggle("close");
    }
}