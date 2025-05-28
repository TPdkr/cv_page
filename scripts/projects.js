function addProjectLink(name){
    const link=  document.querySelector(`.js-${name}`);
    console.log(link.innerHTML);
    link.addEventListener("click",()=>{
        //window.location.href=`./${name}.html`;
        window.location.href=`./error.html`;
    });
}

addProjectLink("genau");
addProjectLink("undercooked");
addProjectLink("cv");