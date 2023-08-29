let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 365
}

console.log(`${myBook.title} by ${myBook.author}`)

myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`)


let person = {
    name: 'Andrew',
    state: 'Chicago',
    age: 27
}

console.log(`${person.name} is ${person.age} and lives in ${person.state}.`)
person.age = person.age + 1
console.log(`${person.name} is ${person.age} and lives in ${person.state}.`)

