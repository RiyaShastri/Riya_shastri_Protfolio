import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  educationList = [
    {
      title: 'Master of Computer Application',
      year: '2015 - 2017',
      schoolName: 'Charotar university of science and technology,Anand, Gujarat',
      detail: 'I have completed my master from Charotar university of science and technology with 89 % (Distinction)'
    },
    {
      title: 'Bachelor of Computer Application',
      year: '2012 - 2015',
      schoolName: 'M.K Institute of computer studies,Bharuch, Gujarat',
      detail: 'I have completed my bachelor from M.K Institute of computer studies,Bharuch with 62% (First Class))'
    },
    {
      title: 'Schooling',
      year: '2000 - 2012',
      schoolName: 'Amity high school,Bharuch,Gujarat',
      detail: 'I have Completed my Schooling from Amity high school ,bharuch with 62% (First Class)'
    },
  ];

  experience = [
    {
      title: 'Sr. Consultant',
      time: 'October 2022 - Present',
      company: 'Narola Infotech',
      detailList: [
        'Work on the Angular development',
        'Contribute to project tracking and planning to decide what actions should be taken',
        'Should be able to evaluate and raise the risk for the project',
        'Do client communication for the project',
        'Independently handle API and all complicated task',
        'Should maintain the project planning and tracking independently',
        'Propose workarounds for the tasks',
        'Evaluate the UX of the project and propose solutions'
      ]
    },
    {
      title: 'Sr.Software Developer',
      time: 'May 2020 - September 2022',
      company: 'Narola Infotech',
      detailList: [
        'Develop assigned front-end work of Angular',
        'Independently handle Backend API',
        'Sent the daily work update to client or manager by end of day',
        'Manage one or more project work in a single day',
        'Do client communication for the project via mail and message'
      ]
    },
    {
      title: 'Software Developer',
      time: 'May 2019 - April 2020',
      company: 'Narola Infotech',
      detailList: [
        'Develop assigned front-end work of Angular',
        'Sent the daily work update to client or manager by end of day',
        'Upload daily work on client server or team server',
        'Manage one or more project work in a single day'
      ]
    },
    {
      title: 'Trainee Developer',
      time: 'January 2019 - April 2019',
      company: 'Narola Infotech',
      detailList: [
        'Learn given technology or frameworks and start creating demo projects and do more practice.',
        'Assigned live projects work under guidance of manager.'
      ]
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
