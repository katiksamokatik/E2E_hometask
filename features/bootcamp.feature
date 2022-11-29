Feature: Bootcamp E2E

Background: 
Given I am on the home page
When I close the promo banner

Scenario: Search bar
Given I enter Windows in the search bar
When I click the search button
Then At least one item appears

Scenario: Internet shop logo button
Given I open Today's Best Deals tab
When I click on the Internet shop logo
Then I am on the main page