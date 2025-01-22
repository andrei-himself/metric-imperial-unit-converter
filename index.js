/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const convertBtn = document.getElementById("convert-btn")
const lengthResults = document.getElementById("length-values")
const volumeResults = document.getElementById("volume-values")
const massResults = document.getElementById("mass-values")

convertBtn.addEventListener("click", function () {
    const inputValue = Number(document.getElementById("input-value").value)
    lengthResults.innerHTML = `
        ${inputValue} meters = ${Math.round(3.281 * inputValue * 1000) / 1000} feet | 
        ${inputValue} feet = ${Math.round(0.3048 * inputValue * 1000) / 1000} meters
    `
    volumeResults.innerHTML = `
        ${inputValue} liters = ${Math.round(0.264 * inputValue * 1000) / 1000} gallons | 
        ${inputValue} gallons = ${Math.round(3.78541 * inputValue * 1000) / 1000}
    `
    massResults.innerHTML = `
        ${inputValue} pounds = ${Math.round(2.204 * inputValue * 1000) / 1000} pounds | 
        ${inputValue} pounds = ${Math.round(0.453592 * inputValue * 1000) / 1000}
    `
})

