import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './core/sidebar/sidebar.component';
import { HomepageComponent } from './core/homepage/homepage.component';
import { AboutComponent } from './core/about/about.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { PaginationComponent } from './restaurant/pagination/pagination.component';
import { RestaurantListComponent } from './restaurant/restaurant-list/restaurant-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RestaurantsModalComponent } from './restaurant/restaurants-modal/restaurants-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomepageComponent,
    AboutComponent,
    RestaurantComponent,
    PaginationComponent,
    RestaurantListComponent,
    RestaurantsModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  entryComponents: [RestaurantsModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
