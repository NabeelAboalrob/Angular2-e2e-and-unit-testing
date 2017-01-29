import { browser, element, by } from 'protractor';

//Page element selectors
var submitButton = element(by.css('.PilotProjForm button'));
var formTitle = element(by.css('.qualFormTitle'));
var nameInput = element(by.id('fullNameInput'));
var experienceYearsInput = element(by.id('experienceYearsInput'));
var specialityInput = element(by.id('specialityInput'));
var nameRequiredErr = element(by.css('.nameRequiredErr'));
var nameLengthErr = element(by.css('.nameLengthErr'));
var specialityRequiredErr = element(by.css('.specialityRequiredErr'));
var specialityLengthErr = element(by.className('specialityLengthErr'));
var experienceYearsRequiredErr = element(by.css('.experienceYearsRequiredErr'));

export class qualItFormPage {
   
  navigateTo() {
    return browser.get('/');
  }

  getFormTitleText() {
    return formTitle.getText();
  }

  nameInputValue(value){
  	return nameInput.sendKeys(value);
  }

  nameInputText(){
    return nameInput.getAttribute('ng-reflect-model');
  }

  nameInputSize(){
    return nameInput.getSize();
  }

  experienceYearsInputValue(value){
  	return experienceYearsInput.sendKeys(value);
  }

  specialityInputValue(value){
  	return specialityInput.sendKeys(value);
  }

  clickSubmit(){
  	return submitButton.click();
  }

  submitButton(){
  	return submitButton;
  }

  formTitle(){
    return formTitle;
  }

  experienceYearsRequiredErr(){
    return experienceYearsRequiredErr;
  }

  nameRequiredErr(){
    return nameRequiredErr;
  }

  nameLengthErr(){
    return nameLengthErr;
  }

  specialityRequiredErr(){
    return specialityRequiredErr;
  }
  
  specialityLengthErr(){
    return specialityLengthErr;
  }

  fillForm(name, experienceYears, speciality){
  	this.nameInputValue(name);
  	this.experienceYearsInputValue(experienceYears);
  	this.specialityInputValue(speciality);
  }

  clearForm(){
    nameInput.clear();
    experienceYearsInput.clear();
    specialityInput.clear();

  }
}
