function addProjectLink(name) {
  const link = document.querySelector(`.js-${name}`);
  link.addEventListener("click", () => {
    //window.location.href=`./${name}.html`;
    window.location.href = `./error.html`;
  });
}

addProjectLink("genau");
addProjectLink("undercooked");
addProjectLink("cv");
