let notes = [{
    title: 'My next trip',
    body: 'I would like to go to spain'
    }, {
    title: 'Habbit to work on',
    body: 'Exercise. Eating a bit better'
    }, {
    title: 'Office modification',
    body: 'Get new seat'
    }]
    
const sortNotes = function(notes) {
    notes.sort(function(a, b) {
        if (a.title.toLocaleLowerCase() < b.title.toLocaleLowerCase()) {
            return -1
        } else if (b.title.toLocaleLowerCase() < a.title.toLocaleLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}

    const findNote = function(notes, noteTitle) {
        return notes.find(function(note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
        })
        }

const findNotes = function(notes, query) {
   return notes.filter(function(note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLocaleLowerCase())
        const isBodyMatch = note.body.toLocaleLowerCase().includes(query.toLocaleLowerCase())
        return isTitleMatch || isBodyMatch
    })

}
//         console.log(findNotes(notes, 'work'))

// const note = findNote (notes, 'Office modification')
// console.log(note)

sortNotes(notes)
console.log(notes)


