/// <reference types="cypress" />

describe('Test with backend', () => {
    
    beforeEach('login to the app', () => {
        //cy.server()
        //cy.route('Get','**/tags', 'fixture:tags.json')
        cy.intercept({method: 'Get', path:'**/tags'}, {fixture:'tags.json'})
        cy.loginToApplication()
    })

    // it('should log in', () => {
    //     cy.log('Yeeeey we logged in')
    // })

    it('verify correct request and response', () => {

        //cy.server()
        //cy.route('POST', '**/articles').as('postArticles')
        cy.intercept('POST', '**/articles').as('postArticles')

        cy.contains('New Article').click()
        cy.get('[formcontrolname="title"]').type('This is a title')
        cy.get('[formcontrolname="description"]').type('This is a description')
        cy.get('[formcontrolname="body"]').type('This is a test article')
        cy.get('[placeholder="Enter tags"]').type('test')
        cy.contains('Publish Article').click() 

        cy.wait('@postArticles')
        cy.get('@postArticles').then( xhr => { 
            console.log(xhr)
            expect(xhr.response.statusCode).to.equal(200)
            expect(xhr.request.body.article.body).to.equal('This is a test article')
            expect(xhr.response.body.article.description).to.equal('This is a description')
        })
    })

    it('intercepting and modifying the request and response', () => {

        cy.intercept('POST', '**/articles', (req) => {
            req.body.article.description = "This is a description 2"
        }).as('postArticles')

        cy.contains('New Article').click()
        cy.get('[formcontrolname="title"]').type('This is a title')
        cy.get('[formcontrolname="description"]').type('This is a description')
        cy.get('[formcontrolname="body"]').type('This is a test article')
        cy.get('[placeholder="Enter tags"]').type('test')
        cy.contains('Publish Article').click() 

        cy.wait('@postArticles')
        cy.get('@postArticles').then( xhr => { 
            console.log(xhr)
            expect(xhr.response.statusCode).to.equal(307)
            expect(xhr.request.body.article.body).to.equal('This is a test article')
            expect(xhr.response.body.article.description).to.equal('This is a description 2')
        })
    })

    it.only('should give tags with routing object', () => {
        cy.get('.tag-list')
        .should('contain', 'cypress')
        .and('contain', 'automation')
        .and('contain', 'testing')
    })

    it('verify global feed likes count', () => {

        // cy.route('GET', '**/articles/feed*','{"articles":[],"articlesCount":0}')
        // cy.route('GET','**/articles*', 'fixture:articles.json')
        cy.intercept('GET', '**/articles/feed*', {"articles":[],"articlesCount":0})
        cy.intercept('GET','**/articles*', {fixture:'articles.json'})

        cy.contains('Global Feed').click()
        cy.get('app-article-list button').then( listOfButtons => {
            expect(listOfButtons[0]).to.contain('8')
            expect(listOfButtons[1]).to.contain('3')
        })

        cy.fixture('articles').then( file => {
            const articleLink = file.articles[1].slug
            //cy.route('POST', '**/articles/'+articleLink+'/favorite', file)
            cy.intercept('POST', '**/articles/'+articleLink+'/favorite', file)
        })

        cy.get('app-article-list button')
        .eq(1)
        .click()
        .should('contain', '4')
        
    })

    
})
