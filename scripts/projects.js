function addProjectLink(name){
    const link=  document.querySelector(`.js-${name}`);
    console.log(link.innerHTML);
    link.addEventListener("click",()=>{
        window.location.replace("genau.html");
    });
}

addProjectLink("genau");