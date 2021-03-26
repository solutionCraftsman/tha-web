
function switchNav() {
    let firstDiv = document.querySelector(".hamburger div:first-of-type")
    let secondDiv = document.querySelector(".hamburger div:nth-of-type(2)")
    let nav_spread = document.querySelector("#nav-spread")
    // firstDiv.classList.toggle("hidden")
    // secondDiv.classList.toggle("hidden")
    // nav_spread.classList.toggle("hidden")
    nav_spread.style.width = "100%";
}