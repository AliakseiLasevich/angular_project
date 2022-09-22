import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-form-board',
  templateUrl: './form-board.component.html',
  styleUrls: ['./form-board.component.scss']
})
export class FormBoardComponent {
  @Input() color: string;

  constructor() {
    this.color = ''
  }
}
