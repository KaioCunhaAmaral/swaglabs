@test @check_products
Feature: See products on page
  As a standard user
    I can review all items
    So that I can choose the ones I want

Background: Be logged in
Given that I perform login with the user "standard_user" and password "secret_sauce"

@check_products_success
  Scenario: Review items
    When I scroll through the inventory page
    Then I should see all available products