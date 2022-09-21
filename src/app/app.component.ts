import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedAnimal: string;
  animals: [{ name: string }, { name: string }];

  constructor() {
    this.selectedAnimal = '';
    this.animals = [{name: "dog"}, {name: "cat"}];
  }

  selectAnimal(event: MouseEvent, animal: any) {
    this.selectedAnimal = animal.name;
    event.preventDefault();
  }
}
