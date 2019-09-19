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
  isFormVisible = false;
  quotation: Quotation = { author: '', quotation: '', votes: 0 };

  sortByBestVotes(): Quotation[] {
    return [...this.quotes].sort((a, b) => b.votes - a.votes);
  }

  addVote(quotation: Quotation, value: number) {
    quotation.votes = quotation.votes ? quotation.votes : 0;
    quotation.votes += value;
  }

  switchFormVisibility(): void {
    this.isFormVisible = !this.isFormVisible;
  }

  addQuotation() {
    this.quotes.unshift(this.quotation);
    this.quotation = { author: '', quotation: '', votes: 0 };
  }
}
