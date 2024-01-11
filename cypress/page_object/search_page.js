export class searchPage{


    elements = { 
        pop_up_w              : () => cy.get('.ffd93a9ecb > .abcc616ec7 > .a83ed08757'),      
        place_of_arrival      : () => cy.get('.b7ab62d599 .bc4cc43c81 input'), 
        search_box_dates      : () => cy.get('div[data-testid="searchbox-dates-container"]'),
        start_date            : () => cy.get('td span[data-date="2024-01-22"]'),
        end_date              : () => cy.get('td span[data-date="2024-01-27"]'),
        show_start_date_text  : () => cy.get('button[data-testid="date-display-field-start"]'),
        show_end_date_text    : () => cy.get('button[data-testid="date-display-field-end"]'),
        occupancy_config      : () =>  cy.get('button[data-testid="occupancy-config"]'),
        reduce_the_number     : () => cy.get(':nth-child(1) > .bfb38641b0 > .e91c91fa93'),
        increase_the_number   : () => cy.get(':nth-child(2) > .bfb38641b0 > .bb803d8689'),
        select_age            : () => cy.get('div[data-testid="kids-ages-select"]'),
        number_of_years       : () => cy.get('select').eq(0),
        done_btn              : () => cy.get('button[class="a83ed08757 c21c56c305 bf0537ecb5 ab98298258 d2529514af af7297d90d c213355c26"]'),
        search_btn            : () => cy.get('.d12ff5f5bf > .a83ed08757'),
        site_navigation       : () => cy.get('div[data-testid="breadcrumbs"]'),
        h1_header             : () => cy.get('h1[class="f6431b446c d5f78961c3"]')
    }
 

    login_or_register_window(){
        this.elements.pop_up_w().click();
    }
 

    destination(place_name){
        this.elements.place_of_arrival().focus().type(place_name);
    }


    search_by_date(){
        this.elements.search_box_dates().click();
    }


    select_start_date(){
        this.elements.start_date().click();
    }


    select_end_date(){
        this.elements.end_date().click();
    }


    check_start_date(text){
        this.elements.show_start_date_text().should('have.text', text);
    }


    check_end_date(text){ 
        this.elements.show_end_date_text().should('have.text', text);
    }


    filter_by_categories(){  
        this.elements.occupancy_config().click();
    }


    number_of_adults(){
        this.elements.reduce_the_number().click();
    }


    number_of_kids(){
        this.elements.increase_the_number().click();
    }


    kids_ages_select(){
        this.elements.select_age().click();
    }


    select_number_of_years(number_years){
        this.elements.number_of_years().select(number_years);
    }


    done_button(){
        this.elements.done_btn().click();
    }


    search_button(){
        this.elements.search_btn().click();
    }


    breadcrumbs(place){
        this.elements.site_navigation().contains(place);
    }


    top_level_header(text){
        this.elements.h1_header().contains(text);
    }
}
