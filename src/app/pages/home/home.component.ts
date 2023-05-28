
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isLoader:boolean=true;
  private timeoutId: any;
  
  constructor() { }

  ngOnInit(): void {
    this.timeoutId = setTimeout(() => {
      this.isLoader=false;
    }, 2000); 
  }

  ngOnDestroy(): void {
    clearTimeout(this.timeoutId);
  }

}
