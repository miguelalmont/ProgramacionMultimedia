import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiRestaurantService {

  constructor(private http: HttpClient) { }

  async getMenu() {
    return this.http.get('https://proyectoionic-1b6fc-default-rtdb.europe-west1.firebasedatabase.app/Menu.json')
    .toPromise<any>();
  }
  
}
