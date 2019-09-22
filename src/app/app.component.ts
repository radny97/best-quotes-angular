import { Component } from '@angular/core';
import { Quotation } from './models/quotation';
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

  addVote(quotation: Quotation, value: number) {
    quotation.votes = quotation.votes ? quotation.votes : 0;
    quotation.votes += value;
  }

  onNewQuotation(quotation: Quotation) {
    this.quotes.unshift(quotation);
  }
}
