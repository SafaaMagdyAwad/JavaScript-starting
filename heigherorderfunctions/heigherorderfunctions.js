let myNums=[1,2,3,4,5,6];
let newArray=[];
// add all the old array elements to its self

for(let i=0;i<myNums.length ;i++){
    newArray.push(2*myNums[i]);
}

console.log(newArray);
//same idea with mapp & call back function
let usingmap=myNums.map(function(element, index, array){
    return 2*element;
},10);

console.log(usingmap);

//same idea with arrow function
let usingarrow=myNums.map((element)=> 2*element,10);

console.log(usingmap);

//mapping with external function
function addition(element){
    return element*2;
}

console.log(myNums.map(addition,10));

//map task
 let swappingCase="Elzero Wep School"; //makes capital small , smal capital
 let invertedNumbers=[1,-10,-20,15,100,-30];
 let ignoreBooleans="El334z4355e556ro6";

let swapping=swappingCase
.split("")
.map((element)=>
    element===element.toUpperCase()?element.toLowerCase():element.toUpperCase()
).join("");
console.log("swapping");
console.log(swapping);

let inverted=invertedNumbers.map((e)=>e*-1);
console.log(inverted);

let ignore=ignoreBooleans
.split("")
.map(
    (e)=>isNaN(Number(e))?e:""
).join("");
console.log(ignore);
// end of map
//start filter

