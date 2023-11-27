///// Objects /////

let person = {
  name: "Hoodad",
  age: 29,
  height: 174
}

///// Access ways /////

// Dot notation
console.log(person.name) // Hoodad

// Brocket notation
console.log(person["name"]) // Hoodad

///// Functions /////

function greet(name, familyName) {
  console.log("Hii " + name + " " + familyName)
}

greet("Hoodad", "Khafas")
greet("Mohsen", "Ashrafzadeh")