// console.log("1");
// function fun(){
//     return new Promise((resolve,reject)=>{
//         console.log("00");
        
//         resolve(5);
//     })
// }
// fun().then(()=>{
//     console.log("Hi");
// }).catch((e)=>{
//     console.log("catch"+e);
// })
// console.log("2");
// async function sw(){
//     console.log("3");
//     try{
//         let a=await fun();
//         console.log(a+typeof a+"try");
//     }catch(e){
//         console.log("4");
//         console.log(e);
//         console.log("16");
//     }
// }
// sw();
// var a=9;
// if(a){
//     var a=4;
//     let b=9;
//     console.log(a+b);
// }
// console.log("Outside a function"+this);
// let obj={
//     myFun:function fun(){
//         console.log("Inside a function"+this);
//     }
// }
// obj.myFun();

// function Fun(name){
//     this.name=name;
// }
// let name=new Fun("ABC"); //objec prototype
// Fun.prototype.getName=function(){
//     return this.name;
// }
// // console.log(name+typeof name);
// console.log(name.getName());
// 'use strict';
// var b=1;
// function RBI(reg){
//     this.reg=reg;
// }
// function Bank(name){
//     this.name=name;
// }
// Bank.prototype.__proto__=new RBI("RBI");
// var icici=new Bank("ICICI");
// console.log(b);
//spread and rest operator

// const a=[1,2,3];
// var b=[...a];
// function c(nu,...rest){
//     console.log(nu,rest);
// }
// c(...b);
// console.log(b);

// const a=function(parameter){

// }
// a(argument)

// console.log(b);
// const b=0;

// b();
// let b=function x(){
//     console.log(x);
    
// }







// function outer(){
//     let a=0;
//     return () => {
//         a=++a;
//         console.log(a);
//     }
// }
// var fun=outer();
// fun();
// fun();
// fun();fun();fun();fun();fun();fun();
// function xyz(...param){
//     console.log(param);
//     return `Hi this is ${this.name} ${param}`;
// }
// xyz(1,2,3,4);
// const obj={
//     name:"xyz"
// }
// console.log(xyz.bind(obj)());
// console.log(xyz.call(obj,"arg"));
// console.log(xyz.apply(obj,["arg"]));
// let x=this;
// console.log(this);
// function xyz(){
//     console.log(this);
// }
// xyz();
// const fun=()=>{
//     console.log(this);
// }
// fun();

// function xyz(){
//     console.log(this);
// }
// xyz();

// function xyz(){
//     let a=1;
//     const xyz=()=>{
//         console.log(this);
//     }
//     xyz();
// }

// xyz();

// const user={
//     username:"temp",
//     login:function (){
//         // console.log(this);
//         function abc(){
//             console.log(this);
//         }
//         abc()
//     }
// }
// user.login();


// const user={
//     username:"temp",
//     login:function (){
//         // console.log(this);
//          const abc=()=>{
//             console.log(this);
//         }
//         abc();
//     }
// }
// user.login();


// function abc(){
//     const abc=()=>{
//         console.log(this);
//     }
//     abc();
// }
// abc();


// const user={
//     username:"temp",
//     login:()=>{
//         console.log(this);
//          const abc=function() {
//             console.log(this);
//         }
//         abc();
//     }
// }
// user.login();


// const startDate = new Date().getTime();
// let endDate = startDate;
// while(endDate<startDate+10000){
//     endDate = new Date().getTime();
//     console.log(endDate);
// }
// console.log(startDate);

// function xyz(){
//     // console.log(this);
//     const xyz = () => {
//         console.log(this);
//     }
//     xyz();
// }
// xyz();


//     const xyz = () => {
//         function xyz(){
//             console.log(this);
//     }
//     xyz();
// }
//     xyz();

// let obj1={
//     name:"ABC",
//     city:"XYZ",
//     getDetails:function(){
//         console.log(this.name+ " "+this.city);
//     }
// }
// let obj2={
//     name:"PQR",
//     city:"RST"
// }
// //function borrowing
// obj1.getDetails.call(obj2);

// let obj1={
//     name:"ABC",
//     city:"XYZ",
// }
// let getDetails=function(a){
//     console.log(this.name+ " "+this.city+" "+a);
// }
// let obj2={
//     name:"PQR",
//     city:"RST"
// }
//function borrowing
// getDetails.call(obj1,"AA");
// getDetails.call(obj2,"BB");

// getDetails.apply(obj1,["AA"]);
// getDetails.apply(obj2,["BB"]);

// getDetails.bind(obj1,"AA")();
// getDetails.bind(obj2,"BB")();

// String.prototype.trueLength=function(){
//     console.log(this.trim().length);
// }
// let a="     JDLD     ";
// a.trueLength();

// const setUser = function(username){
//     console.log(username);
//     this.username = username;
// }
// const cretaUser = function(username,email,password){
//     setUser.call(this,username);
//     this.email = email;
//     this.password = password;
// }
// const obj1 = new cretaUser("chai","chai@xyz.com","907");
// console.log(obj1);

// const users = [
//     {firstName:"askshay",lastName:"saini",age:"26"},
//     {firstName:"donald",lastName:"trump",age:"75"},
//     {firstName:"elon",lastName:"musk",age:"50"},
//     {firstName:"deepika",lastName:"padukone",age:"26"}
// ];
// // reduce
// const output = users.reduce((acc,curr) => {
//     if(curr.age < 30){
//         acc.push(curr.firstName);
//     }
//     return acc;
// },[])
// // console.log(output);
// const list = users.reduce((acc,curr) => {
//     if(acc[curr.age]){
//         ++acc[curr.age]
//     }else{
//         acc[curr.age]=1;
//     }
//     return acc;
// },{})
// console.log(list);
