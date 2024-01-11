import {basePage} from "../page_object/base_page";
import {searchPage} from "../page_object/search_page";


const base_page = new basePage();
const search_page = new searchPage();


describe('Search by filters', function() {

    
    before(function() {
        base_page.open_url()
        cy.fixture('search_data').then(function(data){
            this.data = data
        })
     })


    it('Search by destination', function() {
        search_page.login_or_register_window()
        search_page.destination(this.data.end_point)
        search_page.search_by_date()
        search_page.select_start_date()
        search_page.select_end_date()
        search_page.check_start_date(this.data.start_date)
        search_page.check_end_date(this.data.end_date)
        search_page.filter_by_categories()
        search_page.number_of_adults()
        search_page.number_of_kids()
        search_page.kids_ages_select()
        search_page.select_number_of_years(this.data.number_years)
        search_page.done_button()
        search_page.search_button()
        search_page.breadcrumbs(this.data.arrival_point)
        search_page.top_level_header(this.data.headline_excerpt)
    })
})
