const { onDatepickerPage } = require("../support/page_objects/datepickerPage")
const { onFormLayoutsPage } = require("../support/page_objects/formLayoutsPage")
const { onNavigationPage, navigateTo } = require("../support/page_objects/navigatioPage")
const { onSmartTablePage } = require("../support/page_objects/smartTablePage")

describe ('Test with page objects', () => {

    beforeEach('opens application', () =>{
        cy.openHomePage()
    })

    it('verify navigation across pages', () => {
        navigateTo.formLayoutsPage()
        navigateTo.datepickerPage()
        navigateTo.toastrPage()
        navigateTo.smartTablePage()
        navigateTo.tooltipPage()
    })

    it(' should submit Inline and Basic form and select tomorrow date in the calendar', () => {
        navigateTo.formLayoutsPage()
        onFormLayoutsPage.submitInlineFormWithNameAndEmail('Test Testsmith', 'test@test.com')
        onFormLayoutsPage.submitBasicFormWithEmailAndPassword('test@test.com', 'test123')
        navigateTo.datepickerPage()
        onDatepickerPage.selectTomorrowDateInCalendar(1)
        onDatepickerPage.selectDatepickerWithRangeFromToday(1, 5)
        navigateTo.smartTablePage()
        onSmartTablePage.addNewUser('McLovin', 'McLovinson', 'McLovin69')
        onSmartTablePage.changeUserAge('McLovin', 25)
        onSmartTablePage.searchByAge()
        onSmartTablePage.deleteRowByIndex(1)
    })

    
})