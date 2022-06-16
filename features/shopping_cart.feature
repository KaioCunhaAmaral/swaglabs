@test @shopping_cart
Feature: Log into the application
  As a standard user
  I can add items to the shopping car
  So that I can review the cost of all of them

Background: Be logged in
Given that I perform login with the user "standard_user" and password "secret_sauce"

@check_prices
  Scenario: Review cost
    Given that I add all items to the shopping cart
    When I click in the shopping cart
    Then the system must display the total cost of the selected products
