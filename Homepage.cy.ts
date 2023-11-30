class Homepage{
    visit(){
        cy.visit('https://www.hsbc.co.in/');  
    }
    Validatetitle(){
        cy.title().should('eq', 'HSBC India - Credit Cards, NRI Services, Saving and Deposit')
    }
    clickLogonButton(){
        cy.get('.selected-item').contains(" Log On ").click({force: true});
    }
    }

export default Homepage;