import { Injectable, Injector } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Crypto {
  crypto_name: string;
  symbol: string;
  current_price: number;
  market_cap: bigint;
  volume_24h: bigint;
  price_change_percentage_24h: number;
}

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  
  private baseUrl = 'https://api.coingecko.com/api/v3';

  constructor(private http: HttpClient) { }

  getMarkets(ids: string[], vsCurrency: string = 'usd'): Observable<Crypto[]> {
    const idsParam = ids.join(',');
 
    return this.http.get<any[]>(`${this.baseUrl}/coins/markets`, {
      params: new HttpParams()
        .set('ids', idsParam)
        .set('vs_currency', vsCurrency)
    }).pipe(
      map(data => data.map(item => ({
        crypto_name: item.id, 
        symbol: item.symbol,
        current_price: item.current_price,
        market_cap: BigInt(item.market_cap),
        volume_24h: BigInt(item.total_volume),
        price_change_percentage_24h: item.price_change_percentage_24h_in_currency || 0 // Adjusting based on actual API response
      })))
    );
  }
}






  

