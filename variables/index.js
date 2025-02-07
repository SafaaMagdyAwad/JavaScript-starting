// window.onload=function(){

//     document.querySelector("h1").style.color="blue";
//     document.querySelector("h1").innerHTML=`<span>safaa <h1>safaa ${ignore}</h1> </span>`;
// };


let title ,description,date,html,card;
title="Elzero";
description="Elzero Web School";
date="25/10";
html=`<div >
<h3>${title}</h3>
<p>${description}</p>
<span>${date}</span>
</div>`;

card=document.querySelector(".card");
for(let i=0 ;i<4;i++){
    card.innerHTML +=html;
}
console.log(card);

//if challenge
let a=10;
console.log(
    (a<10)?a:(a>=10 && a<=40)?a +`from 10 to 40`:(a>40)?a+">40":"unknown"
);
//array challenge
let zero=0;
let counter=3;
let my=["Ahmad","Elzero","Elham","mazen","osama","gamal","anwar"];
console.log(my.slice(0,4).reverse());
console.log(my.slice(1,3).reverse());
console.log(my[1]);
console.log(my[1].split("").slice(4,6).join(""));
//loop challenge
let admins=["Ahmad","Osama","Sayed","Stop","Samar"];
let empiolyees=["Amgad","Samah","Ameer","Omar","Othman","Amany","Samia"];
let newAdmin=admins.slice(0,3);
document.write(`<div>We have ${newAdmin.length} Admins</div><hr>`);
newAdmin.forEach((element,index) => {
    document.write(`<h3>the admin for team `+(index+1)+` is `+element+`</h3>
    <br>
    <h2>Team Members</h2>`);
    document.write(`<ul>`);
        empiolyees.forEach(e => {
            (e.startsWith(element[0]))?
            document.write(`
            <li>`+e+`</li>
            </ul>`):"";
        });
});

//function chalenge

function showDetails(a,b,c){
    let name,age,avilable, error;
    typeof(a)=="string"?name=a:(typeof(a)=="number")?age=a:(typeof(a)=="boolean")?avilable=a:error=true;
    typeof(b)=="string"?name=b:(typeof(b)=="number")?age=b:(typeof(b)=="boolean")?avilable=b:error=true;
    typeof(c)=="string"?name=c:(typeof(c)=="number")?age=c:(typeof(c)=="boolean")?avilable=c:error=true;
    return `Hello ${name} ,Your Age is ${age} ,you are ${avilable?"Avilable":"Not Avilable"}`
}

console.log(showDetails("Safaa", 25,true));
console.log(showDetails("Safaa", true,25));
console.log(showDetails(25,"Safaa", true));
console.log(showDetails(false,25,"Safaa"));
console.log(showDetails(false,"Safaa",25));
//arrow function challange

function names(...a){
    let res=a.reduce((acc,red)=>acc+" "+red).join(" ");
    return res;
}

console.log(names(["safaa","Magdy"]));

let numbers=[20,50,10,60];//140+10=150-88=62
let calc=(one,two,...nums)=> {
   let res=one+two;
   for(let i=0 ;i<a.length;i++){
    res=res+nums[i];
   }
   
   console.log(nums.reduce( (acc,current)=> acc+current));
   
   return res;
};
console.log(calc(10,-62,numbers));