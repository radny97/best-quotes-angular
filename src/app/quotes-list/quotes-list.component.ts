import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Quotation, QuotationEvent } from '../models/quotation';

@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.css'],
})
export class QuotesListComponent {
  @Input() quotes: Quotation[];
  @Output() vote = new EventEmitter<QuotationEvent>();

  addVote(quotation: Quotation, value: number) {
    this.vote.emit({ quotation, value });
  }
}
