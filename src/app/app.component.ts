import { Component } from '@angular/core';
import { Quotation, QuotationEvent } from './models/quotation';
import { QUOTES } from './models/data-base';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  quotes: Quotation[] = QUOTES;

  sortByBestVotes(): Quotation[] {
    return [...this.quotes].sort((a, b) => b.votes - a.votes);
  }

  onNewQuotation(quotation: Quotation) {
    this.quotes.unshift(quotation);
  }

  // Nowa metoda do obsługi głosowania
  onVote(event: QuotationEvent) {
    event.quotation.votes = event.quotation.votes ? event.quotation.votes : 0;
    event.quotation.votes += event.value;
  }
}
