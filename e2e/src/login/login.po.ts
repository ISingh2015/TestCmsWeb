import { browser, by, element } from 'protractor';

export class LoginPage {
   navigateTo() {
    return browser.get('/#/login');
  }

  getForm() {
    return element(by.css('loginForm'));
  }

  getLoginTitleText() {
    return element(by.css('h2')).getText();
  }

  getUserNameTextBox () {
    return element(by.id('username'));
  }

  getPasswordTextBox () {
    return element(by.id('password'));
  }

}
