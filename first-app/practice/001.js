const uno = function(){
    return "I am uno"
}

const dos = function(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("I am dos")
        },1000)
    })
}

const trees = function(){
    return "I am trees"
}

async function callMe(){
    console.log(uno());
    console.log(await dos());
    console.log(trees());
}

callMe();