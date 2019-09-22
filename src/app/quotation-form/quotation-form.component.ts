import { Component, EventEmitter, Output } from '@angular/core';
import { Quotation } from '../models/quotation';

@Component({
  selector: 'app-quotation-form',
  templateUrl: './quotation-form.component.html',
  styleUrls: ['./quotation-form.component.css'],
})
export class QuotationFormComponent {
  // nowe pole typu EventEmitter
  @Output() newQuotation = new EventEmitter<Quotation>();
  isFormVisible = true;
  quotation: Quotation = { author: '', quotation: '', votes: 0 };

  addQuotation() {
    // emitujemy nowy event z cytatem
    this.newQuotation.emit(this.quotation);
    this.quotation = { author: '', quotation: '', votes: 0 };
  }

  switchFormVisibility(): void {
    this.isFormVisible = !this.isFormVisible;
  }
}
