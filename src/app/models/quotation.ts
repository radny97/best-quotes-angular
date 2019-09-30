export interface Quotation {
  author: string;
  quotation: string;
  votes: number;
}

export interface QuotationEvent {
  quotation: Quotation;
  value: number;
}
