import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateModule} from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  imports: [FormsModule, TranslateModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  http = inject(HttpClient);

  contactData = {
    name: '',
    email: '',
    message: '',
    checkbox: false,
  };
  messageSent = false;
  showSuccessMessage = false;
  post = {
    endPoint: 'https://alexeremie.com/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit(ngForm: NgForm) {
    this.showSuccessMessage = false;
    if (ngForm.submitted && ngForm.form.valid) {
      this.http
        .post(this.post.endPoint, this.post.body(this.contactData))
        .subscribe({
          next: (response) => {
            ngForm.resetForm();
            this.messageSent = true;
            this.showSuccessMessage = true;
            
            setTimeout(() => {
              this.showSuccessMessage = false;
            }, 3000);

            setTimeout(() => {
              this.messageSent = false;
            }, 5000);
          },
          error: (error) => {
            console.error('Error submitting request: ', error);
          },
        });
    }
  }
}
