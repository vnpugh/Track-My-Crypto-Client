import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./features/home/home.component";
import { Routes, RouterModule } from "@angular/router";
import { AppRoutingModule } from './app.routes';


// Define project routes
const routes: Routes = [
    { path: '', component: HomeComponent, title: 'Home' }
  ];

  export class AppModule {
    static withRoot(): any {
      return {
        ngModule: AppModule,
        providers: [],
        imports: [
          BrowserModule,
          RouterModule.forRoot(routes)
        ],
        bootstrap: [AppComponent] 
      };
    }

  }

