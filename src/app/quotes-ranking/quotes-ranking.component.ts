// nowy import Input
import { Component, Input } from '@angular/core';
// nowy import
import { Quotation } from '../models/quotation';

@Component({
  selector: 'app-quotes-ranking',
  templateUrl: './quotes-ranking.component.html',
  styleUrls: ['./quotes-ranking.component.css'],
})
export class QuotesRankingComponent {
  // nowe pole w klasie
  // Dekoratora @Input
  @Input() quotes: Quotation[];
}
