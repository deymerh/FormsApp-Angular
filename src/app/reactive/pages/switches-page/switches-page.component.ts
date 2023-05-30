import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './switches-page.component.html',
})
export class SwitchesPageComponent implements OnInit {

  public person = {
    gender: 'M',
    wantNotifications: false,
    termsConditions: false
  }

  public myForm: FormGroup = this.formBuilder.group({
    gender: ['F', [Validators.required]],
    wantNotifications: [true, [Validators.required]],
    termsConditions: [false, [Validators.requiredTrue]],
  })

  constructor(private readonly formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.myForm.reset(this.person);
  }

  isValidField(field: string): boolean | null {
    return this.myForm.controls[field].errors
      && this.myForm.controls[field].touched;
  }

  onSaveData() {
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }
    const { termsConditions, ...restForm } = this.myForm.value;
    console.debug(restForm)
  }
}
