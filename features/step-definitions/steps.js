const { Given, When, Then } = require('@wdio/cucumber-framework');

Given("User is on the home page", async () => {
    await browser.url("https://www.newegg.com/");
});

When("User closes the promo banner", async () => {
    const promo = await $('.modal-body .modal-Website-img');
    try {
        await promo.waitForDisplayed({ timeout: 3000 });
        await $('.modal-content .close').click()
    }
    catch (error) {
        console.log("No pop-up")
    }
})

Given ("User enters {word} in the search bar", async (query) => {
    const input = await $('input[type="search"]');
    await input.setValue(query);
})

When ("User clicks the search button", async () => {
    const button = await $('.ico-search');
    await button.click();
})

Then ("At least one item appears", async () => {
    const result = await $$('.item-cell');
    const itemName = await $('.item-cell .item-info .item-title');
    await expect(result).toBeExisting();
    await expect(itemName).toHaveTextContaining('Windows');
}) 


Given ("User opens Today's Best Deals tab", async () => {
    await $('#trendingBanner_720202').click()
})

When ("User clicks on the Internet shop logo", async () => {
    await $('.header2021-logo-img').click()
})

Then ("User is on the main page", async () => {
    await expect(browser).toHaveUrl("https://www.newegg.com/")
}) 