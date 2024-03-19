//import { Injectable } from '@angular/core';
import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { CryptoPrices } from '../../shared/models/crypto-prices';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  // May need to change the URL for each method
  private baseUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd'
  private _http: HttpClient | null = null;

  constructor(private injector: Injector) { }
  
  private get http(): HttpClient {
    if (!this._http) {
      this._http = this.injector.get(HttpClient);
    }
    return this._http;
  }
 

  getSimplePrice(ids: string[], vsCurrencies: string[]): Observable<any> {
    const idsParam = ids.join(',');
    const vsCurrenciesParam = vsCurrencies.join(',');
    return this.http.get(`${this.baseUrl}/simple_price?ids=${idsParam}&vs_currencies=${vsCurrenciesParam}`);
  }

  getMarkets(ids: string, vsCurrency: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/coins/markets?ids=${ids}&vs_currency=${vsCurrency}`);
  }

  getHistoricalData(id: string, date: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/coins/${id}/history?date=${date}`);
  }



}