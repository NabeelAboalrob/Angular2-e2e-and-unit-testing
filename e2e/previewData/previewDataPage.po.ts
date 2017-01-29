import { browser, element, by } from 'protractor';

//Page element selectors
var qualItDataTable = element(by.id('qualItDataTable'));
var nameText = element(by.css('#qualItDataTable > tbody > tr > td:nth-child(1)'));
var experienceYearsText = element(by.css('#qualItDataTable > tbody > tr > td:nth-child(2)'));
var specialityText = element(by.css('#qualItDataTable > tbody > tr > td:nth-child(3)'));
export class previewDataPage {

  qualItDataTable(){
  	return qualItDataTable;
  }

  nameText(){
    return nameText.getText();
  }
 
  experienceYearsText(){
    return experienceYearsText.getText();
  }
 
  specialityText(){
    return specialityText.getText();
  }
}
