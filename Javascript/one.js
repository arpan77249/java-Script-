// console.log("Arpan") 
// +++++++ start basic++++++++++
const accountId = 1221
 let email = "arpan@gmail.com"
var accountpassword="2222"
accountCity ="indore"
// console.log(accountCity)

// -----data type------
// number
// bigInt (big data)
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
// (**) => this is duble star is bigint multiple vlaue in calculate 

let str1 = "arpan"
let str2 = "kochale"
let str3 = str1 + str2
// console.log(str3);

// ++++++++++++++ Memory ++++++++++
// tow type memory is : STACK AND HEAP 


// ---------------- string in java script---------- ---------
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

// console.log(myDate.getMonth()+1);
// console.log(myDate.getDay());
// console.log(myDate.toLocaleString('default',{
   
//     month:"numeric",
//     day:"numeric",
//     year:"numeric",
//     time:"numeric"
// }));

//++++++++++++++++++++++ Non primitive +++++++++++++++++++++++++
// Array , object , function

// ----Array-----
 
// const arr1 = [1,2,4,5,3]
// console.log(arr1);
const Myfevcar = ["volvo", "Verna", "Thar"]
// console.log(Myfevcar[1]);
// console.log(Myfevcar.push());
// console.log(Myfevcar);
// Myfevcar.push();


// console.log(Myfevcar.pop());
// console.log(Myfevcar);
// Myfevcar.pop();

// console.log(Myfevcar);

// const count = Myfevcar.push("enova")
// console.log(count); // this count is array count thats it 

// console.log(Myfevcar);

//  const count = Myfevcar.push("sweft","aoura","mustang")
//  console.log(count);
 
// console.log(Myfevcar);



// const arr1 = [1,2,4,5,3]
// console.log(arr1);
// console.log(arr1.unshift(6,7,8));
// console.log(arr1);
// console.log(arr1.pop(3));
const arr1 = [1,2,4,5,3]
// console.log(arr1);
// const firstelement = arr1.shift()
// console.log(arr1);
// console.log(firstelement);

// console.log(arr1.slice(1,4));
// console.log(arr1);

// console.log(arr1.splice());
// const str= [ 'rahul', 'abhishek' ,'krishna' ]

// console.log(str.indexOf( "arpan",5));
// console.log(str.push("arpan"));
// console.log(str.pop(2));
// console.log(str);

// console.log(arr1);
// console.log(arr1.shift().push()) ;
// console.log(arr1);

// console.log(str.includes("rahul"));// include methods are use is type boolen true or false

// --------------------------- Array Object -------------------------------------

// singalton/constructer 
// const obj = {
//     "fullName":"Arpan Kochale",
//     Age:20,
    
// }
// console.log(obj["fullName"]);
// console.log(obj["Name"]);


// const obj = {
//     myNum:  1,
//     propertyIsEnumberable(){
//         return  false;

//     },    
// };
//  obj.propertyIsEnumberable("myNum")
//  Object.prototype.propertyIsEnumerable.call(obj,"myNum");
//  console.log(obj.propertyIsEnumberable.call(obj,"myNum"));
 
// ----singleton/ constructor---------
// function is used  
// const tinderUser ={
//     name : "arpan",
//     age : 20
// }
// console.log(tinderUser);

// const regularUser ={
//     email:"arpan@gmail.com",
//     fullname:{
//         userfullname:{
//             firstname: "arpan",
// //             lastname: "Kochale"
//         }
//     }
// } 
// console.log(regularUser.fullname.userfullname.lastname);

//combine with object 

// const obj1 ={1:"a",2:"b"}
// const obj2 ={3:"a",4:"b"}
// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3);

// const obj = Object.create(null);
// const obj2= {__proto__: null};
// console.log(obj);

const normalobj = {};// create the normal object 
const nullprotoobj = Object.create(null);// create an object prototype "null"

console.log(`normalobj is : ${normalobj}`);//print thr normal object 
console.log(`nullprotoobj is : ${nullprotoobj}`);// thorw the error 

// other methods are fail as well ------------------------------------
normalobj.valueof();
nullprotoobj.valueof();

normalobj.hasOwnProperty("A");
nullprotoobj.hasOwnProperty("A");
// console.log(normalobj.hasOwnProperty("A"));















// -> concat 
// ->spread(.....)


// ------------oops concept----------------------------------
// inheritance

// class Student extends person{
// constructor(name , age , StudentId) {
//     super(name , age)
//     this.StudentId = StudentId;
// }
// getDetails(){
//     return  `Student: ${ super.getDetails()} (ID: ${this.StudentId})`;
// }
// } 

// class Teacher extends person{
// constructor(name , age , Subject) {
//     super(name , age)
//     this.Subject = Subject;
// }
// getDetails(){
//     return  `Teacher: ${ super.getDetails()} (Subject: ${this.Subject})`;
// }
// } 




























