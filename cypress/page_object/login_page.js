export class loginPage{


    elements = { 
        username         : () => cy.get('#username'),      
        password         : () => cy.get('input[id="password"]'), 
        sign_in          : () => cy.get('[data-testid="header-small-sign-in-button"]'),
        login_btn        : () => cy.get('button[type="submit"]'),   
        url_verification : () => cy.url(),
        check_pswd       : () => cy.get('#password-note'),
        check_name       : (text) => cy.get('#username-note')
    }

 
    enter_username(username){
        this.elements.username().type(username);
    }
 

    enter_password(password){
        this.elements.password().type(password);
    }


    clear_password(password){
        this.elements.password().type(password).clear();
    }


    click_sign_in(){
        this.elements.sign_in().click();
    }


    login_to_page(){
        this.elements.login_btn().first().click();
    }
   
   
    click_submit() {
        this.elements.login_btn().click();
    }
 

    check_url(chainers, value){
        this.elements.url_verification().should(chainers, value);
    }


    check_password(text){
        this.elements.check_pswd().should('have.text', text);
    }


    check_email(text){
        this.elements.check_name(text).should('have.text', text);
    }


    login(email, password){
        this.click_sign_in();
        this.enter_username(email);
        this.click_submit();
        this.enter_password(password);
        this.login_to_page();
    }
 } 