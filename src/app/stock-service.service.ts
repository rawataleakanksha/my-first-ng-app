import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StockServiceService {


  getSTocks():String[]{

    return ['Applwe','gogo','ibm','no'];


  }
  constructor() { }
}
