function putNavbar(){
    let navbarEl = document.querySelector(".navbar");
    if (navbarEl){
        navbarEl.innerHTML = `
        <h2>TPdkrt</h2>
        <div class="navbar-links">
        <a href="projects.html" class="text-button">
            <div>projects</div>
        </a>
        <a href="index.html#edu_title" class="text-button">
            <div>education</div>
        </a>
        <a href="index.html" class="text-button">
            <div>home</div>
        </a>
        <a href="index.html#main_title" class="text-button">
            <div>about me</div>
        </a>
        </div>
        `;
    } else {
        console.log("navbar not found on page");
    }
}

async function checkCountry(){
    return fetch('https://ipapi.co/json/')
    .then(response => response.json())
    .then(data => {
      const country = data.country_name;
      return country;
    })
    .catch(error => {
      console.error("Geolocation error:", error);
    });
}

async function isR(){
    if(localStorage.getItem("country") == null){
        checkCountry().then(country =>{
            localStorage.setItem("country", country);
            
        });
    }
    const country = localStorage.getItem("country");
    if(country == 'Russia'){
        console.log("clearing the page");
        const toDestroy = document.querySelectorAll(".hdwpky");
        toDestroy.forEach((node)=>{
            node.remove();
        });
    }
}

isR();

putNavbar();