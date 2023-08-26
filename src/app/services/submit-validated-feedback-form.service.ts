import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class SubmitValidatedFeedbackFormService {

  constructor(private db: AngularFirestore) {
  }

  SubmitForm(contactForm: any) {
    if (contactForm.valid) {
      this.db.collection('feedback').add(contactForm.value).then()
    }
  }
}
