import { Component, OnInit, Input } from '@angular/core';
import { StockServiceService } from '../stock-service.service';



@Component({
  selector: 'app-stocks',
  templateUrl: './stocks.component.html',
  styleUrls: ['./stocks.component.css']
})
export class StocksComponent implements OnInit {

  title ="List of STocks";
// @Input() stocks =["IN","OUT","COME","GO"];
stocks;
  constructor(stockService : StockServiceService ) { 
  this.stocks = stockService.getSTocks();

  }

  ngOnInit() {
  }

}
