import { Component, EventEmitter, Output } from '@angular/core';
import { Quotation } from '../models/quotation';

@Component({
  selector: 'app-quotation-form',
  templateUrl: './quotation-form.component.html',
  styleUrls: ['./quotation-form.component.css'],
})
export class QuotationFormComponent {
  @Output() newQuotation = new EventEmitter<Quotation>();
  isFormVisible = false;
  quotation: Quotation = { author: '', quotation: '', votes: 0 };

  addQuotation() {
    this.newQuotation.emit(this.quotation);
    this.quotation = { author: '', quotation: '', votes: 0 };
  }

  switchFormVisibility(): void {
    this.isFormVisible = !this.isFormVisible;
  }
}
