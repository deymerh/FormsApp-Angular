import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValitatorService } from '../../../shared/services/validator.service';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';

@Component({
  templateUrl: './register-page.component.html'
})
export class RegisterPageComponent {

  public myFormRegister: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required, Validators.pattern(this.valitatorService.firstNameAndLastnamePattern)]],
    email: ['', [Validators.required, Validators.pattern(this.valitatorService.emailPattern)], [this.emailValidatorService]],
    username: ['', [Validators.required, this.valitatorService.cantBeStrider]],
    password1: ['', [Validators.required, Validators.maxLength(6)]],
    password2: ['', [Validators.required]],
  }, {
    validators: [
      this.valitatorService.isFiledOneEqualFieldtwo('password1', 'password2')
    ]
  })

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly valitatorService: ValitatorService,
    private readonly emailValidatorService: EmailValidatorService
  ) { }

  isValidField(field: string) {
    return this.valitatorService.isValidField(this.myFormRegister, field)
  }

  onRegister() {
    if (this.myFormRegister.invalid) {
      this.myFormRegister.markAllAsTouched();
      return;
    }
    console.debug(this.myFormRegister)
  }
}
