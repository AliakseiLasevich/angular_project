import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";

@Component({
  selector: 'app-super-form',
  templateUrl: './super-form.component.html',
  styleUrls: ['./super-form.component.scss']
})
export class SuperFormComponent implements OnInit {

  ivanForm: FormGroup;

  constructor() {
    this.ivanForm = new FormGroup({
      firstName: new FormControl('', Validators.compose([Validators.pattern('Ivan'), Validators.required])),
      lastName: new FormControl('', Validators.compose([Validators.pattern('Ivanov'), Validators.required])),
      address: new FormGroup({
        country:  new FormControl(''),
        city: new FormControl('',this.minskValidator)
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
}
