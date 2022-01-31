const mainPage = require("../pages/MainPage");

//tests are written in such a way that each line can be considered a test step or a test validation
describe('Scenario Tests', () => {

    it('TC_001 - Verify Subscription Prompt', () => {
        mainPage.checkSubscriptionPrompt().should.equal(true)
        mainPage.scrollToBottom()
        mainPage.checkSubscriptionPromptDisappeared().should.equal(true)
    });

});

