let str = "My name is Bhawani Singh Shekhawat "
let span = document.querySelector("span")
console.log(str.length)
let i = 0

setInterval(()=>{
if(i < str.length){
        span.textContent += str[i]
    }else{
        span.textContent = ""
        i = -1
    }
    i++
},200)