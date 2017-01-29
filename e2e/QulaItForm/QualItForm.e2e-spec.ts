import { qualItFormPage } from './QualItFormPage.po';
import { previewDataPage } from '../previewData/previewDataPage.po';
import { browser, element, by } from 'protractor';

describe('Qual IT Form', function() {
  let formPage: qualItFormPage;
  let previewPage: previewDataPage;

  var name = "";
  var experienceYears="";
  var speciality="";

  beforeEach(() => {
    formPage = new qualItFormPage();
    previewPage = new previewDataPage();
   
    formPage.navigateTo();

  });
	
  it('should have title saying Qual IT - Interview Pilot Project', () => {
    expect(formPage.getFormTitleText()).toEqual('Qual IT - Interview Pilot Project');
  
  });
 
  it('should have disabled submit button before filled', () => {
		expect(formPage.submitButton().isEnabled()).toBe(false);

  });

  it('should show error on name less than 4 letters', () => {
    name = "abc";
    experienceYears="5";
    speciality="Quality Assurance";
    
    //fill page with empty values
    formPage.fillForm(name, experienceYears, speciality);
    
    //the button should be disabled
    expect(formPage.submitButton().isEnabled()).toBe(false);
    
    //asserting errors apperance
    expect(formPage.nameLengthErr().isDisplayed()).toBe(true);
    expect(formPage.experienceYearsRequiredErr().isPresent()).toBe(false);
    expect(formPage.specialityRequiredErr().isPresent()).toBe(false);
    
    //asserting errors text
    expect(formPage.nameLengthErr().getText()).toBe('Name must be at least 4 characters long.');
    
    });

  it('should show required error empty name', () => {
    name = "";
    experienceYears="5";
    speciality="Quality Assurance";
    
    //fill page with empty values
    formPage.fillForm(name, experienceYears, speciality);
    
    //the button should be disabled
    expect(formPage.submitButton().isEnabled()).toBe(false);
    
    //asserting errors apperance
    expect(formPage.nameRequiredErr().isDisplayed()).toBe(true);
    
    //asserting errors text
    expect(formPage.nameRequiredErr().getText()).toBe('Name is required');
    
    });

  it('should trim large name', () => {
    name = "Hello, my name is Nabeel Aboalrob";
    experienceYears="5";
    speciality="Quality Assurance";
    
    //fill page with empty values
    formPage.fillForm(name, experienceYears, speciality);
    
    //asserting trimmed name
    expect(formPage.nameInputText()).toBe('Hello, my name is Nabeel');
    
    });

  it('should show required error empty experience years', () => {
    name = "Nabeel";
    experienceYears="";
    speciality="Quality Assurance";
    
    //fill page with empty values
    formPage.fillForm(name, experienceYears, speciality);
    
    //the button should be disabled
    expect(formPage.submitButton().isEnabled()).toBe(false);
    
    //asserting errors apperance
    expect(formPage.experienceYearsRequiredErr().isDisplayed()).toBe(true);
    
    //asserting errors text
    expect(formPage.experienceYearsRequiredErr().getText()).toBe('Years of experience is required');
    
    });

  it('should show error on speciality less than 2 letters', () => {
    name = "Nabeel";
    experienceYears="5";
    speciality="Q";
    
    //fill page with empty values
    formPage.fillForm(name, experienceYears, speciality);
    
    //the button should be disabled
    expect(formPage.submitButton().isEnabled()).toBe(false);
    
    //asserting errors apperance
    expect(formPage.specialityLengthErr().isDisplayed()).toBe(true);
    expect(formPage.experienceYearsRequiredErr().isPresent()).toBe(false);
    
    //asserting errors text
    expect(formPage.specialityLengthErr().getText()).toBe('Speciality must be at least 2 characters long.');
    
  });

  it('should have submit button enabled after filling the form with valid inputs', () => {
		name = "Nabeel";
		experienceYears="5";
  	speciality="Quality Assurance";

		formPage.fillForm(name, experienceYears, speciality);
		expect(formPage.submitButton().isEnabled()).toBe(true);

	  });

  it('should redirect to correct route after clicking submit', () => {
    name = "Nabeel";
    experienceYears="5";
    speciality="QualityAssurance";

    formPage.fillForm(name, experienceYears, speciality);
    formPage.clickSubmit();

    expect(browser.getCurrentUrl()).toContain('previewData?name='+ name +
                                              '&experienceYears='+ experienceYears +
                                              '&speciality=' + speciality + '');
  });

  it('should show data after submit', () => {
  	name = "Nabeel";
		experienceYears="5";
  	speciality="Quality Assurance";
    let items = previewPage.qualItDataTable().all(by.tagName('tr'));

		formPage.fillForm(name, experienceYears, speciality);
		formPage.clickSubmit();
		
    //assert if the table is shown
		expect(previewPage.qualItDataTable().isDisplayed()).toBe(true);
    
    //the table rows should be 2 one row for the header and the other for the data
    expect(items.count()).toBe(2);
    
    //asserting tables data
    expect(previewPage.nameText()).toBe(name);
    expect(previewPage.experienceYearsText()).toBe(experienceYears);
    expect(previewPage.specialityText()).toBe(speciality);

  });

  it('should show new data after submit again with different data', () => {
    name = "Nabeel";
    experienceYears="5";
    speciality="Quality Assurance";

    formPage.fillForm(name, experienceYears, speciality);
    formPage.clickSubmit();
    
    //assert if the table is shown
    expect(previewPage.qualItDataTable().isDisplayed()).toBe(true);
    formPage.clearForm();
    
    //filling the form with the new data
    name = "Nabeel2";
    experienceYears="55";
    speciality="Quality Assurance2";

    formPage.fillForm(name, experienceYears, speciality);
    formPage.clickSubmit();

    //asserting tables data
    expect(previewPage.nameText()).toBe(name);
    expect(previewPage.experienceYearsText()).toBe(experienceYears);
    expect(previewPage.specialityText()).toBe(speciality);

  });

});
