class HomePage
{

clickHomeLink()
{
    return cy.get('.navbar > .navbar-nav > :nth-child(1) > .nav-link')
}

enterName()
{
    return cy.get('input[name="name"]:nth-child(2)')
}

enterEmail()
{
    return cy.get(':nth-child(2) > .form-control')
}

enterPassword()
{
    return cy.get('#exampleInputPassword1')
}

getTwoWayDataBinding()
{
    return cy.get(':nth-child(4) > .ng-untouched')
}

selectGender()
{
    return cy.get('select')
}

verifyMinLength()
{
    return cy.get('input[name="name"]:nth-child(2)')
}

verifyStudentCheckbox()
{
    return cy.get('#inlineRadio1')
}

clickShopButton()
{
    return cy.get(':nth-child(2) > .nav-link')
}

}

export default HomePage