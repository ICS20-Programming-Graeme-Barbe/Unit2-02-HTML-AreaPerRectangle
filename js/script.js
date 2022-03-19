// Created by: Graeme
// Created on: March  19 
// This file contains the JS functions for index.html

// Function for math
function DoMathClicked () {
	document.getElementById('add-math').innerHTML = '25 + 49 = ' + (25 + 49)
	document.getElementById('subtract-math').innerHTML = '23 - 33 = ' + (23 - 33)
	document.getElementById('multiply-math').innerHTML = '6 + 7 * 4 = ' + (6 + 7 * 4)
	document.getElementById('divide-math').innerHTML = '(12 / 3) + 93 = ' + ((12 / 3) + 93)
	document.getElementById('exponent-math').innerHTML = '5 ** 4 - 7 = ' + (5 ** 4 - 7)
	document.getElementById('square-root-math').innerHTML = '√(16) = ' + Math.sqrt(16)
}