import { CryptoService } from '../../core/services/crypto.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Crypto } from '../../core/services/crypto.service';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    HttpClientModule, CommonModule, MatTableModule, MatPaginatorModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})

export class DashboardComponent implements AfterViewInit {

  displayedColumns: string[] = ['crypto_name', 'symbol', 'current_price', 'market_cap', 'volume_24h', 'price_change_percentage_24h'];
  dataSource = new MatTableDataSource<Crypto>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private cryptoService: CryptoService) {}

  ngAfterViewInit() {

    const ids = ['bitcoin', 'ethereum', 'ripple', 'litecoin'];
    const vsCurrency = 'usd';

    this.cryptoService.getMarkets(ids, vsCurrency).subscribe(data => {
 
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator;
    });
  }
}















