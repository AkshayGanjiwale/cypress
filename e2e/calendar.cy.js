describe ("calendar automation", ()=>{

    it("Automating calander", ()=>{

        const monthNumber = "6"
        const date = "15"
        const year = "2024"
        const expectedList = [monthNumber,date,year]


        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers")
        cy.get(".react-date-picker__inputGroup").click()
        cy.get(".react-calendar__navigation__label").dblclick()
        cy.contains("button", year).click()
        cy.get(".react-calendar__year-view__months__month").eq(Number(monthNumber) - 1).click()
        cy.contains("abbr",date).click()

        // asserting the selected date
        cy.get(".react-date-picker__inputGroup__input").each(($el, index)=>{
            
            cy.wrap($el).invoke('val').should('eq',expectedList[index])
        })
    })
})