// ===============================
// 🚀 Assignment: Mastering JavaScript Fundamentals
// ===============================

// ===============================
// 🎯 Part 1: Mastering JavaScript Basics
// ===============================

// 1. Variable declarations and data types
let userName = "Guest";
let userAge = 20;
let isMember = false;

// 2. Capture user input (prompt) and use conditionals
// (Uncomment the next two lines if running in browser environment)
// userName = prompt("What is your name?");
// userAge = parseInt(prompt("How old are you?"));

// 3. Conditional logic
if (userAge >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// Output result to the webpage
document.addEventListener("DOMContentLoaded", function () {
    const statusDiv = document.getElementById("status");
    if (statusDiv) {
        statusDiv.textContent = `Hello, ${userName}! You are ${userAge >= 18 ? "an adult" : "a minor"}.`;
    }
});

// ===============================
// ❤️ Part 2: JavaScript Functions — The Heart of Reusability
// ===============================

// 1. Function to calculate total price with tax
function calculateTotal(price, taxRate) {
    return price + price * taxRate;
}

// 2. Function to format a greeting message
function formatGreeting(name) {
    return `Welcome, ${name}!`;
}

// Example usage:
let total = calculateTotal(100, 0.15); // 115
console.log("Total with tax:", total);

let greeting = formatGreeting(userName);
console.log(greeting);

// ===============================
// 🔁 Part 3: JavaScript Loops — Embrace the Power of Repetition!
// ===============================

// 1. For loop: Print numbers 1 to 5
for (let i = 1; i <= 5; i++) {
    console.log("For loop count:", i);
}

// 2. While loop: Countdown from 5 to 1
let count = 5;
while (count > 0) {
    console.log("Countdown:", count);
    count--;
}

// 3. forEach loop: Iterate through an array of fruits
const fruits = ["Apple", "Banana", "Cherry"];
fruits.forEach(function (fruit, index) {
    console.log(`Fruit #${index + 1}: ${fruit}`);
});

// ===============================
// 🌐 Part 4: Mastering the DOM with JavaScript
// ===============================

// 1. Change text content on button click
document.addEventListener("DOMContentLoaded", function () {
    const greetBtn = document.getElementById("greetBtn");
    const greetingDiv = document.getElementById("greeting");

    if (greetBtn && greetingDiv) {
        greetBtn.addEventListener("click", function () {
            greetingDiv.textContent = formatGreeting(userName);
        });
    }

    // 2. Toggle class on an element
    const toggleBtn = document.getElementById("toggleBtn");
    const box = document.getElementById("colorBox");

    if (toggleBtn && box) {
        toggleBtn.addEventListener("click", function () {
            box.classList.toggle("active");
        });
    }

    // 3. Create and add a new list item to the DOM
    const addFruitBtn = document.getElementById("addFruitBtn");
    const fruitList = document.getElementById("fruitList");

    if (addFruitBtn && fruitList) {
        addFruitBtn.addEventListener("click", function () {
            const newFruit = document.createElement("li");
            newFruit.textContent = "Mango";
            fruitList.appendChild(newFruit);
        });
    }
});

// ===============================
// End of Assignment
// ===============================
