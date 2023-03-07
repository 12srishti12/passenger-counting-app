//document.getElementById().innerText=
let counted=document.getElementById("counted")



let count=0
function increment(){
    counted.innerText=count
    count=count+1
}

function save(){
    console.log(count)
}

//understanding the string

// let v1= "hello pears"
// let v2= "welcome to javascript"
// console.log(v1+", "+v2+"!!")
//output be=hello pears, welcome to javascript!!