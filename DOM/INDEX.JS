let myelement=document.querySelector(".js");
myelement.innerHTML="<h1>Text from js file</h1>";
myelement.textContent="Text from js file";
document.images[0].alt="hidden image";
document.images[0].title="hidden image";
document.images[0].id="picture";
let link=document.querySelector(".link");
link.setAttribute("href","https://www.google.com");
link.setAttribute("title","https://www.google.com");
console.log(link.getAttribute("class"));
console.log(myelement.attributes);
myelement.hasAttribute("src")?console.log(true):console.log(false);
myelement.setAttribute("src","safaa");
myelement.removeAttribute("src");
myelement.hasAttributes?console.log(true):console.log(false);


