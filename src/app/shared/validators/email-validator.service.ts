import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root'})
export class EmailValidatorService implements AsyncValidator {

  // validate(control: AbstractControl<any, any>): Observable<ValidationErrors | null> {
  //   const email = control.value;
  //   console.log({email});
  //   return of({
  //     emailTaken: true
  //   }).pipe(delay(3000))
  // }
  validate(control: AbstractControl<any, any>): Observable<ValidationErrors | null> {
    const email = control.value;

    const httpCallObservable = new Observable<ValidationErrors | null>((subscriber) => {
      console.log({ email });

      if (email === 'dhernant@contratista.epm.co') {
        subscriber.next({ emailIsTaken: true });
        subscriber.complete();
      }
      subscriber.next(null);
      subscriber.complete();
    })

    return httpCallObservable;
  }

}
