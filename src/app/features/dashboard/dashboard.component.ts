import { Component, OnInit } from '@angular/core';
import { CryptoService } from '../../core/services/crypto.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CryptoPrices } from '../../shared/models/crypto-prices';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    HttpClientModule, CommonModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  simplePrices!: CryptoPrices


  constructor(private cryptoService: CryptoService) {}

  ngOnInit() {
    this.cryptoService.getSimplePrice(['bitcoin', 'ethereum'], ['usd']).subscribe({
      next: (data) => {
        this.simplePrices = data; 
      },
      error: (error) => console.error('Fetching error:', error),
    });
  }
}