import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {Converdetails} from '../model/converter.js';


// export interface Food {
//   value: string;
//   viewValue: string;
// }

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})


export class ConverterComponent implements OnInit {

  currencies: any = [];
  converdetails: Converdetails = new Converdetails();
  convertedResult: any;

  constructor(private data: DataService) { }

  ngOnInit() {
     this.convertedResult = "";
     this.data.getCurrencies().then(data2 => {
       this.currencies = data2['results'];
       let display_Cur = [];
       for (let key in this.currencies) {
            let value = this.currencies[key];
            display_Cur.push(value);

       }
       this.currencies  = display_Cur.sort();
     },
     (err) => {
       console.log(err);
       console.log("there is an error somewhere");

     }
     );

  }
  doconversion(){
    console.log("this is the post param");
    console.log(this.converdetails);
    this.convertedResult = "converting...";
    this.data.doConvert(this.converdetails).then(data => {
      console.log(data);
      let result = data["results"][this.converdetails.from_+"_"+this.converdetails.to_]["val"];
      this.convertedResult = result * this.converdetails.amount;
    });
  }

}
