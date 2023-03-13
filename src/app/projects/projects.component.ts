import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {

  displayModel = "none";
  selectedProjectDetail = {};
  moduleList = [
    'Admin Portals',
    'Financial application',
    'ECommerce sites for single country and multiple countries B2B (Business to business) sites',
    'Event management'
  ]

  projectDetail = [
    {
      logo: 'cummins.png',
      projectName: 'CMP Dashboard',
      liveURL: '',
      technology: 'Angular 13',
      description: '<p> CMP Dashboard is Enhance and improvise the Manual Scheduling process of workorders/jobs for operations, by automating Scheduling process, providing the live data feeds to various manufacturing lines on status of jobs, better visibility of the Material availability. </p> <p class="mt-2"> CMP Dashboard helps Operations and other functions to show what jobs are Scheduled for them to run on the line, it currently shows Job#/Part#/Qty and other meta data tied to the builds. It has Options to Mark Job Status  too like :  Issue-Red, Complete-Green and add comments.</p>',
      responsibilities: [
        'Implemented whole UI design and template color theme design too.',
        'Written Unite Test for all Frond-end pages and Got the 44% Code coverage points in SonarQube.',
        'Manage multiple user role and permissions.',
        'Used HTTP interceptor to manage http calls and auth guard to provide security',
        'Developed UI with material controls, HTML, CSS and Bootstrap',
        'Developed common components for Dynamic table component, Common Filters , File Upload/Download.'
      ]
    },
    {
      logo: 'lumiere.png',
      projectName: 'Lumiere32',
      liveURL: 'https://lumiere32.my/my',
      technology: 'Angular 12',
      description: ' Lumiere32 is an eCommerce application where users can buy medical and dental professional products and deal with dealers.Our goal is to ensure a seamless transition between a product, the distribution ecosystem, and the customer.Developed the client ( <a href="https://lumiere32.my/my" target="_blank"> https://lumiere32.my/my </a>) & vendor site (<a href="https://vendor.lumiere32.my" target="_blank">  https://vendor.lumiere32.my </a>) of Lumiere32. ',
      responsibilities: [
        'Requirement gathering, technical architecture decision, Database design',
        'Payment gateways integration (Paypal, ipay88, Stripe) ',
        'Develop common components for the Payment module, Tabular & Graphical data representation. ',
        'Implement role and permissions-based access',
        'Implement internationalization (i18n)',
        'Used HTTP interceptor to manage HTTP calls and auth guard to provide security',
        'Developed UI with material controls, HTML, CSS, and Bootstrap'
      ]
    },
    {
      logo: 'planplus.png',
      projectName: 'Plan Plus',
      liveURL: ' https://morningstarriskprofiler.com/',
      technology: 'Angular 5',
      description: '<p> Plan plus is a Canada-based company that develops financial products The system has role-based access for advisors The system allows the advisor to create a client and his family to calculate risk scores from Finametrica 10 or Finametrica 25 standards, and create a portfolio and asset allocation based on the risk of the person. The system is multilingual based on allowed languages for logged-in advisors. </p> <p> Advisor will get a graphical representation of data in terms of different sets of graphs created using amChart library. </p>',
      responsibilities: [
        'Review and understand the flowchart and user stories',
        'Communication with the client to understand the requirement and relation of the new module with existing modules',
        'Create a graphical design based on the requirement ',
        'Leading the team of 8 members including front end and back end',
      ]
    },
    {
      logo: 'giftzzle.png',
      projectName: 'Giftzzle',
      liveURL: 'http://staging.giftzzle.com/',
      technology: 'Angular 9',
      description: '<p> This is an event management site. Users can create the events with the details like Event title, Event address, Event date, Gift images, and Deadline date. Guests are invited by entering the Name and Email / Contact No. of the guest. An Event invitation card will be sent to guests through the mail, SMS, or printable PDF as a hard copy. </p>',
      responsibilities: [
        'Design & develop user-friendly UI',
        'Implemented payment gateway (Paypal) for event contribution.',
        'Also Implemented social login functionality like Google and Facebook login.',
        'Communicate with a client to clarify requirements',
      ]
    },
    {
      logo: '',
      projectName: 'LED Signer',
      liveURL: 'https://www.digitaldisplayservice.com/',
      technology: ' Angular 6',
      description: ' <p> A portal to customize advertisements for the LED signs with plenty of options to schedule like Daily, Weekly, Monthly, or with a specific time. An Image or Video can be served as an advertisement on the LED signs. Ability to add sub-users by assigning access rights as per requirement. </p>',
      responsibilities: [
        'Requirement gathering and client communication',
        'Review and refactor an existing source code written by another developer',
        'Design & develop User & Admin dashboard screen with an attractive look and feel to manage LED signs and schedule advertisements.',
        'API integration & populate API’s data properly in UI.',
      ]
    },
    {
      logo: 'Trophy-Logo-white.png',
      projectName: 'Trophy pet foods',
      liveURL: ' https://www.mytrophy.dog',
      technology: ' Angular 9',
      description: '<p> This is an eCommerce admin site for pet foods. </p> ',
      responsibilities: [
        'Used bootstrap, PrimeNg, etc plugins to create user-friendly UI.',
        'Implemented angular data table package for pagination, searching, and filtering data.'
      ]
    },
    {
      logo: '',
      projectName: 'Daily Task Manager',
      liveURL: '',
      technology: 'Angular 9',
      description: '<p>  This site was created for internal use of Narola Infotech to manage employe’s daily tasks and end-of-day updates.The purpose of creating this application is to reduce employee time for reporting his daily updates. Team leaders can see their employes task details. </p>',
      responsibilities: [
        'Design & develop user-friendly UI',
        'Manage more than 14 role-based functionalities.',
        'Worked on ng bootstrap for date filter, tooltip, and sweet alert for displaying alert messages.'
      ]
    },
    {
      logo: 'cgi.png',
      projectName: 'CGI Web Automation',
      liveURL: '',
      technology: '[ Gauge  + Node.js  + Webdriverio  +  Selenium ]',
      description: ' <p> Automation of managing Annual financial data and activities of CGI Maine application. A script for automation needs to be written in the Gauge framework using Webdriver.IO to manipulate DOM elements to get/set values or click on links.The user has to pass the required parameters for the automation using an interactive UI A detailed report will be generated that represents a summary of Automation with a number of Successful, Failed and Skipped test cases along with screenshots of failed scenarios. </p>',
      responsibilities: [
        'Requirement gathering in terms of the flow of processes to run and parameters needed to run a particular process.',
        'Design & develop UI with an attractive look and feel to take input from Users.',
        'I was also responsible for creating gauge scripts to perform automation on selected processes.'
      ]
    },



  ];

  constructor() { }

  ngOnInit(): void {
  }

  moreDetailClick(selectedProject: any) {
    this.displayModel = "block";
    this.selectedProjectDetail = { ...selectedProject };
  }

  isCloseModel(event: any) {
    if (event) {
      this.displayModel = event['displayModel']
    }
  }

}
