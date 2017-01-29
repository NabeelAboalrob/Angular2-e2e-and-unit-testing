/* tslint:disable:no-unused-variable */
import { TestBed, getTestBed, async, inject } from '@angular/core/testing';
import {
  BaseRequestOptions, Response, HttpModule, 
  Http, XHRBackend, ResponseOptions
} from '@angular/http';

import { autoFillComponent }           from './autoFill.component';
import { autoFill }                    from './autoFill.service';
import { MockBackend, MockConnection } from '@angular/http/testing';

describe('auto Fill Component', () => {
  let mockBackend: MockBackend;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
   providers: [
        autoFill,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          deps: [MockBackend, BaseRequestOptions],
          useFactory:
            (backend: XHRBackend, defaultOptions: BaseRequestOptions) => {
              return new Http(backend, defaultOptions);
            }
       }
      ],
      imports: [
        HttpModule
      ]
    });
    mockBackend = getTestBed().get(MockBackend);
  }));

  it('should get one post',

    async(inject([autoFill], (autoFill) => {
      mockBackend.connections.subscribe(
        (connection: MockConnection) => {
          connection.mockRespond(new Response(
            new ResponseOptions({
                body: [
                  {
                    userId: 1,
                    id: 1,
                    title: 'TestTitle',
                    body: 'TestBody'
                  }]
              }
            )));
        });

      //creating a new instance of the component
      var autoFillComponents = new autoFillComponent(autoFill);
      //calling component get users function
      autoFillComponents.getPosts();
      //asserting of the component retrieved the injected data
      expect(autoFillComponents.UserID).toBe(1);
      expect(autoFillComponents.ID).toBe(1);
      expect(autoFillComponents.Title).toBe('TestTitle');
      expect(autoFillComponents.Body).toBe('TestBody');

    })));
  
it('should be truthy',

    async(inject([autoFill], (autoFill) => {
      mockBackend.connections.subscribe(
        (connection: MockConnection) => {
          connection.mockRespond(new Response(
            new ResponseOptions({
                body: [
                  {
                    userId: 1,
                    id: 1,
                    title: 'TestTitle',
                    body: 'TestBody'
                  }]
              }
            )));
        });

      //creating a new instance of the component
      var autoFillComponents = new autoFillComponent(autoFill);
      //calling component get users function
      expect(autoFillComponents).toBeTruthy();

    })));


});  
