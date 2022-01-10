/// <reference types="cypress"/>

describe('JSON objects', () => {
    
    it('JSON objects', () => {
        cy.openHomePage()

        const simpleObject = { "key": "value", "key2": "value2"}

        const simpleArrayOfValues = [ "value1", "value2", "value3"]

        const arrayOfObjects = [{"key": "value"}, {"key2": "value2"}, {"key3": "value3"}]

        const typesOfData = { "string": "this is a string", "number": 10}

        const mix = {
            "FirstName": "McLovin",
            "LastName": "McLovinson",
            "Age": 40,
            "Students": [
                {
                    "firstName": "Sara",
                    "lastName": "Connor"
                },
                {
                    "firstName": "Bruce",
                    "lastName": "Willis"
                }
            ]
        }

        console.log(simpleObject.key2)
        console.log(simpleObject["key2"])
        console.log(simpleArrayOfValues[1])
        console.log(arrayOfObjects[2].key3)
        console.log(mix.Students[0].firstName)

        const lastNameOfSecondStudent = mix.Students[1].lastName

    })
})