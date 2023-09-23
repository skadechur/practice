// const obj = {
//     name:"ABC",
// }
// obj.getName = function(){
//     return this.name
// }
// console.log(obj.getName());

// function Constructor(name,roll){
//     this.name=name;
//     this.roll=roll;
// }

// Constructor.prototype.getNameAndRoll=function(){
//     return this.name+" "+this.roll;
// }

// const obj=new Constructor("ABC",1)
// console.log(obj.getNameAndRoll());

// const obj1=new Constructor("XYZ",2)
// console.log(obj1.getNameAndRoll===obj.getNameAndRoll);

// const obj={
//     name:"ABC",
//     roll:1
// }
// const obj1={
//     name:"PQR",
//     __proto__:obj,
//     sub:"JS"
// }
// const obj2={
//     name:"XYZ",
//     __proto__:obj1
// }
// console.log(obj2.sub);

// let arr=[1,2,3,4];
// Array.prototype.forEachImp=function(){
//     for(let i=0;i<this.length;i++){
//         console.log(this[i]);
//     }
// }
// arr.forEach((i)=>{
//     console.log(i);
// })
// Array.prototype.mapImp=function(){
//     let arr=[];
//     for(let i=0;i<this.length;i++){
//         arr.push(this[i]*10);
//     }
//     return arr;
// }
// const arr1=arr.mapImp()
// console.log(arr1);