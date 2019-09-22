import { Component, Input } from '@angular/core';
import { Quotation } from '../models/quotation';

@Component({
  selector: 'app-quotes-ranking',
  templateUrl: './quotes-ranking.component.html',
  styleUrls: ['./quotes-ranking.component.css'],
})
export class QuotesRankingComponent {
  @Input() quotes: Quotation[];
}
