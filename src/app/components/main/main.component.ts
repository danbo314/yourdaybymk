import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgForm } from '@angular/forms';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less'],
  providers: [EmailService]
})
export class HomeComponent {
    firstName;
    lastName;
    email;
    message;
    source = 'Facebook';
    showSuccess = false;

    // TODO follow up on removing workaround
    // https://github.com/angular/angular/issues/6595
    constructor(router: Router, private emailService: EmailService) {
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

    sendContact(contactForm: NgForm) {
        if (!contactForm.invalid) {
            this.emailService.send({
                'First Name': this.firstName,
                'Last Name': this.lastName,
                'email': this.email,
                '_subject': `New Inquiry from ${this.firstName + ' ' + this.lastName}`,
                'Message': this.message,
                'How did you hear about us?': this.source
            }).then(() => {
                this.showSuccess = true;
                setTimeout(() => {
                    this.showSuccess = false;
                    this.firstName = null;
                    this.lastName = null;
                    this.email = null;
                    this.message = null;
                    this.source = 'Facebook';
                }, 3000)
            }).catch((error) => alert(error));
        }
    }
}
