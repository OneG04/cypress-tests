describe("test suit", () =>{

    it("Validar pagina de incio", () =>{
        //Inicio
        cy.visit("http://zero.webappsecurity.com/")
        cy.get('.brand').contains('Zero Bank').should('be.visible')
        cy.get('#signin_button').click()
        cy.get('h3').contains('Log in')
        cy.get('#user_login').type('username')
        cy.get('#user_password').type('password')
        cy.get('.btn').click()
        //acount activity
        cy.get('#account_activity_tab > a').click()
        cy.get('#aa_accountId').select('Checking')
        cy.url().should('eq', 'http://zero.webappsecurity.com/bank/account-activity.html')

    })
})