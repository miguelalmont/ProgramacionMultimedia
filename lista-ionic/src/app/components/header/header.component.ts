import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  @Input() titulo: string = '';

  nombreBoton: string = this.nombreTitulo();

  constructor(private router: Router) {}

  public nombreTitulo() : string{
    if (this.router.url == "/extra")
      return 'Inicio';
    else
      return 'Siguiente';
  }

  public siguiente() {
    if (this.router.url == "/action-sheet")
      this.router.navigate(["/alert"]);
    else if (this.router.url == "/alert")
      this.router.navigate(["/extra"]);
    else
      this.router.navigate(["/inicio"]);
  }
}
