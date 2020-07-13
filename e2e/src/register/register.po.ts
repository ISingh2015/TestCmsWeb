import { browser, by, element } from 'protractor';

export class RegisterPage {
  navigateTo() {
    return browser.get('/#/register');
  }

  getRegisterTitleText() {
    return element(by.css('h2')).getText();
  }
}
