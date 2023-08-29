let name = ' Powell Rayhamen '


// Length Property
console.log(name.length)

//Convert to Uppercase
console.log(name.toUpperCase())

// Convert to Lowercase
console.log(name.toLowerCase())

// Include method 
let password = 'Valpow007'
console.log(password.includes())

// Trim
console.log(name.trim())



let isValidPassword = function (password) {
   return password.lenght > 8 && !password.includes('password')
}
console.log(isValidPassword('asdpc'))
console.log(isValidPassword('@#$%^&'))
console.log(isValidPassword('avcbpasswordvalnuel'))