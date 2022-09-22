import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
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

  ngOnInit(): void {
    alert("component initiated")
  }

  ngOnDestroy(): void {
    alert("component destroyed")
  }

    printItemToConsole(newItem: string) {
        console.log(newItem);
    }
}
