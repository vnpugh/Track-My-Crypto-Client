import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './features/home/home.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, HomeComponent,]
})
export class AppComponent {
  title = 'track-my-crypto-client';
}
