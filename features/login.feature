@test @login
Feature: Log into the application
  As a user 
  I want to login in
  So that I can access the online shop

@login_success
  Scenario: Perform login
    Given I fill the field Username with "standard_user"
    And I fill the field Password with "secret_sauce"
    When I click in LOGIN
    Then I should see the Products on the page