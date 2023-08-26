import {ChangeDetectionStrategy, Component, ElementRef, ViewChild} from '@angular/core';
import { FormBuilder, Validators} from "@angular/forms";
import {SubmitValidatedFeedbackFormService} from "../../services/submit-validated-feedback-form.service";

@Component({
  selector: 'app-footer',
  templateUrl: './app-footer.component.html',
  styleUrls: ['./app-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppFooterComponent {
  @ViewChild('modal',{static:false}) el:ElementRef| undefined
  isSubmitted = false
  modal:boolean|undefined
  contactForm:any;
  constructor(public fb:FormBuilder,private submitForm:SubmitValidatedFeedbackFormService) {
    this.contactForm = fb.group({
      email:['',Validators.required],
      name:['',Validators.required],
      message:['',Validators.required],
    })
  }
  formVisibility: boolean = false



  onSubmit() {
    this.submitForm.SubmitForm(this.contactForm)
  }



  showForms() {
    this.formVisibility = !this.formVisibility
  }
  showModal(){
    this.modal = true;
  }
}
