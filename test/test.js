const kyatatsu = require('../index.js')
kyatatsu.openBucket()

const Person = require('./person.js')
const History = require('./history.js')


Person.createNew({
    name: "Grayson",
    dob: new Date("12/20/1994")
}).then( person => {
    console.log(`AFTER Person.create: ${JSON.stringify(person,null,4)}`)

    person = new Person(person)

    person.sex = 'male'
    return person.save()
}).then( person => {
    console.log(`AFTER Person.save: ${JSON.stringify(person,null,4)}`)

    person = new Person(person)
    return person.update({
        sex: 'female' // saucy
    })
}).then( person => {
    console.log(`AFTER person.update: ${JSON.stringify(person,null,4)}`)
}).catch(err => {
    console.error(err)
})
    