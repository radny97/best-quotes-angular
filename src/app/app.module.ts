import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { QuotesRankingComponent } from './quotes-ranking/quotes-ranking.component';
import { QuotationFormComponent } from './quotation-form/quotation-form.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, QuotesRankingComponent, QuotationFormComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
