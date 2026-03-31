const toggleButton = document.getElementById("open-close-btn");
const sidebar = document.getElementById("sidebar");
const links = document.querySelectorAll('#sidebar ul li a');
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

links.forEach(link => {
    link.addEventListener('click', () => {
        sidebar.classList.add("close");
        Array.from(sidebar.getElementsByClassName("show")).forEach(ul =>{
            ul.classList.remove("show");
        });
    });
});
