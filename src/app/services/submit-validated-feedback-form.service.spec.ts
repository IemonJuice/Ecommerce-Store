import { TestBed } from '@angular/core/testing';

import { SubmitValidatedFeedbackFormService } from './submit-validated-feedback-form.service';

describe('SubmitValidatedFeedbackFormService', () => {
  let service: SubmitValidatedFeedbackFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubmitValidatedFeedbackFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
