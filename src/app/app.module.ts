import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ColorComponent} from './color/color.component';
import {FormBoardComponent} from './form-board/form-board.component';
import {FavoriteDirective} from "./directive/favorite.directive";
import {CustomPipe} from "./Pipes/custom.pipe";
import {ReactiveFormsModule} from "@angular/forms";
import {SuperFormComponent} from './super-form/super-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    FormBoardComponent,
    FavoriteDirective,
    CustomPipe,
    SuperFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
