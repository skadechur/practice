function tets(){
    let count=0;
    document.getElementById("onClick")
    .addEventListener("click",function(){
        console.log(++count);
    });
}
tets();