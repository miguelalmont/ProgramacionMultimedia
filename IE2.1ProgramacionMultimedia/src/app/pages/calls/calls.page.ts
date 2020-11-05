import { Component, OnInit, ElementRef, ViewChildren, QueryList } from '@angular/core';

import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-calls',
  templateUrl: './calls.page.html',
  styleUrls: ['./calls.page.scss'],
})

export class CallsPage implements OnInit {

  pj = {
    imageURL: '',
    title: '',
    subtitle: ''
  }

  @ViewChildren('image') images :QueryList<ElementRef>;
  @ViewChildren('title') titles :QueryList<ElementRef>;
  @ViewChildren('subtitle') subtitles :QueryList<ElementRef>;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public funcion(pjNumber :number) {

    this.pj.imageURL = this.images.toArray()[pjNumber].nativeElement.src
    this.pj.title = this.titles.toArray()[pjNumber].nativeElement.textContent
    this.pj.subtitle = this.subtitles.toArray()[pjNumber].nativeElement.textContent
    
    console.log(this.pj)
    
    let navExtras: NavigationExtras = {
      state: {
        pj: this.pj
      }
    };
    this.router.navigate(['/tabs/calls/call-info'], navExtras);

  }
}
