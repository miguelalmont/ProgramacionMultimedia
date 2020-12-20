import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  finalOrder: any = []
  totalPvp: number = 0

  constructor(private route: ActivatedRoute, private router: Router,
    public alertController: AlertController) {
    this.route.queryParams.subscribe(() => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.finalOrder = this.router.getCurrentNavigation().extras.state.order;
        this.calculatePrice()
      }
    })
  }

  async confirmOrder() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmación',
      message: '¿Quieres realizar el pedido?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'danger'
        }, {
          text: 'Si',
          handler: () => {
            this.totalPvp = 0
            this.finalOrder = []
            this.orderRealized()
          }
        }
      ]
    });

    await alert.present();
  }

  async cancelOrder() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirmación',
      message: '¿Quieres cancelar el pedido?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          cssClass: 'danger'
        }, {
          text: 'Si',
          handler: () => {
            this.totalPvp = 0
            this.finalOrder = []
          }
        }
      ]
    });

    await alert.present();
  }

  async orderRealized() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Pedido realizado',
      message: 'Su pedido está en marcha.',
      buttons: ['OK']
    });

    await alert.present();
  }

  public deleteItem(item: any) {
    this.finalOrder = this.finalOrder.filter(function(ele){ 
      return ele != item; 
    });
    this.calculatePrice()
  }

  public calculatePrice() {
    this.totalPvp = 0
    for (const item of this.finalOrder) {
      this.totalPvp += item.pvp
    }
  }

}
