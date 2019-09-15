import { Component } from '@angular/core';
// nie zapomnijmy o dwóch importach
import { Quotation } from './models/quotation';
import { QUOTES } from './models/data-base';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // nowe pole reprezentującę listę cytatów
  quotes: Quotation[] = QUOTES;
  // Pole do ukrywania i pokazywania formularza
  isFormVisible = false;
  // pole quotation reprezentuje pojedynczy cytat
  quotation: Quotation = { author: '', quotation: '', votes: 0 };

  // dodajemy sortowanie
  sortByBestVotes(): Quotation[] {
    return [...this.quotes].sort((a, b) => b.votes - a.votes);
  }

  // metoda obsługuje głosowanie na konkretny cytat
  addVote(quotation: Quotation, value: number) {
    quotation.votes = quotation.votes ? quotation.votes : 0;
    quotation.votes += value;
  }

  // przełącza pole klasy true / false
  switchFormVisibility(): void {
    this.isFormVisible = !this.isFormVisible;
  }

  // dodaje cytat na początek listy i resetuje pole quotation
  addQuotation() {
    this.quotes.unshift(this.quotation);
    this.quotation = { author: '', quotation: '', votes: 0 };
  }
}
