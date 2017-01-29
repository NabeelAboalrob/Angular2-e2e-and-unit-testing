import { Injectable , Inject }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Posts } from './Posts';
// Statics
import 'rxjs/add/observable/throw';
// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class autoFill{
    private baseUrl = 'https://jsonplaceholder.typicode.com/posts';
		private headers = new Headers({'Content-Type': 'application/json'});

    constructor(@Inject(Http) private http: Http) { }

		private extractData(res: Response) {
		  let body = res.json();
		  return body || { };

		}

		getAllItems(): Observable<Posts[]> {
			return this.http.get(this.baseUrl)
						           .map(this.extractData)
						           .catch(this.handleError);
		}

		private handleError (error: Response | any) {
			let errMsg: string;
			
			if (error instanceof Response) {
				const body = error.json() || '';
				const err = body.error || JSON.stringify(body);
			  errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
			
			} else {
				errMsg = error.message ? error.message : error.toString();
				
				}
			console.error(errMsg);
			return Observable.throw(errMsg);
			
		}							
}
