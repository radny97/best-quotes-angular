import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Quotation } from '../models/quotation';

@Component({
  selector: 'app-quote-card',
  templateUrl: './quote-card.component.html',
  styleUrls: ['./quote-card.component.css']
})
export class QuoteCardComponent {
  @Input() quotes: Quotation[];
  @Output() vote = new EventEmitter<QuotationEvent>();

  addVote(quotation: Quotation, value: number){
    this.vote.emit({quotation,value});
  }
}

export interface QuotationEvent {
  quotation: Quotation;
  value: number;
}
