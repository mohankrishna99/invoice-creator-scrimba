let washCar = document.getElementById("wash-car")
let mowLawn = document.getElementById("mow-lawn")
let pullWeeds = document.getElementById("pull-weeds")
let text = document.getElementById("text")
let totAmt = document.getElementById("tot-amt")
let notes = document.getElementById("notes")
let totalAmt = 0
let reset = document.getElementById("reset")
let i = 0
let j = 0
let k = 0
let arr=[]

washCar.addEventListener("click", function() {
    if(i === 0){
        arr.push({
            task: "Wash Car",
            amount: 10
        })
    task()
    i += 1
    }
})

mowLawn.addEventListener("click", function() {
    if(j === 0){
        arr.push({
            task: "Mow Lawn",
            amount: 20
        })
       task()
        j += 1
    }
})

pullWeeds.addEventListener("click", function() {
    if( k === 0){
        arr.push({
            task: "Pull Weeds",
            amount: 30
        })
        task()
        k += 1
    }
})

function task(){
    let txt = ""
    let remove = ""
    text.innerHTML = ""
    totalAmt = 0
    for(let m = 0; m < arr.length; m++){
        if(arr[m].amount === 10){
            remove = "remove0()"
        }else if(arr[m].amount === 20){
            remove = "remove1()"
        }else if(arr[m].amount === 30){
            remove = "remove2()"
        }
        txt += `<tr id="${arr[m].amount}">
                    <td class="task1">${arr[m].task}<button class = "remove" onclick=${remove}>Remove</button></td>
                    <td class="total1">$${arr[m].amount}</td>
                </tr>`
        totalAmt += arr[m].amount
    }
    text.innerHTML += txt
    totAmt.textContent = totalAmt
    notes.innerHTML = "We accept cash, credit card, or PayPal"
}

reset.addEventListener("click", function(){
    text.innerHTML = ``
    totalAmt = 0
    totAmt.textContent = totalAmt
    notes.textContent = ""
    i = 0
    j = 0
    k = 0
    arr=[]
})

let remove = document.getElementById("0")
remove.addEventListener("click", function(){
    alert("remove")
})

function remove0(){
    document.getElementById("10").remove();
    for(let m = 0;m < arr.length; m++){
        if(arr[m].amount === 10){
            arr.splice(m,1)
        }
    }
    totalAmt -= 10
    totAmt.textContent = totalAmt
    i = 0
    if(arr.length === 0){
        notes.textContent = ""
    }
}

function remove1(){
    document.getElementById("20").remove();
    for(let m = 0;m < arr.length; m++){
        if(arr[m].amount === 20){
            arr.splice(m,1)
        }
    }
    totalAmt -= 20
    totAmt.textContent = totalAmt
    j = 0
    if(arr.length === 0){
        notes.textContent = ""
    }
}

function remove2(){
    document.getElementById("30").remove();
    for(let m = 0;m < arr.length; m++){
        if(arr[m].amount === 30){
            arr.splice(m,1)
        }
    }
    totalAmt -= 30
    totAmt.textContent = totalAmt
    k = 0
    if(arr.length === 0){
        notes.textContent = ""
    }
}