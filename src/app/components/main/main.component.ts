import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class HomeComponent {
    // TODO follow up on removing workaround
    // https://github.com/angular/angular/issues/6595
    constructor(router: Router) {
        router.events.subscribe(s => {
            if (s instanceof NavigationEnd) {
                const tree = router.parseUrl(router.url);
                if (tree.fragment) {
                // you can use DomAdapter
                const element = document.querySelector('#' + tree.fragment);
                if (element) { element.scrollIntoView(element); }
                }
            }
        });
    }
}
