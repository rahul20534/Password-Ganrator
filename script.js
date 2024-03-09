let passcode = document.getElementById("password");
let btn = document.getElementById("btn1");

btn.addEventListener("click",function(){
    let temp = random();
    passcode.value = temp;
})

function random(){
    let char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let pas = "";
    for(let i=0; i<10; i++){
        let index = Math.floor(Math.random()*char.length);
        pas+=char[index];
    }
    return pas;
}














