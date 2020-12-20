import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

import { ApiRestaurantService } from '../services/api-restaurant.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public menu: any = [];
  public selectedOrder: any =[]
  public finalOrder: any = []

  constructor(private apiService: ApiRestaurantService,
    private router: Router) {}

  async ngOnInit() {
    this.menu = await this.apiService.getMenu()
  }

  public addOrder() {
    this.finalOrder = this.finalOrder.concat(this.selectedOrder)
    this.selectedOrder = []
  }

  public onSubmit() {
    let navExtras: NavigationExtras = {
      state: {
        order: this.finalOrder
      }
    };
    this.router.navigate(['/tabs/tab3'], navExtras);
    this.selectedOrder = []
    this.finalOrder = []
  }

}
