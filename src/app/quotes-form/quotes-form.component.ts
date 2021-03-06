import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Quote} from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quotes-form.component.html',
  styleUrls: ['./quotes-form.component.css']
})
export class QuotesFormComponent implements OnInit {

  newQuote = new Quote(0, '', '', '', 0, 0, new Date());

  @Output() addQuote = new EventEmitter<Quote>();
  onSubmit( ) {
    this.addQuote.emit(this.newQuote);
    this.newQuote = new Quote(0, '', '', '', 0, 0, new Date());
  }
  constructor() { }

  ngOnInit() {
  }

}
