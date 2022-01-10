/// <reference types="cypress" />

const { clear, table } = require("console")
const { eq } = require("lodash")

describe('Our first suite', () => {

    it('first test', () => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

       
        //search by Tag Name
        cy.get('input')

        //find by ID
        cy.get('#inputEmail1')

        //find by class
        cy.get('.input-full-width')

        //find by attribute name
        cy.get('[placeholder]')

        //find by attribute name and value
        cy.get('[placeholder="Email"]')

        //by class value
        cy.get('[class="input-full-width size-medium shape-rectangle"]')

        //by TagName and attribute with value
        cy.get('input[placeholder="Email"]')

        //by two different attributes
        cy.get('[placeholder="Email"][type="email"]')

        //by tagname attribute with value, ID and ClassName
        cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')

        //the most recomended way: create your own locator
        cy.get('[data-cy="imputEmail1"]')

    })
    
    it('second test', () => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        //search locator
        cy.get('[data-cy="signInButton"]')

        cy.contains('Sign in')

        cy.contains('[status="warning"]','Sign in')

        cy.get('#inputEmail3')
            .parents('form')
            .find('button')
            .should('contain', 'Sign in')
            .parents('form')
            .find('nb-checkbox')
            .click()

        cy.contains('nb-card', 'Horizontal form').find('[type="email"]')

    })

    it('then and wrap methods', () => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        // cy.contains('nb-card', 'Using the Grid').find('[for="inputEmail1"]').should('contain', 'Email')
        // cy.contains('nb-card', 'Using the Grid').find('[for="inputPassword2"]').should('contain', 'Password')
        // cy.contains('nb-card', 'Basic form').find('[for="exampleInputEmail1"]').should('contain', 'Email address')
        // cy.contains('nb-card', 'Basic form').find('[for="exampleInputPassword1"]').should('contain', 'Password')


        //selenium style

        //const firstForm = cy.contains('nb-card', 'Using the Grid')
        //const secondForm = cy.contains('nb-card', 'Basic form')
        
        //firstForm.find('[for="inputEmail1"]').should('contain', 'Email')
        //firstForm.find('[for="inputPassword2"]').should('contain', 'Password')
        //secondForm.find('[for="exampleInputEmail1"]').should('contain', 'Email address')
        //secondForm.find('[for="exampleInputPassword1"]').should('contain', 'Password')


        //cypress style
        cy.contains('nb-card', 'Using the Grid').then( firstForm => {
            //JQuery format
            const emailLabelFirst = firstForm.find('[for="inputEmail1"]').text()
            const passwordLabelFirst = firstForm.find('[for="inputPassword2"]').text()
            expect(emailLabelFirst).to.equal('Email')
            expect(passwordLabelFirst).to.equal('Password')

            cy.contains('nb-card', 'Basic form').then( secondForm => {
                //const emailLabelSecond = secondForm.find('[for="exampleInputEmail1"]').text()
                const passwordLabelSecond = secondForm.find('[for="exampleInputPassword1"]').text()
                expect(passwordLabelFirst).to.equal(passwordLabelSecond)

                //to go back to cypress format and methods
                cy.wrap(secondForm).find('[for="exampleInputPassword1"]').should('contain', 'Password')
            })

        })
    })

    it('invoke command', () => {

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        // Ex.1
        cy.get('[for="exampleInputEmail1"]').should('contain', 'Email address')

        // Ex.2
        cy.get('[for="exampleInputEmail1"]').then( label => {
            expect(label.text()).to.equal('Email address') 
        })

        // Using Invoke
        cy.get('[for="exampleInputEmail1"]').invoke('text').then( text =>{
            expect(text).to.equal('Email address')
        })

        cy.contains('nb-card', 'Basic form')
            .find('nb-checkbox')
            .click()
            .find('.custom-checkbox')
            .invoke('attr', 'class')
            //.should('contain', 'checked')
            .then( classValue => {
                expect(classValue).to.contain('checked')
            })
    })

    it('invoke assert property', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Datepicker').click()
        
        cy.contains('nb-card', 'Common Datepicker')
            .find('[placeholder="Form Picker"]')
            .then( input => {
                cy.wrap(input).click()
                cy.get('nb-calendar-day-picker').contains('20').click()
                cy.wrap(input).invoke('prop', 'value').should('contain', 'Jan 20, 2022')
                cy.wrap(input).should('have.value', 'Jan 20, 2022')
            })
        
        // cy.contains('nb-card', 'Common Datepicker')
        //     .find('[placeholder="Form Picker"]').click()
        //     cy.get('nb-calendar-day-picker').contains('20').click()
        //     cy.contains('nb-card', 'Common Datepicker')
        //         .find('[placeholder="Form Picker"]')
        //         .invoke('prop', 'value').should('contain', 'Nov 20, 2021')
            
    })

    it('radio button', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.contains('nb-card', 'Using the Grid').find('[type="radio"]').then( radioButtons => {
            cy.wrap(radioButtons)
                .first()
                .check({force: true})
                .should('be.checked')

            cy.wrap(radioButtons)
                .eq(1)
                .check({force: true})
                .should('be.checked')

            cy.wrap(radioButtons)
                .eq(0)
                .should('not.be.checked')

            cy.wrap(radioButtons)
                .eq(2)
                .should('be.disabled')

        })
    })

    it('check boxes', () => {
        cy.visit('/')
        cy.contains('Modal & Overlays').click()
        cy.contains('Toastr').click()

        //Método .check não desclica
        //cy.get('[type="checkbox"]').check({force:true})

        //Para desclicar, usar método .click
        cy.get('[type="checkbox"]').eq(0).click({force:true})
        cy.get('[type="checkbox"]').eq(1).click({force:true})
        cy.get('[type="checkbox"]').eq(2).click({force:true})

        cy.contains('nb-card', 'Toaster configuration').find('[type="checkbox"]').then( checkboxes => {
            cy.wrap(checkboxes)
                .eq(0)
                .click({force:true})
                .should('be.checked')

            cy.wrap(checkboxes)
                .eq(1)
                .click({force:true})
                .should('not.be.checked')

            cy.wrap(checkboxes)
                .eq(2)
                .click({force:true})
                .should('be.checked')
        })

    })
    it('lists and dropdowns', () => {
        cy.visit('/')

        //Jeito burro
        // cy.get('nav nb-select').click()
        // cy.get('.options-list').contains('Dark').click()
        // cy.get('nav nb-select').should('contain', 'Dark')
        //convert hex colour to rgb colour to get correct code
        // cy.get('nb-layout-header nav').should('have.css', 'background-color', 'rgb(34, 43, 69)')

        // cy.get('nav nb-select').click()
        // cy.get('.options-list').contains('Light').click()
        // cy.get('nav nb-select').should('contain', 'Light')
        // cy.get('nb-layout-header nav').should('have.css', 'background-color', 'rgb(255, 255, 255)')

        // cy.get('nav nb-select').click()
        // cy.get('.options-list').contains('Cosmic').click()
        // cy.get('nav nb-select').should('contain', 'Cosmic')
        // cy.get('nb-layout-header nav').should('have.css', 'background-color', 'rgb(50, 50, 89)')

        // cy.get('nav nb-select').click()
        // cy.get('.options-list').contains('Corporate').click()
        // cy.get('nav nb-select').should('contain', 'Corporate')
        // cy.get('nb-layout-header nav').should('have.css', 'background-color', 'rgb(255, 255, 255)')

        //Jeito esperto
        cy.get('nav nb-select').then( dropdown => {
            cy.wrap(dropdown).click()
            cy.get('.options-list nb-option').each( (listItem, index) => {
                const itemText = listItem.text().trim()

                const colors = {
                    "Light": "rgb(255, 255, 255)",
                    "Dark": "rgb(34, 43, 69)",
                    "Cosmic": "rgb(50, 50, 89)",
                    "Corporate": "rgb(255, 255, 255)",                 
                }

                cy.wrap(listItem).click()
                cy.wrap(dropdown).should('contain', itemText)
                cy.get('nb-layout-header nav').should('have.css', 'background-color', colors[itemText])
                if( index <3){
                    cy.wrap(dropdown).click()
                }                
            })
        })
    })

    it('web tables', () => {
        cy.visit('/')
        cy.contains('Tables & Data').click()
        cy.contains('Smart Table').click()

        //1
        cy.get('tbody').contains('tr', 'Larry').then( tableRow => {
            cy.wrap(tableRow).find('.nb-edit').click()
            cy.wrap(tableRow).find('[placeholder="Age"]').clear().type('25')
            cy.wrap(tableRow).find('[class="nb-checkmark"]').click()
            cy.wrap(tableRow).find('td').eq(6).should('contain', '25')
        })

        //2
        cy.get('thead').find('.nb-plus').click()
        cy.get('thead').find('tr').eq(2).then( tableRow => {
            cy.wrap(tableRow).find('[placeholder="First Name"]').type('Tadeu')
            cy.wrap(tableRow).find('[placeholder="Last Name"]').type('Badaró')
            cy.wrap(tableRow).find('[placeholder="Username"]').type('Tad_b')
            cy.wrap(tableRow).find('[class="nb-checkmark"]').click()            
        })
        cy.get('tbody tr').eq(0).find('td').then( tableColumns => {
            cy.wrap(tableColumns).eq(2).should('contain', 'Tadeu')
            cy.wrap(tableColumns).eq(3).should('contain', 'Badaró')
            cy.wrap(tableColumns).eq(4).should('contain', 'Tad_b')
        })

        //3
        const age = [20, 30, 40, 200]

        cy.wrap(age).each( age => {
            cy.get('thead [placeholder="Age"]').clear().type(age)
            cy.wait(500)
            cy.get('tbody tr').each( tableRow => {
                if(age > 100){
                    cy.wrap(tableRow).should('contain', 'No data found')
                } else {
                cy.wrap(tableRow).find('td').eq(6).should('contain', age)
                }
            })
        })
        
    })

    it('web datepicker', () => {

        function selectDayFromCurrent(day){
      
            let date = new Date()
            date.setDate(date.getDate() + day)
            let futureDay = date.getDate()
            console.log(futureDay)
            let futureMonth = date.toLocaleString('en-us', {month: 'short'})
            let dateAssert = futureMonth+' '+futureDay+', '+date.getFullYear()
  
            cy.get('nb-calendar-navigation').invoke('attr', 'ng-reflect-date').then( dateAttribute => {
                if( !dateAttribute.includes(futureMonth)){
                    cy.get('[data-name="chevron-right"]').click()
                    selectDayFromCurrent(day)
                } else {
                    cy.get('nb-calendar-day-picker [class="day-cell ng-star-inserted"]').contains(futureDay).click()
                }
            }) 
            return dateAssert   
        }

        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Datepicker').click()
      
        cy.contains('nb-card', 'Common Datepicker').find('[placeholder="Form Picker"]').then( input => {
            cy.wrap(input).click()
            let dateAssert = selectDayFromCurrent(300)  
            cy.wrap(input).invoke('prop', 'value').should('contain', dateAssert)
        })
     
    })

    it('tooltip', () => {
        cy.visit('/')
        cy.contains('Modal & Overlays').click()
        cy.contains('Tooltip').click()

        cy.contains('nb-card', 'Colored Tooltips')
            .contains('Default').click()
        cy.get('nb-tooltip').should('contain', 'This is a tooltip')
    })

    it('Dialog Boxes', () => {
        cy.visit('/')
        cy.contains('Tables & Data').click()
        cy.contains('Smart Table').click()

        //1
        // cy.get('tbody tr').eq(0).find('.nb-trash').click()
        // cy.on('window:confirm', (confirm) => {
        //     expect(confirm).to.equal('Are you sure you want to delete?')
        // })

        //2
        const stub = cy.stub()
        cy.on('window:confirm', stub)
        cy.get('tbody tr').eq(0).find('.nb-trash').click().then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Are you sure you want to delete?')
        })
        
        //3
        // cy.get('tbody tr').eq(0).find('.nb-trash').click()
        // cy.on('window:confirm', () => false)
        
    })
})     
           

