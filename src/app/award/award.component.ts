import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-award',
  templateUrl: './award.component.html',
  styleUrls: ['./award.component.scss']
})
export class AwardComponent implements OnInit {

  awardDetail = [
    {
      classname: 'address',
      icon: 'bx bx-award',
      title: 'Customer Buddy',
      value: 'Won customer buddy award in October-2021 at the Company’s annual day ceremony.'
    },
    {
      classname: 'email',
      icon: 'bx bx-award',
      title: 'Most Responsible Person',
      value: 'Won the most responsible person of the team award in October-2020 at the Company’s annual day ceremony.'
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
