import { Component, OnInit } from '@angular/core';

import { faMailBulk, faCalendar, faLocationArrow, faPhone,  } from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {

  faMailBulk = faMailBulk
  faCalendar = faCalendar
  faLocationArrow = faLocationArrow
  faPhone = faPhone

  

  constructor() { }

  ngOnInit(): void {
    
  }

}
