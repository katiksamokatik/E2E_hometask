Feature: Bootcamp E2E

Background: 
Given User is on the home page
When User closes the promo banner

Scenario: Search bar
Given User enters Windows in the search bar
When User clicks the search button
Then At least one item appears

Scenario: Internet shop logo button
Given User opens Today's Best Deals tab
When User clicks on the Internet shop logo
Then User is on the main page