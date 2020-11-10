let myname="Tamsyn"
document.write(typeof(myname));
 /*checking the data type of a variable*/

let mysentence='"Tammy said "we are all crazy",'
document.write(typeof(mysentence)+"<br/>") ;

let age=30.1;

let num2= 2;



let ping =5;
document.write(typeof(ping)+"<br/>");

let x="Tamysn"
let result=15 +6 + x;
document.write(typeof(result));




let table={length:4, width:5, colour:"Red", myarea:function(){return 5*4}}; 
/*keys: values*/
console.log(table.myarea());

table.colour="pink" /*you can change the value of a variable. here we changed white to pink*/

document.write(table.length)  /*dot notation*/

document.write(table['colour'])  /*bracket notation*/


let selectedColors =['red', 'blue']
console.log(selectedColors)
console.log(selectedColors.length) /*gives count of whats in the array, in this caseits 2*/
 
/*an array is a data structure used to represent a list of objects, elements*/
 
let table1 ={length:5, width:6, colour:"blue", thearea:function(){return 6*6}, thediameter:function(){return 5*3}};
console.log(table1.thearea());
console.log(table1.thediameter()); 

