import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  linkedinProfile = "https://www.linkedin.com/in/riya-shastri-31b456128/";
  myDetail = [
    {
      label: 'Full Name',
      value: 'Riya Yagneshbhai Shastri',
      isDisplayLeft: true,
    },
    {
      label: 'Phone',
      value: '+91 9512235008',
      isDisplayLeft: true,
    },
    {
      label: 'Total Experience',
      value: '4.3 Years',
      isDisplayLeft: true,
    },
    {
      label: 'Degree',
      value: 'Master',
      isDisplayLeft: true,
    },
    {
      label: 'Birthday',
      value: '13 August 1994',
      isDisplayLeft: false,
    },
    {
      label: 'Email id',
      value: 'riyashastri7970@gmail.com',
      isDisplayLeft: false,
    },
    {
      label: 'Relevant Experience',
      value: '4.3 Years',
      isDisplayLeft: false,
    },
    {
      label: 'Address',
      value: '18, Geetapark society, Near new civil hospital, Bharuch ,Gujarat - 392001',
      isDisplayLeft: false,
    },
  ];
  overviews = [
    "4+ Years of diverse experience in Application Development with Angular 2+.",
    "Expertise in developing, deploying, and debugging applications for Website development.",
    "Experience in working with TypeScript, JavaScript",
    "Implemented RxJS and NgRx to cache data in UI for quick rendering.",
    "Knowledge with Social media integration like Google login, Facebook login, and etc.",
    "Quickly adapting to new environments, new technologies, and facing new challenges.",
    "Understanding fundamental design principles behind a scalable application.",
    "Excellent communication and interpersonal skills. Quick adopt new technologies to deliver outputs in short deadlines.",
    "Proficient understanding of code versioning tools, such as Git",
    "Ability to improvise current code and troubleshoot problems.",
    "Comfortable working independently as well as with teamwork on a large-scale project.",
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
