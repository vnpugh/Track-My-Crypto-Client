import { CryptoService } from '../../core/services/crypto.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Crypto } from '../../shared/models/crypto';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    HttpClientModule, CommonModule, MatTableModule, MatPaginatorModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent implements OnInit {
                                //'crypto_name' //'image', 'symbol'
  displayedColumns: string[] = ['crypto', 'current_price', 'market_cap', 'total_volume', 'price_change_percentage_24h'];
  dataSource = new MatTableDataSource<Crypto>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
   
  cryptoData: Crypto[] = [];

   onPageChange(event: PageEvent) {
    // table pagination
  
    const startIndex = event.pageIndex * event.pageSize;
    const endIndex = startIndex + event.pageSize;
    const partOfData = this.cryptoData.slice(startIndex, endIndex);

    this.dataSource = new MatTableDataSource<Crypto>(partOfData);
  }

  constructor(private cryptoService: CryptoService) {}

  ngOnInit(): void {
    const ids = ['bitcoin', 'ethereum', 'litecoin', 'solana', 'tether',
    'ripple', 'cardano', 'polkadot', 'bitcoin cash', 'stellar', 'chainlink', 
    'binance coin', 'monero', 'eos', 'nem', 'tezos', 'tron', 'dash', 'ethereum classic', 
    'zcash', 'theta', 'neo', 'vechain', 'cosmos', 'iota', 'uniswap', 'aave', 'kusama', 
    'algorand', 'compound', 'sushiswap', 'maker', 'dogecoin', 'avalanche', 'filecoin', 
    'polygon', 'terra', 'decentraland', 'the graph', 'synthetix'];

    const vsCurrency = 'usd';

    this.dataSource.paginator = this.paginator;

    this.cryptoService.getMarkets(ids, vsCurrency).subscribe({
      next: (data) => {
        this.cryptoData = data;
        this.dataSource.data = this.cryptoData; 
        this.dataSource.paginator = this.paginator; 
      },
      error: (error) => {
        console.error('Error fetching the crypto data:', error);
      }
    });
  }
}













