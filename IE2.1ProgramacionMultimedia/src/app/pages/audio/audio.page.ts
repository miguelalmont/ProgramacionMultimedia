import { Component, OnInit } from '@angular/core';
import { alertController } from '@ionic/core';

@Component({
  selector: 'app-audio',
  templateUrl: './audio.page.html',
  styleUrls: ['./audio.page.scss'],
})
export class AudioPage implements OnInit {

  constructor() { }

  public async showInfo() {
    const alert = await alertController.create({
      header: 'Información de la aplicación',
      message: 'Esta aplicación ha sido desarrollada para la clase de Programación Multiplataforma del Colegio Salesianas de Nervión.',
      buttons: ['Aceptar']
    });

    await alert.present();
  }

  ngOnInit() {
  }
  
}
