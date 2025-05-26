//         document.addEventListener("DOMContentLoaded", function() {
//     // Your JavaScript here
// }); 

const display = document.getElementById("display");


function appendToDisplay(input) {
    display.value += input;
}
function appendToDisplay2() {
    display.value *= display.value
}
function appendToDisplay3() {
    display.value = Math.sqrt(display.value);
}
function appendToDisplay4() {
    display.value = Math.log10(display.value);
}
function appendToDisplay5() {
    let pi = Math.PI
    display.value = Math.sin(display.value * pi / 180)
    display.value = Math.fround(display.value)
    // display.value *= 57.29578;
}
function appendToDisplay6() {
    let pi = Math.PI
    display.value = Math.cos(display.value * pi / 180);
    display.value = Math.fround(display.value)
}
function appendToDisplay7() {
    display.value = Math.fround(Math.PI)

}
function clearDisplay() {
    let Display = display.value.length
    display.value = display.value.slice(Display)
}
function clearDisplay2() {
    let Display = display.value.length
    display.value = display.value.slice(0, Display - 1)
}
function calculate() {
    try {
        display.value = Math.fround(eval(display.value));
        if (display.value === "Infinity") {
            display.value = "Math Error"
        }
        if (display.value === "NaN") {
            display.value = "Math Error"
        }

    }
    catch (error) {
        display.value = "Syntax Error"
    }
}

