import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestaurantList } from '../model/restaurant-list.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Restaurant } from '../model/restaurant.model';
import { MenuList } from '../model/menu-list';

const baseUrl = 'http://localhost:3000/api/restaurants';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  restaurants: RestaurantList;

  constructor(private http: HttpClient) { }

  getAll(params?): Observable<RestaurantList> {
    let queryParams = {};

    if(params) {
      queryParams = { 
        params : new HttpParams()
          .set('sort', params.sort || '')
          .set('sortDirection', params.sortDirection || '')
          .set('page', params.page || '1')
          .set('pageSize', params.pageSize || '12')
          .set('filter', params.filter && JSON.stringify(params.filter) || '')
      };
    }
    return this.http.get(baseUrl, queryParams).pipe(map(response => new RestaurantList(response)));
  }

  getMenu(restaurantId: number): Observable<MenuList> {
    return this.http.get<RestaurantList>(baseUrl + "/" + restaurantId + "/menus")
      .pipe(map(res => {
        return new MenuList(res);
      }));
    }
}
