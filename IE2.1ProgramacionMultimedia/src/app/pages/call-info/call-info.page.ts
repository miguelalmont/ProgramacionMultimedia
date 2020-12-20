import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-call-info',
  templateUrl: './call-info.page.html',
  styleUrls: ['./call-info.page.scss'],
})
export class CallInfoPage implements OnInit {

  pj = {
    imageURL: '',
    title: '',
    subtitle: ''
  }

@ViewChild('image') image :ElementRef;

  constructor(private route: ActivatedRoute, private router: Router) {

    this.route.queryParams.subscribe(() => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.pj = this.router.getCurrentNavigation().extras.state.pj;
      }
    });
  }

  public goBack() {
     this.router.navigate(['/tabs/calls']) 
  }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    this.image.nativeElement.src = this.pj.imageURL
  }

}
