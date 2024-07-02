let num = document.querySelectorAll(".number")
let equal = document.getElementById("equals")
let input = document.getElementById("display")
let clear = document.getElementById("clear")
let operation = document.querySelectorAll(".operation")
let del = document.getElementById("delete")

for (let i of num){
    i.addEventListener("click", ()=>{
        n = i.innerText
        input.value += n
    })

}
for(let i of num){
    document.addEventListener("keypress", (event)=>{
        n = i.innerText
        if(event.key == n){
            input.value += n
        }
    })
}
clear.addEventListener("click", ()=>{
    input.value = ""
})

equal.addEventListener("click" , ()=>{
    evaluate()
})
del.addEventListener("click", ()=>{
    let inputValue = input.value
    let str = inputValue.substring(0, inputValue.length - 1);
    input.value = str
})
for(let o of operation){
    o.addEventListener("click", ()=> {
        operations()
    }) 
}
for(let o of operation){
    document.addEventListener("keypress", (event)=> {
       
    }) 
}



document.addEventListener("keypress" , (event)=>{
    if (event.key == "Enter"){
        evaluate()
    }
})



function evaluate(){
    let val = input.value
    let solved = eval(input.value)
    input.value = ""
    input.value += solved
}

function operations(){
    let inputValue = input.value
    len = inputValue.length
    if(inputValue == "-"){
        input.value = "-"
    }
    else if (inputValue[len - 1] == "/" ||
        inputValue[len - 1] == "+" || 
        inputValue[len - 1] == "*" || 
        inputValue[len - 1] == "-")
        {
            let str = inputValue.substring(0, inputValue.length - 1);
            input.value = str
            let oInner = o.innerHTML
            input.value += oInner
        }

    else if(inputValue == ""){
        oInner = o.innerHTML
        if (oInner == "-"){
            input.value += oInner
        }
        else{
            let str = inputValue.substring(0, inputValue.length - 1);
            input.value = str
        }
    }
    else{
        oInner = o.innerHTML
        input.value += oInner
    }
}