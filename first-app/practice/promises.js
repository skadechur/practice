// const cart=["item1","item2"]
// createOrder(cart,function(orderId){
//     proceedToPayment(orderId,function(orderDetails){
//         orderSummary(orderDetails)
//     })
// })
// createOrder(cart)
// .then(function(orderId){
//     return proceedToPayment(orderId)
// })
// .then(function(orderDetails){
//     orderSummary(orderDetails)
// })

// const promise=fetch("https://netflix.com");
// promise.then(function(data){
//     console.log(data.type)
//     return data.type;
// }).then(function(data){
//     console.log(data)
// })

// function fun2(){
//     console.log("fun");
// }
// const fun=async function(){
//     try{
//         const promise=await fetch("https://netflix.com");
//         console.log(promise);
//         console.log();
//     }
//     catch(e){
        
//     }
// }
// fun();
// fun2();

// function promise1(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve({
//                 status:"OK"
//             })
//         },3000)
//     })
// }

// function promise2(){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             resolve({
//                 statusCode:"200"
//             })
//         },5000)
//     })
// }



// async function prom(){
//     try{
//         const dataStatus=await promise1();
//         console.log(dataStatus);
//         const data=await promise2();
//         console.log(data);
//     }catch(e){

//     }
// }

// prom();
function safe(){
    console.log("Safe");
}
const promise1=function(){
    return new Promise(function(resolve,reject){
        resolve({name:"JS"})
    })
}

const promise2=function(){
    return new Promise(function(resolve,reject){
            resolve({name:"Java"})
    })
}

const asyn=async function(){
    try{
        const obj=await promise1();
        console.log(obj);
        const obj1=await promise2();
        console.log(obj1);
    }catch(e){

    }
}

asyn();
safe();