import { Injectable } from '@angular/core';
import{Http} from '@angular/http';
@Injectable()
export class HomeService {

  constructor(private http:Http) { }
  getCardData(){
    return this.http.get("http://localhost:3010/api/card");
  }
}
