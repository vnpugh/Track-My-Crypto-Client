import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { CryptoService } from './core/services/crypto.service';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HomeComponent,]
})
export class AppComponent implements OnInit {

  data: any;

  constructor(private cryptoService: CryptoService) {}


  ngOnInit() {
    this.cryptoService.getSimplePrice(['bitcoin', 'ethereum'], 'usd').subscribe({
      next: (data) => {
        this.data = data;
        console.log(data);
      },
      error: (error) => console.error(error)
    });
  }
}
