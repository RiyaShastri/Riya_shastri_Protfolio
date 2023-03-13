import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  userDetail = [
    {
      classname: 'address',
      icon: 'bi bi-geo-alt',
      title: 'Location',
      value: '18, Geeta park society ,Near civil hospital, Bharuch - 392001'
    },
    {
      classname: 'email',
      icon: 'bi bi-envelope',
      title: 'Email',
      value: 'riyashastri7970@gmail.com'
    },
    {
      classname: 'phone',
      icon: 'bi bi-phone',
      title: 'Call',
      value: '+91 9512235008'
    },
  ];


  constructor() { }

  ngOnInit(): void {
  }

}
