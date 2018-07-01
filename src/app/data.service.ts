import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,toPromise } from 'rxjs';
import {Converdetails} from '../model/converter.js';

@Injectable({
  providedIn: 'root'
})
export class DataService
{

    currencies: any = [];
    constructor(private http:HttpClient) { }

  getCurrencies(): Promise <any>
  {
    return this.http.get('https://free.currencyconverterapi.com/api/v5/currencies').toPromise();

  }
  doConvert(converdetails: Converdetails): Promise <any>{
     return this.http.get("https://free.currencyconverterapi.com/api/v5/convert?q="+converdetails.from_+"_"+converdetails.to_"&compact=y").toPromise()
  }
}
