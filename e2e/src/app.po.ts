import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/#/');
  }

  // getWelcomeMessageText() {
  //   return element(by.css('a')).getText();
  // }
}
