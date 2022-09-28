import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-super-form',
  templateUrl: './super-form.component.html',
  styleUrls: ['./super-form.component.scss']
})
export class SuperFormComponent implements OnInit {

  ivanForm: FormGroup;
  status = '';

  constructor() {
    this.ivanForm = new FormGroup({
      firstName: new FormControl('', Validators.compose([Validators.pattern('Ivan'), Validators.required])),
      lastName: new FormControl('', Validators.compose([Validators.pattern('Ivanov'), Validators.required])),
      address: new FormGroup({
        country: new FormControl('', [], this.asyncValidator),
        city: new FormControl('', this.minskValidator)
      })
    });
  }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.ivanForm);
  }

  clearTheForm() {
    this.ivanForm.patchValue({
      firstName: '',
      lastName: '',
      address: {country: '', city: ''}
    })
  }

  minskValidator(control: AbstractControl): ValidationErrors | null {
    if (control.parent?.get('country')?.value === 'BLR' && control.value !== 'Minsk') {
      return {
        wrong: true
      }
    }
    return null;
  }

  asyncValidator(control: AbstractControl): Promise<any> | Observable<any> {
    return new Promise(resolve => {
      setTimeout(() => {
        if (control.touched && control.value !== 'BLR') {
          resolve({notBelarus: true})
        } else {
          resolve(null)
        }
      }, 1500)
    })
  }

  getColor(): string {
    const randomValue = Math.random();
    if (randomValue > 0.5) {
      this.status = 'green';
    }
    else this.status = 'red';
    return this.status;
  }
}
