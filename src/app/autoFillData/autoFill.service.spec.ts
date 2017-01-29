import { TestBed, getTestBed, async, inject } from '@angular/core/testing';
import {
  BaseRequestOptions,Response, HttpModule, 
  Http, XHRBackend, ResponseOptions
} from '@angular/http';

import { autoFill }                    from './autoFill.service';
import { MockBackend, MockConnection } from '@angular/http/testing';

describe('auto Fill Service', () => {
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

  it('should get one user',
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

      autoFill.getAllItems().subscribe(
        (data) => {
          expect(data.length).toBe(1);
          expect(data[0].userId).toBe(1);
          expect(data[0].id).toBe(1);
          expect(data[0].title).toBe('TestTitle');
          expect(data[0].body).toBe('TestBody');
      });
    })));


});  
