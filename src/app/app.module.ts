import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorComponent } from './color/color.component';
import { FormBoardComponent } from './form-board/form-board.component';
import {FavoriteDirective} from "./directive/favorite.directive";
import {CustomPipe} from "./Pipes/custom.pipe";

@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    FormBoardComponent,
    FavoriteDirective,
    CustomPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
