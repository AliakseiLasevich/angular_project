import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-form-board',
  templateUrl: './form-board.component.html',
  styleUrls: ['./form-board.component.scss']
})
export class FormBoardComponent {
  @Input() color: string;
  @Output() newItemEvent = new EventEmitter<string>();
  countries = ['Belarus', 'Poland', 'USA']

  constructor() {
    this.color = ''
  }

  produceEvent(value: string) {
    this.newItemEvent.emit(value);
  }
}
