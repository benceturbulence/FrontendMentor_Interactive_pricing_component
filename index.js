let pageview = document.querySelector("#pageview")
let price = document.querySelector("#price")
let slider = document.querySelector("#mySlider")

let yearlyDiscount = false
let priceArray=[8,12,16,24, 36]

const toggler = document.getElementById("toggler")


/* It switches the discounted price if the toggle is clicked */

toggler.addEventListener("click", function(){
    yearlyDiscount = !yearlyDiscount
    yearlyDiscount ? priceArray = priceArray.map(e => e*0.75) : priceArray = [8,12,16,24, 36]
    
    // also changes the toggle 
    yearlyDiscount ? document.getElementById("toggler").style.margin=" 0 0 0 auto" : document.getElementById("toggler").style.margin="0 auto 0 0"
    console.log(yearlyDiscount)
    console.log(priceArray)
})



console.log(priceArray)

slider.oninput = function() {
    if (this.value < 999999){
        pageview.innerHTML = `${this.value/1000}K`;
    } else {
        pageview.innerHTML = `${this.value/1000000}M`
    }
    
    if (this.value <50000){
        price.innerHTML = `$ ${priceArray[0].toFixed(2)}`
    } else if (this.value <100000){
        price.innerHTML = `$ ${priceArray[1].toFixed(2)}`
    } else if (this.value <500000){
        price.innerHTML = `$ ${priceArray[2].toFixed(2)}`
    } else if (this.value <1000000){
        price.innerHTML = `$ ${priceArray[3].toFixed(2)}`
    } 
    else {
        price.innerHTML = `$ ${priceArray[4].toFixed(2)}`
    }


}