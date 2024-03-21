// service to interact with Rails backend to fetch the data
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// change to environment.ts before deploying; update path
import { environment } from '../../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  private apiUrl = environment.apiUrl

  constructor(private http: HttpClient) { }

  getMarkets(ids: string[], vsCurrency: string = 'usd'): Observable<any> {
    const idsParam = ids.join(',');
    const url = `${this.apiUrl}/coins/markets?vs_currency=${vsCurrency}&ids=${idsParam}`;
    return this.http.get<Crypto[]>(url);
  }
}






  

