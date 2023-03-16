
let btn = document.querySelector(".btn")

btn.addEventListener('click',function(){
let x = document.querySelector(".otp_div")
x.style.display = "block"
})

let otp = document.querySelector("#otp")

function checkotp(){

console.log(otp.value);

    if(otp.value == 123){
        alert("Payment Successfully Done ...")
        window.location.href ='/index.html'
    }
    else{
        alert("Wrong Otp")
    }
    
}