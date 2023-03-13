import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  skills = [
    {
      img: 'angular.png',
      title: 'Angular',
      detail: 'Knowledge of Angular2 + Frameworks',
    },
    {
      img: 'react.png',
      title: 'React',
      detail: 'Basic knowledge of React and Redux',
    },
    {
      img: 'js.png',
      title: 'JavaScript',
      detail: 'Knowledge of javascript',
    },
    {
      img: 'html5img.png',
      title: 'HTML',
      detail: 'Knowledge of HTML',
    },
    {
      img: 'stylecss3.png',
      title: 'CSS',
      detail: 'Knowledge of CSS',
    },
    {
      img: 'bootstrap.png',
      title: 'Bootstrap',
      detail: 'knowledge of Bootstrap',
    },
    {
      img: 'jira2.png',
      title: 'Jira',
      detail: 'Knowledge of Jira for task and bug tracking',
    },
    {
      img: 'git.png',
      title: 'Git',
      detail: 'Knowledge of git for version control ',
    },
    {
      img: 'sonar.png',
      title: 'Sonarqube',
      detail: 'Knowledge of sonarqube for code qulity',
    },
    {
      img: 'karma.png',
      title: 'Karma',
      detail: 'Knowledge of Karma to implemented Unit test in Angular',
    },
    {
      img: 'jasmine.png',
      title: 'Jasmin',
      detail: 'Knowledge of Jasmin to implemented Unit test in Angular',
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
