// console.log("Arpan") 
// +++++++ start basic++++++++++
const accountId = 1221
 let email = "arpan@gmail.com"
var accountpassword="2222"
accountCity ="indore"
// console.log(accountCity)

// -----data type------
// number
// bigInt (big data
// string 
// boolean(0,1) (true or false)
// null 
// undefind
// Symbol
// console.log (typeof datatype) //this is the definde the data type
//  console.log (typeof Undefinde)
//  console.log (typeof null)


// +++++++++++ Datatype conversion+++++++++++
//tow type of datatype is : primitive and nonprimitve
// ++++++++++= primitive ++++++++

let IslogedIn = 0
let BooleanIslogedIn = Boolean(IslogedIn)
// console.log( BooleanIslogedIn);


// +++++++++ oprator +++++++

// +,-,*,/,(**), % and assignment oprator 
// string addition 

let str1 = "arpan"
let str2 = "kochale"
let str3 = str1 + str2
// console.log(str3);

// ++++++++++++++ Memory ++++++++++
// tow type memory is : STACK AND HEAP 


// --------- string in java script ---------
const Name = "arpan"
const account = 50 

// console.log( ` hello my name is ${Name} and my account value is ${account}:`) // this new key is backtick use in the code   

const gameName = new String("arpan")
// console.log(gameName[1]);// songle value are check only one word

// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toLocaleLowerCase());
// console.log(gameName.toLocaleUpperCase());
//  console.log(gameName.indexOf('a'));//this case is position definde
// const newString = gameName.substring(0,5)
// console.log(newString);

const anotherString = gameName.slice(0,5)// this is slice key is used in start word to end word are show
 console.log(anotherString) ;

// console.log(anotherString.trim()) // trim method is use is removed the element 

// const url="http://Arpan%20kochale.com"
// console.log(url.replace('%20','_')); // this %20 is a tow word are space is middle 

// console.log(url.includes("Arpan")); //this includes methods are check the text in the word



// ----------------------Number and maths -------------------------------

const score = 400
// console.log(score);// this is  normal defind the number 
const balance =  new Number(200)
// console.log(balance)// this type is difrent is in normal type 

// console.log("this is the string value:",balance.toString());// this type is convert the  number in string  
// console.log("this is the string value:",balance.toString().length); // and this is length definde

// console.log(score.toFixed(4), balance.toFixed(2));//  that is point (.) value are join the (.0000)

const otherNumber = 22.44
// console.log(otherNumber.toPrecision(22)); // it is use of type of decimal value and (.) point value multiple zeros 

const hundred = 100000
// console.log(hundred.toLocaleString('en-IN'));// this is number are formating type 

// ______________________________Maths_______________________________________

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.2));
// console.log(Math.ceil(3.4));
// console.log(Math.floor(3.4));
// console.log(Math.min(2,3,6,4,3));
// console.log(Math.max(2,3,6,4,3));
// console.log(Math.random());
// console.log((Math.random()*10)+1);

// const min =20
// const max =10
// console.log(Math.floor(Math.random()*(max-min+1)+min));// this is very important this method 


// ______________________________________Date & Time ___________________________________________________


let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());

// console.log(myDate.toDateString());

// console.log(myDate.toTimeString());

console.log(myDate.getMonth()+1);
console.log(myDate.getDay());










// ++++++++++ Non primitive +++++++++++
// Array , object , function

// ----Array-----
 
const arr1 = [1,2,4,5,3]
// console.log(arr1);






