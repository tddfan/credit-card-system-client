import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {RequestOptions, Request, RequestMethod} from '@angular/http';

import { Observable } from 'rxjs';
import {CreditCard} from "../models/credit-card.model";

let count = 0;

@Injectable()
export class CreditCardService  {

  public constructor(private http: HttpClient) {


  }
  httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  public all() {
    return this.http.get('http://localhost:8080/api/all');
  }
  add (creditCard: CreditCard) {
    return this.http.post("http://localhost:8080/api/add", creditCard, this.httpOptions);
  }
}
