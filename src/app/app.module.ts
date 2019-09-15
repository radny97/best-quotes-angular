import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; // dodajemy nowy import

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule, // dodajemy nowy moduł
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
