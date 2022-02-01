console.log('JavaScript code has loaded!')

let yourName = "Jason Diaz"

let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle
let total = 0 // Total Amount of Cookies

const credit = document.querySelector('#credit')

const gbPlusBtn = document.querySelector('#add-gb')
const ccPlusBtn = document.querySelector('#add-cc')
const sugarPlusBtn = document.querySelector('#add-sugar')

const gbMinusBtn = document.querySelector('#minus-gb')
const ccMinusBtn = document.querySelector('#minus-cc')
const sugarMinusBtn = document.querySelector('#minus-sugar')

let quantityTotal = document.querySelector('#qty-total')

/* 
	Error message is logged if the user pressses
	negative if the quantity and or the total
	is less 0 
*/
let quantityNegativeERR = "the quantity of item and or total cannot be less than 0"

credit.textContent = `Created by ${yourName}`

// Plus Button Functionality

quantityGB = document.getElementById("qty-gb")
gbPlusBtn.addEventListener('click', function() {
	gb += 1
	quantityGB.textContent = gb

	total += 1
	quantityTotal.textContent = total
})

quantityCC = document.getElementById("qty-cc")
ccPlusBtn.addEventListener('click', function() {
	cc += 1
	quantityCC.textContent = cc

	total += 1
	quantityTotal.textContent = total
})

quantitySugar = document.getElementById("qty-sugar")
sugarPlusBtn.addEventListener('click', function() {
	sugar += 1
	quantitySugar.textContent = sugar

	total += 1
	quantityTotal.textContent = total
})

// Minus Button Functionality

gbMinusBtn.addEventListener('click', function() {
	if (quantityGB.textContent == 0) {
		console.log(quantityNegativeERR)
	} else {
		gb -= 1
		quantityGB.textContent = gb

		total -= 1
		quantityTotal.textContent = total
	}
})

ccMinusBtn.addEventListener('click', function() {
	if (quantityCC.textContent == 0) {
		console.log(quantityNegativeERR)
	} else {
		cc -= 1
		quantityCC.textContent = cc

		total -= 1
		quantityTotal.textContent = total
	}
})

sugarMinusBtn.addEventListener('click', function() {
	if (quantitySugar.textContent == 0) {
		console.log(quantityNegativeERR)
	} else {
		sugar -= 1
		quantitySugar.textContent = sugar

		total -= 1
		quantityTotal.textContent = total
	}
	
})