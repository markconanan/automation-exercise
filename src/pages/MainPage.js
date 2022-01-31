//contains functions and locators for MainPage

class MainPage {

    checkSubscriptionPrompt() {
        $('[data-testid="SubscriptionPrompt-true"]').waitForExist({ timeout: 10000 })
        browser.saveScreenshot("./screenshots/checksubscriptionprompt.png")
        return $('[data-testid="SubscriptionPrompt-true"]').isExisting()
    }

    scrollToBottom() {
        $('div > ul > li.A4Gsp').waitForDisplayed({ timeout: 10000 })
        $('div > ul > li.A4Gsp').scrollIntoView()
        return this;
    }

    checkSubscriptionPromptDisappeared() {
        $('[data-testid="SubscriptionPrompt-false"]').waitForExist({ timeout: 10000 })
        browser.saveScreenshot("./screenshots/checksubscriptionpromptdisappeared.png")
        return $('[data-testid="SubscriptionPrompt-false"]').isExisting()
    }

}

module.exports = new MainPage()