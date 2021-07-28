describe("Checking home & battle pages : ",function() {
    it('renders header and form', () => {
        cy.visit('/')
        cy.get('h1').should('contain', 'Battle')
        cy.get('#name1').should('be.visible')
        cy.get('#name2').should('be.visible')
        cy.get('#submit').should('be.visible')
    })

    it('Checking we can go to the next page. ', () => {
        cy.visit('/')
        cy.get('#name1').type('Grant')
        cy.get('#name2').type('Oliver') 
        cy.get('#submit').click()
        cy.get('#versus').should('contain', 'Grant vs Oliver')      
    })
})