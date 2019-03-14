import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from '../model/restaurant.model';
import { RestaurantService } from '../service/restaurant.service';
import { Menu } from '../model/menu';

@Component({
  selector: 'dr-restaurants-modal',
  templateUrl: './restaurants-modal.component.html',
  styleUrls: ['./restaurants-modal.component.css']
})
export class RestaurantsModalComponent implements OnInit {
  @Input() restaurant: Restaurant;
  menu: Menu;

  constructor(private restaurantsService: RestaurantService) { }

  ngOnInit() {
    this.restaurantsService.getMenu(this.restaurant._id).subscribe(res => {
      this.menu = res.results[0];
    });
  }

}
