import { RegisterPage } from './register.po';
import { element, by } from 'protractor';

describe('Register Page', () => {
  let page: RegisterPage;

  beforeEach(() => {
    page = new RegisterPage();
  });

  it('should navigate to Home page', () => {
    page.navigateTo();
    expect(page.getRegisterTitleText()).toEqual('Register');
  });


});
