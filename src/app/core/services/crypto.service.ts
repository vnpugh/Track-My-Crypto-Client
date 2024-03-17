import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  private baseUrl = 'http://localhost:3000'

  constructor(private http: HttpClient) {}

  getSimplePrice(ids: string[] | string, vsCurrencies: string[] | string): Observable<any> {
    const idsParam = Array.isArray(ids) ? ids.join(',') : ids;
    const currenciesParam = Array.isArray(vsCurrencies) ? vsCurrencies.join(',') : vsCurrencies;
    return this.http.get(`${this.baseUrl}/cryptos/simple_price?ids=${idsParam}&vs_currencies=${currenciesParam}`);
  }



}