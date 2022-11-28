Feature: Bootcamp E2E

Background: 
Given Open the home page
When Close the promo banner if it appears


Scenario: Search bar
Given Entry the word "Windows" in the search bar (top middle)
When Click the search
Then Check that at least one item appears

Scenario: Internet shop logo button
Given Open "Today's Best Deals" tab
When Click on the Internet shop logo (top right corner)
Then Check that the main page opened