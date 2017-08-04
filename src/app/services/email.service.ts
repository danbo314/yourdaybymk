import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class EmailService {
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http) { }

    send(param: object) {
        return this.http.post('https://formspree.io/marykoa@gmail.com', param, { headers: this.headers }).toPromise();
    }
}
