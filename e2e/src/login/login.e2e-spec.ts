import { LoginPage } from './login.po';
import { element, by } from 'protractor';

describe('Login Page', () => {
  let page: LoginPage;

  beforeEach(() => {
    page = new LoginPage();
    page.navigateTo();
  });

  it('should navigate to Login page and read h2 Element which has value Login', () => {
    expect(page.getLoginTitleText()).toEqual('Login');
  });

  it('Login form should be valid', () => {
    page.getUserNameTextBox().sendKeys('ISingh2020');
    page.getPasswordTextBox().sendKeys('Password');
    // let form = page.getForm().getAttribute('class');
    // expect(form).toContain('ng-valid');
   });

  // it('should get h2', () => {
  //   var welcomeMessage = element.all(by.tagName('h2'));
  //   expect(welcomeMessage.get(1).getText()).toEqual('Register');
  // });

});
