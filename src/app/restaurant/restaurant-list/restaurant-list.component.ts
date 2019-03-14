import { Component, OnInit, Input } from '@angular/core';
import { RestaurantsModalComponent } from '../restaurants-modal/restaurants-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'dr-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {
  @Input() restaurant;
  constructor(private modal: NgbModal) { }

  ngOnInit() {  }

  openModal() {
    const modalRef = this.modal.open(RestaurantsModalComponent);
    modalRef.componentInstance.restaurant = this.restaurant;
  }
}
