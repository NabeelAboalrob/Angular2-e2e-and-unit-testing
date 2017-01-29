import { browser, element, by } from 'protractor';

//Page element selectors
var formTitle = element(by.css('.AutoFilledForm h2'));
var userIdInput = element(by.id('userIdInput'));
var idInput = element(by.id('idInput'));
var titleInput = element(by.id('titleInput'));
var bodyInput = element(by.id('bodyInput'));

export class autoFilledFormPage {
   
  navigateTo() {
    return browser.get('/');
  }

  getFormTitleText(){
    return formTitle.getText();
  }

  userIdInput(){
    return userIdInput;
  }

  idInput(){
    return idInput;
  }

  titleInput(){
    return titleInput;
  }

  bodyInput(){
    return bodyInput;
  }
}
