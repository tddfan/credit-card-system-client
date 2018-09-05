import { Component, OnInit } from '@angular/core';
import {CreditCard} from "../../models/credit-card.model";
import {ValidationResult} from "../../models/validation-result.model";
import {CreditCardService} from "../../service/credit-card.service";


@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {
  public model = new CreditCard();
  public validationResult: ValidationResult = new ValidationResult;
  public allCreditCards: any;

  constructor(private creditCardService : CreditCardService) {}

  onSubmit() {
    console.log(this.model);
    this.creditCardService.add(this.model).subscribe(validationResponse => {
      if(validationResponse.success) {
        this.model = new CreditCard();
        this.getAllCreditCards();
      }
     this.validationResult = validationResponse;
    })
  }

  getAllCreditCards() {
    this.creditCardService.all().subscribe(res => {
      this.allCreditCards = res;
    });
  }

  ngOnInit() {
  }

}
