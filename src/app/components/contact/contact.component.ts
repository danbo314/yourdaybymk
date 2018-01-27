import { Component, OnInit } from '@angular/core';
import { EmailService } from 'app/services/email.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less'],
  providers: [EmailService]
})
export class ContactComponent implements OnInit {

  firstName;
  lastName;
  email;
  message;
  source = 'Facebook';
  showSuccess = false;

  constructor(private emailService: EmailService) { }

  ngOnInit() {
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
