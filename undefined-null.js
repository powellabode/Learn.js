// undefined for variables 
let name

name = 'Powell'


if (name === undefined) {
   console.log('please provide me a name')
} else {
    console.log(name)
}
// undefined for function arguement
// undefined as function return defualt value 

let square = function (num) {
    console.log(num)
}
let result = square()
console.log(result)

// Null as assigned value 
let age = 29

age = null;
 
console.log(age)