/* Arrays */

let array1 = ["Hoodad", 100, true]
console.log(array1, array1[1])

/* Change an index of the array */
array1[0] = "Wesker"
console.log(array1)

/* Show the length of the array */
console.log(array1.length)

/* Add empty item into the array */
array1.length = 4
console.log(array1)

console.log("--------------------")

let array2 = ["Ali", "Ahmad", "Hoodad", "Hossein", "Hasan", "Sadegh", "Hoodad", "Javad", "Hoodad"]

for (let q = 0; q <= 8; q++) {
  if (array2[q] === "Hoodad") {
    console.log("Found Hoodad at the index " + q)
  }
}

console.log("--------------------")

let grade1 = 10;
let grade2 = 12;
let grade3 = 15.5;
let grade4 = 19;
let grade5 = 17.75;
let grade6 = 20;
let grade7 = 18.25;
let grade8 = 16;
let grade9 = 14.5;
let grade10 = 11;

let sum = grade1 + grade2 + grade3 + grade4 + grade5 + grade6 + grade7 + grade8 + grade9 + grade10
let average = sum / 10

console.log(average)

console.log("--------------------")

let grades = [10, 12, 15.5, 19, 17.75, 20, 18.25, 16, 14.5, 11]
let sum2 = grades[0] + grades[1] + grades[2] + grades[3] + grades[4] + grades[5] + grades[6] + grades[7] + grades[8] + grades[9]
let average2 = sum2 / grades.length

console.log(average2)

console.log("--------------------")

let sum3 = 0;

for (let i = 0; i <= 9; i++) {
  sum3 += grades[i]
}

let average3 = sum3 / grades.length
console.log(average3)

console.log("--------------------")

/* Array methods */

let array3 = ["Ali", 20, "Ahmad", 30, "Hoodad", 40, "Hossein", 50, "Hasan"]

console.log(array3.toString())
/* Separate elements */
console.log(array3.join(" * "))
/* Remove last element */
array3.pop()
console.log(array3)
/* Add new element at the end */
array3.push(60)
console.log(array3)

console.log("--------------------")

let array4 = ['Ali', 'Jassem', 'Taghi']

/* Remove first element */
array4.shift()
console.log(array4)

/* Add new element at start */
array4.unshift('Hossein')
console.log(array4)

console.log("--------------------")

let array5 = [1, 2, 3, 4, 5]
let array6 = [6, 7, 8, 9, 10]
let array7 = [11, 12, 13, 14, 15]

/* Merging arrays */
array8 = array5.concat(array6, array7)
console.log(array8)

console.log("--------------------")

let array9 = [12, 13.5, 14, 15.5, 16, 17.5, 18]
let max = 0;

for (let index = 0; index < array9.length; index++) {
  if (array9[index] > max) {
    max = array9[index]
  }
}

console.log(max)

console.log("--------------------")

let array10 = [12, 13.5, 14, 15.5, 16, 17.5, 18]
let min = array10[0] // Start with the first element as the minimum

for (let index = 1; index < array10.length; index++) {
  if (array10[index] < min) {
    min = array10[index];
  }
}

console.log(min)

console.log("--------------------")

/* Function declaration */

function hoodad() {
  console.log("Hoodad 1")
  console.log("Hoodad 2")
  console.log("Hoodad 3")
}

hoodad()

/* Function expression */

let wesker = function () {
  console.log("Hoodad 4")
  console.log("Hoodad 5")
  console.log("Hoodad 6")
}

wesker()

console.log("--------------------")

function exampble(a1, a2) {
  console.log(a1 + a2)
  console.log(a1 - a2)
  console.log(a1 * a2)
}

exampble(10, 15)

console.log("--------------------")

let math = function (a, b) {
  console.log(a + b)
  console.log(a - b)
  console.log(a * b)
}

math(10, 5)

console.log("--------------------")

let num1 = 12
let num2 = 10
let num3 = 12.5
let num4 = 13
let num5 = 10.5

let total = num1 + num2 + num3 + num4 + num5
let av = total / 5

console.log(av)

if (av >= 12) {
  console.log("Passed!")
} else {
  console.log("Failed!")
}

console.log("--------------------")

function calculateAverage(num1, num2, num3, num4, num5) {
  let total2 = num1 + num2 + num3 + num4 + num5
  let av2 = total2 / 5

  console.log(av2)

  if (av2 >= 12) {
    console.log("Passed!")
  } else {
    console.log("Failed!")
  }
}

calculateAverage(18, 17.5, 20, 15.5, 18)

console.log("--------------------")

/* Arrow function */

let funk1 = function () {
  console.log("Function 1")
}

funk1()

/* Now do it with arrow function */

let funk2 = () => console.log("Function 2")
funk2()

console.log("--------------------")

let funk3 = function (aa, bb) {
  return aa + bb
}

console.log(funk3(5, 10))

/* Now do it with arrow function */

let funk4 = (aa2, bb2) => aa2 + bb2

console.log(funk4(5, 5))

console.log("--------------------")

/* Callback function */

/* function firstFunction() {
  console.log("First function")
  secondFunction()
}

firstFunction()

function secondFunction() {
  console.log("Second function")
  firstFunction()
} */

console.log("--------------------")

/* Objects in JavaScript */

const hoodadObj = {
  age: 30,
  height: 174,
  isMarried: true,
  friends: ["Ali", "Akbar", "Hossein"]
}

console.log(hoodadObj)

console.log("--------------------")