const incrementButton = document.getElementById("inc")
const decrementButton = document.getElementById("dec")
const counter = document.getElementById("count")

const resetButton = document.getElementById("reset")

let count =0
incrementButton.addEventListener("click", function(){
  count++
  if(count > 0){
    decrementButton.removeAttribute("disabled")
  }
  counter.innerText = count
})
decrementButton.addEventListener("click", function(){
  count--
  if(count ===0){
    decrementButton.setAttribute("disabled",true)
  }
  counter.innerText = count
})

resetButton.addEventListener("click", function(){
    count =0
    if(count ===0){
        decrementButton.setAttribute("disabled",true)
    }
    counter.innerText = count
})