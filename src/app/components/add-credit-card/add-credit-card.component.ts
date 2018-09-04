import { Component, OnInit } from '@angular/core';
import {CreditCard} from "../../models/credit-card.model";
import {CreditCardService} from "../../service/credit-card.service";


@Component({
  selector: 'app-add-credit-card',
  templateUrl: './add-credit-card.component.html',
  styleUrls: ['./add-credit-card.component.css']
})
export class AddCreditCardComponent implements OnInit {
  public model = new CreditCard();
  public messages : any;
  public allCreditCards : any;

  constructor(private creditCardService : CreditCardService) {}

  onSubmit() {
    console.log(this.model);
    this.creditCardService.add(this.model).subscribe(data => {
      if(data.length == 0) {
        this.messages = data;
      }
     else {
        this.model = new CreditCard();
        this.creditCardService.add(this.model).subscribe(res => {
          this.allCreditCards=res;
        });
      }
    })
  }

  ngOnInit() {
  }

}
