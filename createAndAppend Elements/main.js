//create and append elements
let myComment=document.createComment("creating DOM elements");
let myelement=document.createElement("div");
let heading=document.createElement("h1");
let paragraph=document.createElement("p");
let myAttripute=document.createAttribute("data-custom");
let myText1=document.createTextNode(`this is the product text heading `);
let myText2=document.createTextNode(`this is the product text paragraphthis is the product text paragraphthis is the product text paragraphthis is the product text paragraphthis is the product text paragraphthis is the product text paragraph`);


for(let i=0;i<100 ;i++){
    myelement.className=`product`;
    myelement.setAttributeNode(myAttripute);
    myelement.setAttribute("data-test","testing the data");
    
    heading.appendChild(myText1);
    paragraph.appendChild(myText2);
    //append text to the div 
    myelement.appendChild(heading);
    myelement.appendChild(paragraph);
    //append connent to div
    myelement.appendChild(myComment);
    //append dev to body

    document.body.appendChild(myelement);
}

console.log(myelement);
