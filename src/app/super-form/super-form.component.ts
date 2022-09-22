import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl, Validators, ValidatorFn} from "@angular/forms";

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
      lastName: new FormControl('', Validators.compose([Validators.pattern('Ivanov'), Validators.required]))
    });
  }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.ivanForm);
  }
}
