/*hide navbar on scroll**/
//var prevScrollpos = window.pageYOffset;
/*window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.querySelector(".navbar").style.top = "0px";
    } else {
        document.querySelector(".navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}*/

function putNavbar(){
    let navbarEl = document.querySelector(".navbar");
    if (navbarEl){
        navbarEl.innerHTML = `
        <a href="projects.html" class="text-button">
            <h2 >projects</h2>
        </a>
        <a href="index.html#edu_title" class="text-button">
            <h2>education</h2>
        </a>
        <a href="index.html" class="text-button">
            <h2>home</h2>
        </a>
        <a href="index.html#main_title" class="text-button">
            <h2>about me</h2>
        </a>
        `;
    } else {
        console.log("navbar not found on page");
    }
}

putNavbar();