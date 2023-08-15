const calculate = document.getElementById("calc")

calculate.addEventListener("click",function(){
    const inputField = document.getElementById("input")
    const inputStr = inputField.value
    const inputFieldNum = parseFloat(inputStr)
    if(inputField.value === ""){
        inputField.value =""
        return;  
    }
    

    const discounBy = inputFieldNum * 30/100
    const  disountedPrice = inputFieldNum - discounBy
   
   
    const discountPrice = document.getElementById("discount")
    const discountStr = discountPrice.innerText
    const discountNum = parseFloat(discountStr)
   
    
    discountPrice.innerText = disountedPrice

    const discContainer = document.getElementById("disc-container")

    discContainer.style.display = "block"

    inputField.value =""
    
})