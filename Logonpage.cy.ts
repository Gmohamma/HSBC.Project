class Logonpage{
    clickLogonButton(){
        cy.get('.selected-item').contains(" Log On ").click({force: true});
    }
    checkLogo(){
        cy.get("img[src='/content/dam/hsbc/in/images/01_HSBC_MASTERBRAND_LOGO_RGB.svg']");
    }
    checkCoutinueButtonStatus(){
        cy.get('button[name="continue"]').should('be.disabled');
    }

    checkUserNameBlank(){
        cy.get('input[name="name"]').should('have.value','');
    }
    checkRemCBIUnchecked(){
       cy.get('[type="checkbox"]').should('not.be.checked');
    }
    getUserName(){
        return cy.get('input[name="name"]');
    }
    enterUserName(username:any){
        const un =this.getUserName();
        un.type(username);

    }
    clearUserName(){
        cy.get('input[name="name"]').clear();
    }
    Clickicon(){
        cy.get('span[class="sr-only"]').click({force: true});
    }
    Clickdeleteicon(){
        cy.get('span[class="icon icon-delete"]').click();
    }
    checkRemCBIchecked(){
        cy.get('[type="checkbox"]').click();
    }
    
    }

    


export default Logonpage;