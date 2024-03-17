import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';



@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'], 
    imports: [RouterOutlet, HomeComponent, DashboardComponent], 
    standalone: true,
  })
  export class AppComponent {
    title = 'Track-My-Crypto'
  }