import {Component, OnInit} from '@angular/core';
import {repeat} from "rxjs";

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {

  private _color: string;
  num: number = 0;
  colors: string[] = ['black', 'grey', 'white'];


  get color(): string {
    return this._color;
  }

  set color(value: string) {
    this._color = value;
  }

  constructor() {
    this._color = '';
  }

  ngOnInit(): void {
  this.switchColorFiveTimes()
  }

  switchColorFiveTimes = () => {
    if (++this.num > 5) return;
    this.color = this.colors[this.num % 3];
    setTimeout(this.switchColorFiveTimes, 2000);
  };

}
