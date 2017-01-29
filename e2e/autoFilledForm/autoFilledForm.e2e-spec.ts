import { autoFilledFormPage } from './autoFilledFormPage.po';
import { browser, element, by } from 'protractor';

describe('auto Filled form', function() {
  let autoFilledForm: autoFilledFormPage;

  beforeEach(() => {
    autoFilledForm = new autoFilledFormPage();   
    autoFilledForm.navigateTo();

  });

  it('should have title saying API Auto-filled form', () => {
    expect(autoFilledForm.getFormTitleText()).toEqual('API Auto-filled form');
  
  });  

  it('should have all read only inputs', () => {
    expect(autoFilledForm.userIdInput().getAttribute('readonly')).toEqual('true');  
    expect(autoFilledForm.idInput().getAttribute('readonly')).toEqual('true');  
    expect(autoFilledForm.titleInput().getAttribute('readonly')).toEqual('true');    
    expect(autoFilledForm.bodyInput().getAttribute('readonly')).toEqual('true');   

  });

  it('should be auto filled with API data', () => {
    var userID = '1';
    var id = '1';
    var title = 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit';
    var body = "quia et suscipit\n\
suscipit recusandae consequuntur expedita et cum\n\
reprehenderit molestiae ut ut quas totam\n\
nostrum rerum est autem sunt rem eveniet architecto";

    browser.waitForAngular();
    expect(autoFilledForm.userIdInput().getAttribute('ng-reflect-value')).toEqual(userID);  
    expect(autoFilledForm.idInput().getAttribute('ng-reflect-value')).toEqual(id);   
    expect(autoFilledForm.titleInput().getAttribute('ng-reflect-value')).toEqual(title);     
    expect(autoFilledForm.bodyInput().getText()).toEqual(body);   

  });

});
