const calculate = document.getElementById("calc")

calculate.addEventListener("click", function(){
    const inputPrice = document.getElementById("inputPrice")
    const inputPriceValue = parseFloat(inputPrice.value)
    

    const inputCode = document.getElementById("inputCode")
    const inputCodeValue = parseFloat(inputCode.value)
    

    if(inputPrice.value === "" && inputCode.value === ""){
        return
    }

    const discount = document.getElementById("discount")
    const showDiscountValue = parseFloat(discount.innerText)

    if(inputCode.value === "SM24"){
        if(typeof inputCode.value ==="string"){
            const newInputPrice = inputPriceValue * 30/100
            const showDiscount = inputPriceValue - newInputPrice
            discount.innerText = showDiscount
            console.log(showDiscount)
        }
        
    }else{
        discount.innerText = inputPriceValue
    }

    document.getElementById("disc-container").style.display = "block"


    inputPrice.value = ""
    inputCode.value = ""
})