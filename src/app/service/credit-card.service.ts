import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import {CreditCard} from "../models/credit-card.model";
import {ValidationResult} from "../models/validation-result.model";

let count = 0;

@Injectable()
export class CreditCardService  {

  public constructor(private http: HttpClient) {


  }
  httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  public all(): Observable<CreditCard[]> {
    return this.http.get<CreditCard[]>('http://localhost:8080/api/all');
  }

  public add(creditCard: CreditCard): Observable<ValidationResult> {
    return this.http.post<ValidationResult>("http://localhost:8080/api/add", creditCard, this.httpOptions);
  }
}
