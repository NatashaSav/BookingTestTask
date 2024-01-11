import {basePage} from '../page_object/base_page';
import {loginPage} from '../page_object/login_page';
import {constants} from '../support/constants';


const base_page = new basePage();
const login_page = new loginPage();


describe('Login to website', function() {


    beforeEach(function() {
        base_page.open_url()
        cy.fixture('user_data').then(function(data){
            this.data = data
        })
     })


    it('Successful login', function() {
        login_page.login(this.data.valid_data.email, this.data.valid_data.password)
        login_page.check_url('include', '/www.booking.com')
    })


    it('Login with incorrect password', function() {
        login_page.login(this.data.invalid_pswd.email, this.data.invalid_pswd.email)
        login_page.check_password(constants.INCORRECT_PASSWORD_MSG)
    })


    it('Login with incorrect email', function() {
        login_page.click_sign_in()
        login_page.enter_username(this.data.invalid_email.email)
        login_page.click_submit()
        login_page.check_email(constants.INCORRECT_EMAIL_MSG)
    })


    it('Login with empty email', function() {
        login_page.click_sign_in()
        login_page.enter_username(this.data.valid_data.email)
        login_page.click_submit()
        login_page.clear_password(this.data.valid_data.password)
        login_page.login_to_page()
        login_page.check_password(constants.EMPTY_PASSWORD_MSG)
    })


    it('Login with short password', function() {
        login_page.click_sign_in()
        login_page.enter_username(this.data.short_pswd.email)
        login_page.click_submit()
        login_page.enter_password(this.data.short_pswd.password)
        login_page.login_to_page()
        login_page.check_password(constants.INCORRECT_PASSWORD_MSG)
    })


    it('Login using numbers instead of letters', function() {
        login_page.click_sign_in()
        login_page.enter_username(this.data.phone_number)
        login_page.click_submit()
        login_page.check_email(constants.INCORRECT_EMAIL_MSG)
        
    })
})