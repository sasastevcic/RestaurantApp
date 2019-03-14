import { Component, OnInit } from '@angular/core';
import { RestaurantService } from './service/restaurant.service';
import { RestaurantList } from './model/restaurant-list.model';
import { PARAMETERS } from '@angular/core/src/util/decorators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'dr-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  restaurants: RestaurantList;

  parameters = {
    sort: "rating",
    sortDirection: "desc",
    page: 1,
    pageSize: 12,
    filter: {
      priceFrom: 1,
      priceTo: 5,
      cuisine: ""
    }
  };

  constructor(private rs: RestaurantService,
              private route: ActivatedRoute
              ) { }

  ngOnInit() {
    this.route.params.subscribe(newParams => {
      let cuisine = newParams['cuisine'] == 'all' ? '' : newParams['cuisine'];
      this.parameters.filter.cuisine = cuisine;
      this.parameters.page = 1;
      this.updateRestaurants();
});
  }

  updateRestaurants() {
    this.rs.getAll(this.parameters).subscribe(data => this.restaurants = data);
  }

  pageChanged(newPage) {
    this.parameters.page = newPage.page;
    this.updateRestaurants();
  }

}
